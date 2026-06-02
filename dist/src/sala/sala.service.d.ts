import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
export declare class SalaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSalaDto: CreateSalaDto): import("@prisma/client").Prisma.Prisma__SalaClient<{
        id: number;
        codigo: string;
        capacidade: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        poutronas: {
            id: number;
            numero: number;
            categoria: string;
            status: boolean;
            salaId: number;
        }[];
    } & {
        id: number;
        codigo: string;
        capacidade: number;
        cinemaId: number;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__SalaClient<({
        poutronas: {
            id: number;
            numero: number;
            categoria: string;
            status: boolean;
            salaId: number;
        }[];
    } & {
        id: number;
        codigo: string;
        capacidade: number;
        cinemaId: number;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateSalaDto: UpdateSalaDto): import("@prisma/client").Prisma.Prisma__SalaClient<{
        id: number;
        codigo: string;
        capacidade: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__SalaClient<{
        id: number;
        codigo: string;
        capacidade: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
