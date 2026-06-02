import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePoutronaDto } from './dto/create-poutrona.dto';
import { UpdatePoutronaDto } from './dto/update-poutrona.dto';

@Injectable()
export class PoutronaService {
  constructor(private prisma: PrismaService) {}

  create(createPoutronaDto: CreatePoutronaDto) {
    return this.prisma.poutrona.create({ data: createPoutronaDto });
  }

  findAll() {
    return this.prisma.poutrona.findMany();
  }

  findOne(id: number) {
    return this.prisma.poutrona.findUnique({ where: { id } });
  }

  update(id: number, updatePoutronaDto: UpdatePoutronaDto) {
    return this.prisma.poutrona.update({ where: { id }, data: updatePoutronaDto });
  }

  remove(id: number) {
    return this.prisma.poutrona.delete({ where: { id } });
  }
}