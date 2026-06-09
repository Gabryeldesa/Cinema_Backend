import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class IngressoService {
  constructor(private prisma: PrismaService) {}

  async create(createIngressoDto: CreateIngressoDto) {
    try {
      return await this.prisma.ingresso.create({ data: createIngressoDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
        throw new BadRequestException('Sessão informada não existe');
      }
      throw e;
    }
  }

  findAll() {
    return this.prisma.ingresso.findMany({ include: { sessao: true } });
  }

  async findOne(id: number) {
    const ingresso = await this.prisma.ingresso.findUnique({ where: { id }, include: { sessao: true } });
    if (!ingresso) throw new NotFoundException(`Ingresso #${id} não encontrado`);
    return ingresso;
  }

  async update(id: number, updateIngressoDto: UpdateIngressoDto) {
    await this.findOne(id);
    return this.prisma.ingresso.update({ where: { id }, data: updateIngressoDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.ingresso.delete({ where: { id } });
  }
}