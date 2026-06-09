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
exports.SalaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let SalaService = class SalaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSalaDto) {
        try {
            return await this.prisma.sala.create({ data: createSalaDto });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
                throw new common_1.BadRequestException('Cinema informado não existe');
            }
            throw e;
        }
    }
    findAll() {
        return this.prisma.sala.findMany({ include: { poltronas: true } });
    }
    async findOne(id) {
        const sala = await this.prisma.sala.findUnique({ where: { id }, include: { poltronas: true } });
        if (!sala)
            throw new common_1.NotFoundException(`Sala #${id} não encontrada`);
        return sala;
    }
    async update(id, updateSalaDto) {
        await this.findOne(id);
        return this.prisma.sala.update({ where: { id }, data: updateSalaDto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.sala.delete({ where: { id } });
    }
};
exports.SalaService = SalaService;
exports.SalaService = SalaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalaService);
//# sourceMappingURL=sala.service.js.map