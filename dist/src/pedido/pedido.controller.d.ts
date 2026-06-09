import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    create(createPedidoDto: CreatePedidoDto): Promise<{
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        ingressos: {
            id: number;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
        lanches: {
            nome: string;
            id: number;
            descricao: string | null;
            valorUnitario: number;
            qtUnidade: number;
        }[];
    } & {
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    })[]>;
    findOne(id: string): Promise<{
        ingressos: {
            id: number;
            valorInteira: number;
            valorMeia: number;
            sessaoId: number;
        }[];
        lanches: {
            nome: string;
            id: number;
            descricao: string | null;
            valorUnitario: number;
            qtUnidade: number;
        }[];
    } & {
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<{
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
    }>;
}
