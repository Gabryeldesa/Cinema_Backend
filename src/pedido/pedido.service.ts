import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const { ingressoIds, lancheIds, ...data } = createPedidoDto;
    try {
      return await this.prisma.pedido.create({
        data: {
          ...data,
          ingressos: ingressoIds ? { connect: ingressoIds.map(id => ({ id })) } : undefined,
          lanches: lancheIds ? { connect: lancheIds.map(id => ({ id })) } : undefined,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
        throw new BadRequestException('Um ou mais ingressoIds/lancheIds não existem');
      }
      throw e;
    }
  }

  findAll() {
    return this.prisma.pedido.findMany({ include: { ingressos: true, lanches: true } });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id }, include: { ingressos: true, lanches: true } });
    if (!pedido) throw new NotFoundException(`Pedido #${id} não encontrado`);
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    await this.findOne(id);
    const { ingressoIds, lancheIds, ...data } = updatePedidoDto;
    return this.prisma.pedido.update({
      where: { id },
      data: {
        ...data,
        ingressos: ingressoIds ? { set: ingressoIds.map(id => ({ id })) } : undefined,
        lanches: lancheIds ? { set: lancheIds.map(id => ({ id })) } : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pedido.delete({ where: { id } });
  }
}