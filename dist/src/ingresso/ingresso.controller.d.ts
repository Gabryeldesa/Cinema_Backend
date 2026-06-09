import { IngressoService } from './ingresso.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
export declare class IngressoController {
    private readonly ingressoService;
    constructor(ingressoService: IngressoService);
    create(createIngressoDto: CreateIngressoDto): Promise<{
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateIngressoDto: UpdateIngressoDto): Promise<{
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
    }>;
}
