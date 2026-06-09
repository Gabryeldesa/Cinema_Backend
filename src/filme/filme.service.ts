import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  async create(createFilmeDto: CreateFilmeDto) {
    try {
      return await this.prisma.filme.create({ data: createFilmeDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
        throw new BadRequestException('Cinema informado não existe');
      }
      throw e;
    }
  }

  findAll() {
    return this.prisma.filme.findMany({ include: { sessoes: true } });
  }

  async findOne(id: number) {
    const filme = await this.prisma.filme.findUnique({ where: { id }, include: { sessoes: true } });
    if (!filme) throw new NotFoundException(`Filme #${id} não encontrado`);
    return filme;
  }

  async update(id: number, updateFilmeDto: UpdateFilmeDto) {
    await this.findOne(id);
    return this.prisma.filme.update({ where: { id }, data: updateFilmeDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.filme.delete({ where: { id } });
  }
}