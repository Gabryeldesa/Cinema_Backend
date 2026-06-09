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
exports.SessaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let SessaoService = class SessaoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSessaoDto) {
        try {
            return await this.prisma.sessao.create({ data: createSessaoDto });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
                throw new common_1.BadRequestException('Filme, Sala ou Cinema informado não existe');
            }
            throw e;
        }
    }
    findAll() {
        return this.prisma.sessao.findMany({ include: { filme: true, sala: true, ingressos: true } });
    }
    async findOne(id) {
        const sessao = await this.prisma.sessao.findUnique({
            where: { id },
            include: { filme: true, sala: true, ingressos: true },
        });
        if (!sessao)
            throw new common_1.NotFoundException(`Sessao #${id} não encontrada`);
        return sessao;
    }
    async update(id, updateSessaoDto) {
        await this.findOne(id);
        return this.prisma.sessao.update({ where: { id }, data: updateSessaoDto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.sessao.delete({ where: { id } });
    }
};
exports.SessaoService = SessaoService;
exports.SessaoService = SessaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SessaoService);
//# sourceMappingURL=sessao.service.js.map