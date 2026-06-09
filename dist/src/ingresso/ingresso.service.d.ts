import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
import { Prisma } from '@prisma/client';
export declare class IngressoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createIngressoDto: CreateIngressoDto): Promise<{
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
    findAll(): Prisma.PrismaPromise<({
        sessao: {
            id: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
            cinemaId: number;
        };
    } & {
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    })[]>;
    findOne(id: number): Promise<{
        sessao: {
            id: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
            cinemaId: number;
        };
    } & {
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
    update(id: number, updateIngressoDto: UpdateIngressoDto): Promise<{
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
}
