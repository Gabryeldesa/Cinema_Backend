import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmeController {
    private readonly filmeService;
    constructor(filmeService: FilmeService);
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
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateFilmeDto: UpdateFilmeDto): Promise<{
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
    remove(id: string): Promise<{
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
