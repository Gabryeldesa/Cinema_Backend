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
let PoltronaService = class PoltronaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPoltronaDto) {
        return this.prisma.poltrona.create({ data: createPoltronaDto });
    }
    findAll() {
        return this.prisma.poltrona.findMany();
    }
    findOne(id) {
        return this.prisma.poltrona.findUnique({ where: { id } });
    }
    update(id, updatePoltronaDto) {
        return this.prisma.poltrona.update({ where: { id }, data: updatePoltronaDto });
    }
    remove(id) {
        return this.prisma.poltrona.delete({ where: { id } });
    }
};
exports.PoltronaService = PoltronaService;
exports.PoltronaService = PoltronaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PoltronaService);
//# sourceMappingURL=poltrona.service.js.map