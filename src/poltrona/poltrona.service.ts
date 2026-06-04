import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePoltronaDto } from './dto/create-poltrona.dto';
import { UpdatePoltronaDto } from './dto/update-poltrona.dto';

@Injectable()
export class PoltronaService {
  constructor(private prisma: PrismaService) {}

  create(createPoltronaDto: CreatePoltronaDto) {
    return this.prisma.poltrona.create({ data: createPoltronaDto });
  }

  findAll() {
    return this.prisma.poltrona.findMany();
  }

  findOne(id: number) {
    return this.prisma.poltrona.findUnique({ where: { id } });
  }

  update(id: number, updatePoltronaDto: UpdatePoltronaDto) {
    return this.prisma.poltrona.update({ where: { id }, data: updatePoltronaDto });
  }

  remove(id: number) {
    return this.prisma.poltrona.delete({ where: { id } });
  }
}