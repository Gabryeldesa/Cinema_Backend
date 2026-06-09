import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
export declare class SalaController {
    private readonly salaService;
    constructor(salaService: SalaService);
    create(createSalaDto: CreateSalaDto): Promise<{
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateSalaDto: UpdateSalaDto): Promise<{
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        cinemaId: number;
        numero: number;
        capacidade: number;
    }>;
}
