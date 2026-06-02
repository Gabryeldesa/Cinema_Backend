import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
export declare class CinemaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCinemaDto: CreateCinemaDto): import("@prisma/client").Prisma.Prisma__CinemaClient<{
        nome: string;
        endereco: string | null;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        salas: {
            id: number;
            codigo: string;
            capacidade: number;
            cinemaId: number;
        }[];
    } & {
        nome: string;
        endereco: string | null;
        id: number;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__CinemaClient<({
        salas: {
            id: number;
            codigo: string;
            capacidade: number;
            cinemaId: number;
        }[];
    } & {
        nome: string;
        endereco: string | null;
        id: number;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateCinemaDto: UpdateCinemaDto): import("@prisma/client").Prisma.Prisma__CinemaClient<{
        nome: string;
        endereco: string | null;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__CinemaClient<{
        nome: string;
        endereco: string | null;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
