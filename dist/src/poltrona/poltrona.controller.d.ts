import { PoltronaService } from './poltrona.service';
import { CreatePoltronaDto } from './dto/create-poltrona.dto';
import { UpdatePoltronaDto } from './dto/update-poltrona.dto';
export declare class PoltronaController {
    private readonly poltronaService;
    constructor(poltronaService: PoltronaService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__PoltronaClient<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePoltronaDto: UpdatePoltronaDto): import("@prisma/client").Prisma.Prisma__PoltronaClient<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__PoltronaClient<{
        id: number;
        numero: number;
        categoria: string;
        salaId: number;
        status: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
