import { PoutronaService } from './poutrona.service';
import { CreatePoutronaDto } from './dto/create-poutrona.dto';
import { UpdatePoutronaDto } from './dto/update-poutrona.dto';
export declare class PoutronaController {
    private readonly poutronaService;
    constructor(poutronaService: PoutronaService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__PoutronaClient<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePoutronaDto: UpdatePoutronaDto): import("@prisma/client").Prisma.Prisma__PoutronaClient<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__PoutronaClient<{
        id: number;
        numero: number;
        categoria: string;
        status: boolean;
        salaId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
