import { PrismaService } from '../prisma/prisma.service';
import { CreatePoltronaDto } from './dto/create-poltrona.dto';
import { UpdatePoltronaDto } from './dto/update-poltrona.dto';
import { Prisma } from '@prisma/client';
export declare class PoltronaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPoltronaDto: CreatePoltronaDto): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
    update(id: number, updatePoltronaDto: UpdatePoltronaDto): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
}
