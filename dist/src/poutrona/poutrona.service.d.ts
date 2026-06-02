import { PrismaService } from '../prisma/prisma.service';
import { CreatePoutronaDto } from './dto/create-poutrona.dto';
import { UpdatePoutronaDto } from './dto/update-poutrona.dto';
export declare class PoutronaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPoutronaDto: CreatePoutronaDto): import("@prisma/client").Prisma.Prisma__PoutronaClient<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__PoutronaClient<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updatePoutronaDto: UpdatePoutronaDto): import("@prisma/client").Prisma.Prisma__PoutronaClient<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__PoutronaClient<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
