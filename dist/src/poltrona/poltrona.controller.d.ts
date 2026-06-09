import { PoltronaService } from './poltrona.service';
import { CreatePoltronaDto } from './dto/create-poltrona.dto';
import { UpdatePoltronaDto } from './dto/update-poltrona.dto';
export declare class PoltronaController {
    private readonly poltronaService;
    constructor(poltronaService: PoltronaService);
    create(createPoltronaDto: CreatePoltronaDto): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
    update(id: string, updatePoltronaDto: UpdatePoltronaDto): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        salaId: number;
        numero: number;
        fila: number;
        categoria: string;
        status: boolean;
    }>;
}
