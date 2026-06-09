import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
export declare class SessaoController {
    private readonly sessaoService;
    constructor(sessaoService: SessaoService);
    create(createSessaoDto: CreateSessaoDto): Promise<{
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateSessaoDto: UpdateSessaoDto): Promise<{
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        horarioExibicao: Date;
        filmeId: number;
        salaId: number;
        cinemaId: number;
    }>;
}
