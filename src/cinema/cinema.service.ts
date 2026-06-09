import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CinemaService {
  constructor(private prisma: PrismaService) {}

  async create(createCinemaDto: CreateCinemaDto) {
    try {
      return await this.prisma.cinema.create({ data: createCinemaDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
        throw new BadRequestException('Referência inválida: verifique os IDs informados');
      }
      throw e;
    }
  }

  findAll() {
    return this.prisma.cinema.findMany({ include: { salas: true } });
  }

  async findOne(id: number) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id },
      include: { salas: true },
    });
    if (!cinema) throw new NotFoundException(`Cinema #${id} não encontrado`);
    return cinema;
  }

  async update(id: number, updateCinemaDto: UpdateCinemaDto) {
    await this.findOne(id); // lança 404 automaticamente se não existir
    return this.prisma.cinema.update({ where: { id }, data: updateCinemaDto });
  }

  async remove(id: number) {
  await this.findOne(id);

  // Busca todas as sessões do cinema
  const sessoes = await this.prisma.sessao.findMany({ where: { cinemaId: id } });
  const sessaoIds = sessoes.map(s => s.id);

  // Deleta ingressos das sessões
  await this.prisma.ingresso.deleteMany({ where: { sessaoId: { in: sessaoIds } } });

  // Deleta poltronas das salas
  const salas = await this.prisma.sala.findMany({ where: { cinemaId: id } });
  const salaIds = salas.map(s => s.id);
  await this.prisma.poltrona.deleteMany({ where: { salaId: { in: salaIds } } });

  // Agora deleta na ordem correta
  await this.prisma.sessao.deleteMany({ where: { cinemaId: id } });
  await this.prisma.filme.deleteMany({ where: { cinemaId: id } });
  await this.prisma.sala.deleteMany({ where: { cinemaId: id } });

  return this.prisma.cinema.delete({ where: { id } });
}
}