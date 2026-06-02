import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Injectable()
export class CinemaService {
  constructor(private prisma: PrismaService) {}

  create(createCinemaDto: CreateCinemaDto) {
    return this.prisma.cinema.create({ data: createCinemaDto });
  }

  findAll() {
    return this.prisma.cinema.findMany({ include: { salas: true } });
  }

  findOne(id: number) {
    return this.prisma.cinema.findUnique({ where: { id }, include: { salas: true } });
  }

  update(id: number, updateCinemaDto: UpdateCinemaDto) {
    return this.prisma.cinema.update({ where: { id }, data: updateCinemaDto });
  }

  remove(id: number) {
    return this.prisma.cinema.delete({ where: { id } });
  }
}