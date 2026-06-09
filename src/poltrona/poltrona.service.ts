import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePoltronaDto } from './dto/create-poltrona.dto';
import { UpdatePoltronaDto } from './dto/update-poltrona.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PoltronaService {
  constructor(private prisma: PrismaService) {}

  async create(createPoltronaDto: CreatePoltronaDto) {
    try {
      return await this.prisma.poltrona.create({ data: createPoltronaDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
        throw new BadRequestException('Sala informada não existe');
      }
      throw e;
    }
  }

  findAll() {
    return this.prisma.poltrona.findMany();
  }

  async findOne(id: number) {
    const poltrona = await this.prisma.poltrona.findUnique({ where: { id } });
    if (!poltrona) throw new NotFoundException(`Poltrona #${id} não encontrada`);
    return poltrona;
  }

  async update(id: number, updatePoltronaDto: UpdatePoltronaDto) {
    await this.findOne(id);
    return this.prisma.poltrona.update({ where: { id }, data: updatePoltronaDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.poltrona.delete({ where: { id } });
  }
}