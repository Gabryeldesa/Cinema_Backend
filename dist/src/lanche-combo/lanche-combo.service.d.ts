import { PrismaService } from '../prisma/prisma.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
export declare class LancheComboService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createLancheComboDto: CreateLancheComboDto): import("@prisma/client").Prisma.Prisma__LancheComboClient<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }[]>;
    findOne(id: number): Promise<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }>;
    update(id: number, updateLancheComboDto: UpdateLancheComboDto): Promise<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }>;
    remove(id: number): Promise<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }>;
}
