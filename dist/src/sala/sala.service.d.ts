import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Prisma } from '@prisma/client';
export declare class SalaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSalaDto: CreateSalaDto): Promise<{
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    }>;
    findAll(): Prisma.PrismaPromise<({
        poltronas: {
            id: number;
            salaId: number;
            numero: number;
            fila: number;
            categoria: string;
            status: boolean;
        }[];
    } & {
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    })[]>;
    findOne(id: number): Promise<{
        poltronas: {
            id: number;
            salaId: number;
            numero: number;
            fila: number;
            categoria: string;
            status: boolean;
        }[];
    } & {
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    }>;
    update(id: number, updateSalaDto: UpdateSalaDto): Promise<{
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    }>;
}
