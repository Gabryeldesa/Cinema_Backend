import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { Prisma } from '@prisma/client';
export declare class CinemaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCinemaDto: CreateCinemaDto): Promise<{
        nome: string;
        endereco: string | null;
        id: number;
    }>;
    findAll(): Prisma.PrismaPromise<({
        salas: {
            id: number;
            cinemaId: number;
            numero: number;
            capacidade: number;
        }[];
    } & {
        nome: string;
        endereco: string | null;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        salas: {
            id: number;
            cinemaId: number;
            numero: number;
            capacidade: number;
        }[];
    } & {
        nome: string;
        endereco: string | null;
        id: number;
    }>;
    update(id: number, updateCinemaDto: UpdateCinemaDto): Promise<{
        nome: string;
        endereco: string | null;
        id: number;
    }>;
    remove(id: number): Promise<{
        nome: string;
        endereco: string | null;
        id: number;
    }>;
}
