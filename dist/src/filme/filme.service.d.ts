import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Prisma } from '@prisma/client';
export declare class FilmeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFilmeDto: CreateFilmeDto): Promise<{
        id: number;
        cinemaId: number;
        titulo: string;
        sinopse: string | null;
        classificacao: string | null;
        duracao: string | null;
        genero: string | null;
        dataInicioExibicao: Date | null;
        dataFinalExibicao: Date | null;
    }>;
    findAll(): Prisma.PrismaPromise<({
        sessoes: {
            id: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
            cinemaId: number;
        }[];
    } & {
        id: number;
        cinemaId: number;
        titulo: string;
        sinopse: string | null;
        classificacao: string | null;
        duracao: string | null;
        genero: string | null;
        dataInicioExibicao: Date | null;
        dataFinalExibicao: Date | null;
    })[]>;
    findOne(id: number): Promise<{
        sessoes: {
            id: number;
            horarioExibicao: Date;
            filmeId: number;
            salaId: number;
            cinemaId: number;
        }[];
    } & {
        id: number;
        cinemaId: number;
        titulo: string;
        sinopse: string | null;
        classificacao: string | null;
        duracao: string | null;
        genero: string | null;
        dataInicioExibicao: Date | null;
        dataFinalExibicao: Date | null;
    }>;
    update(id: number, updateFilmeDto: UpdateFilmeDto): Promise<{
        id: number;
        cinemaId: number;
        titulo: string;
        sinopse: string | null;
        classificacao: string | null;
        duracao: string | null;
        genero: string | null;
        dataInicioExibicao: Date | null;
        dataFinalExibicao: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        cinemaId: number;
        titulo: string;
        sinopse: string | null;
        classificacao: string | null;
        duracao: string | null;
        genero: string | null;
        dataInicioExibicao: Date | null;
        dataFinalExibicao: Date | null;
    }>;
}
