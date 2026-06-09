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
exports.CinemaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let CinemaService = class CinemaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCinemaDto) {
        try {
            return await this.prisma.cinema.create({ data: createCinemaDto });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
                throw new common_1.BadRequestException('Referência inválida: verifique os IDs informados');
            }
            throw e;
        }
    }
    findAll() {
        return this.prisma.cinema.findMany({ include: { salas: true } });
    }
    async findOne(id) {
        const cinema = await this.prisma.cinema.findUnique({
            where: { id },
            include: { salas: true },
        });
        if (!cinema)
            throw new common_1.NotFoundException(`Cinema #${id} não encontrado`);
        return cinema;
    }
    async update(id, updateCinemaDto) {
        await this.findOne(id);
        return this.prisma.cinema.update({ where: { id }, data: updateCinemaDto });
    }
    async remove(id) {
        await this.findOne(id);
        const sessoes = await this.prisma.sessao.findMany({ where: { cinemaId: id } });
        const sessaoIds = sessoes.map(s => s.id);
        await this.prisma.ingresso.deleteMany({ where: { sessaoId: { in: sessaoIds } } });
        const salas = await this.prisma.sala.findMany({ where: { cinemaId: id } });
        const salaIds = salas.map(s => s.id);
        await this.prisma.poltrona.deleteMany({ where: { salaId: { in: salaIds } } });
        await this.prisma.sessao.deleteMany({ where: { cinemaId: id } });
        await this.prisma.filme.deleteMany({ where: { cinemaId: id } });
        await this.prisma.sala.deleteMany({ where: { cinemaId: id } });
        return this.prisma.cinema.delete({ where: { id } });
    }
};
exports.CinemaService = CinemaService;
exports.CinemaService = CinemaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CinemaService);
//# sourceMappingURL=cinema.service.js.map