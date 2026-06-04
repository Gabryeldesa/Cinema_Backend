import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
export declare class SalaController {
    private readonly salaService;
    constructor(salaService: SalaService);
    create(createSalaDto: CreateSalaDto): import("@prisma/client").Prisma.Prisma__SalaClient<{
        codigo: string;
        capacidade: number;
        id: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        poltronas: {
            id: number;
            numero: number;
            categoria: string;
            salaId: number;
            status: boolean;
        }[];
    } & {
        codigo: string;
        capacidade: number;
        id: number;
        cinemaId: number;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__SalaClient<({
        poltronas: {
            id: number;
            numero: number;
            categoria: string;
            salaId: number;
            status: boolean;
        }[];
    } & {
        codigo: string;
        capacidade: number;
        id: number;
        cinemaId: number;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateSalaDto: UpdateSalaDto): import("@prisma/client").Prisma.Prisma__SalaClient<{
        codigo: string;
        capacidade: number;
        id: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__SalaClient<{
        codigo: string;
        capacidade: number;
        id: number;
        cinemaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
