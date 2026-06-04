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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoltronaController = void 0;
const common_1 = require("@nestjs/common");
const poltrona_service_1 = require("./poltrona.service");
const create_poltrona_dto_1 = require("./dto/create-poltrona.dto");
const update_poltrona_dto_1 = require("./dto/update-poltrona.dto");
const swagger_1 = require("@nestjs/swagger");
let PoltronaController = class PoltronaController {
    poltronaService;
    constructor(poltronaService) {
        this.poltronaService = poltronaService;
    }
    create(createPoltronaDto) {
        return this.poltronaService.create(createPoltronaDto);
    }
    findAll() {
        return this.poltronaService.findAll();
    }
    findOne(id) {
        return this.poltronaService.findOne(+id);
    }
    update(id, updatePoltronaDto) {
        return this.poltronaService.update(+id, updatePoltronaDto);
    }
    remove(id) {
        return this.poltronaService.remove(+id);
    }
};
exports.PoltronaController = PoltronaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova poltrona' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Poltrona criada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_poltrona_dto_1.CreatePoltronaDto]),
    __metadata("design:returntype", void 0)
], PoltronaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as poltronas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PoltronaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma poltrona pelo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PoltronaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma poltrona' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_poltrona_dto_1.UpdatePoltronaDto]),
    __metadata("design:returntype", void 0)
], PoltronaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma poltrona' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PoltronaController.prototype, "remove", null);
exports.PoltronaController = PoltronaController = __decorate([
    (0, swagger_1.ApiTags)('poltrona'),
    (0, common_1.Controller)('poltrona'),
    __metadata("design:paramtypes", [poltrona_service_1.PoltronaService])
], PoltronaController);
//# sourceMappingURL=poltrona.controller.js.map