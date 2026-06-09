import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Prisma } from '@prisma/client';
export declare class PedidoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPedidoDto: CreatePedidoDto): Promise<{
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    findAll(): Prisma.PrismaPromise<({
        ingressos: {
            id: number;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
        lanches: {
            nome: string;
            id: number;
            descricao: string | null;
            valorUnitario: number;
            qtUnidade: number;
        }[];
    } & {
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    })[]>;
    findOne(id: number): Promise<{
        ingressos: {
            id: number;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
        lanches: {
            nome: string;
            id: number;
            descricao: string | null;
            valorUnitario: number;
            qtUnidade: number;
        }[];
    } & {
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<{
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
}
