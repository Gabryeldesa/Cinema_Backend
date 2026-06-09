import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { Prisma } from '@prisma/client';
export declare class SessaoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSessaoDto: CreateSessaoDto): Promise<{
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    }>;
    findAll(): Prisma.PrismaPromise<({
        sala: {
            id: number;
            cinemaId: number;
            numero: number;
            capacidade: number;
        };
        filme: {
            id: number;
            cinemaId: number;
            titulo: string;
            sinopse: string | null;
            classificacao: string | null;
            duracao: string | null;
            genero: string | null;
            dataInicioExibicao: Date | null;
            dataFinalExibicao: Date | null;
        };
        ingressos: {
            id: number;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
    } & {
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    })[]>;
    findOne(id: number): Promise<{
        sala: {
            id: number;
            cinemaId: number;
            numero: number;
            capacidade: number;
        };
        filme: {
            id: number;
            cinemaId: number;
            titulo: string;
            sinopse: string | null;
            classificacao: string | null;
            duracao: string | null;
            genero: string | null;
            dataInicioExibicao: Date | null;
            dataFinalExibicao: Date | null;
        };
        ingressos: {
            id: number;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
    } & {
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    }>;
    update(id: number, updateSessaoDto: UpdateSessaoDto): Promise<{
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    }>;
}
