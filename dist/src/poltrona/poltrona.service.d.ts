import { PrismaService } from '../prisma/prisma.service';
import { CreatePoltronaDto } from './dto/create-poltrona.dto';
import { UpdatePoltronaDto } from './dto/update-poltrona.dto';
export declare class PoltronaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPoltronaDto: CreatePoltronaDto): import("@prisma/client").Prisma.Prisma__PoltronaClient<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__PoltronaClient<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updatePoltronaDto: UpdatePoltronaDto): import("@prisma/client").Prisma.Prisma__PoltronaClient<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__PoltronaClient<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
