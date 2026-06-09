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
exports.PoltronaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let PoltronaService = class PoltronaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPoltronaDto) {
        try {
            return await this.prisma.poltrona.create({ data: createPoltronaDto });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
                throw new common_1.BadRequestException('Sala informada não existe');
            }
            throw e;
        }
    }
    findAll() {
        return this.prisma.poltrona.findMany();
    }
    async findOne(id) {
        const poltrona = await this.prisma.poltrona.findUnique({ where: { id } });
        if (!poltrona)
            throw new common_1.NotFoundException(`Poltrona #${id} não encontrada`);
        return poltrona;
    }
    async update(id, updatePoltronaDto) {
        await this.findOne(id);
        return this.prisma.poltrona.update({ where: { id }, data: updatePoltronaDto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.poltrona.delete({ where: { id } });
    }
};
exports.PoltronaService = PoltronaService;
exports.PoltronaService = PoltronaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PoltronaService);
//# sourceMappingURL=poltrona.service.js.map