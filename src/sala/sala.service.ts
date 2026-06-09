import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {}

  async create(createSalaDto: CreateSalaDto) {
    try {
      return await this.prisma.sala.create({ data: createSalaDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
        throw new BadRequestException('Cinema informado não existe');
      }
      throw e;
    }
  }

  findAll() {
    return this.prisma.sala.findMany({ include: { poltronas: true } });
  }

  async findOne(id: number) {
    const sala = await this.prisma.sala.findUnique({ where: { id }, include: { poltronas: true } });
    if (!sala) throw new NotFoundException(`Sala #${id} não encontrada`);
    return sala;
  }

  async update(id: number, updateSalaDto: UpdateSalaDto) {
    await this.findOne(id);
    return this.prisma.sala.update({ where: { id }, data: updateSalaDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sala.delete({ where: { id } });
  }
}