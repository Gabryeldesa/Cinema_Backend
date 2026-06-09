"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let PedidoService = class PedidoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPedidoDto) {
        const { ingressoIds, lancheIds, ...data } = createPedidoDto;
        try {
            return await this.prisma.pedido.create({
                data: {
                    ...data,
                    ingressos: ingressoIds ? { connect: ingressoIds.map(id => ({ id })) } : undefined,
                    lanches: lancheIds ? { connect: lancheIds.map(id => ({ id })) } : undefined,
                },
            });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
                throw new common_1.BadRequestException('Um ou mais ingressoIds/lancheIds não existem');
            }
            throw e;
        }
    }
    findAll() {
        return this.prisma.pedido.findMany({ include: { ingressos: true, lanches: true } });
    }
    async findOne(id) {
        const pedido = await this.prisma.pedido.findUnique({ where: { id }, include: { ingressos: true, lanches: true } });
        if (!pedido)
            throw new common_1.NotFoundException(`Pedido #${id} não encontrado`);
        return pedido;
    }
    async update(id, updatePedidoDto) {
        await this.findOne(id);
        const { ingressoIds, lancheIds, ...data } = updatePedidoDto;
        return this.prisma.pedido.update({
            where: { id },
            data: {
                ...data,
                ingressos: ingressoIds ? { set: ingressoIds.map(id => ({ id })) } : undefined,
                lanches: lancheIds ? { set: lancheIds.map(id => ({ id })) } : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pedido.delete({ where: { id } });
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map