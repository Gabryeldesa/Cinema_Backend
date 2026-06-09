import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
export declare class CinemaController {
    private readonly cinemaService;
    constructor(cinemaService: CinemaService);
    create(createCinemaDto: CreateCinemaDto): Promise<{
        nome: string;
        endereco: string | null;
        id: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCinemaDto: UpdateCinemaDto): Promise<{
        nome: string;
        endereco: string | null;
        id: number;
    }>;
    remove(id: string): Promise<{
        nome: string;
        endereco: string | null;
        id: number;
    }>;
}
