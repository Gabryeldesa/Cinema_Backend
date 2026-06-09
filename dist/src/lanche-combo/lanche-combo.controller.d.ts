import { LancheComboService } from './lanche-combo.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
export declare class LancheComboController {
    private readonly lancheComboService;
    constructor(lancheComboService: LancheComboService);
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
    findOne(id: string): Promise<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }>;
    update(id: string, updateLancheComboDto: UpdateLancheComboDto): Promise<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }>;
    remove(id: string): Promise<{
        nome: string;
        id: number;
        descricao: string | null;
        valorUnitario: number;
        qtUnidade: number;
    }>;
}
