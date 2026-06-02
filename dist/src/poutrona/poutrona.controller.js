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
exports.PoutronaController = void 0;
const common_1 = require("@nestjs/common");
const poutrona_service_1 = require("./poutrona.service");
const create_poutrona_dto_1 = require("./dto/create-poutrona.dto");
const update_poutrona_dto_1 = require("./dto/update-poutrona.dto");
const swagger_1 = require("@nestjs/swagger");
let PoutronaController = class PoutronaController {
    poutronaService;
    constructor(poutronaService) {
        this.poutronaService = poutronaService;
    }
    create(createPoutronaDto) {
        return this.poutronaService.create(createPoutronaDto);
    }
    findAll() {
        return this.poutronaService.findAll();
    }
    findOne(id) {
        return this.poutronaService.findOne(+id);
    }
    update(id, updatePoutronaDto) {
        return this.poutronaService.update(+id, updatePoutronaDto);
    }
    remove(id) {
        return this.poutronaService.remove(+id);
    }
};
exports.PoutronaController = PoutronaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova poltrona' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Poltrona criada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_poutrona_dto_1.CreatePoutronaDto]),
    __metadata("design:returntype", void 0)
], PoutronaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as poltronas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PoutronaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma poltrona pelo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PoutronaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma poltrona' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_poutrona_dto_1.UpdatePoutronaDto]),
    __metadata("design:returntype", void 0)
], PoutronaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma poltrona' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PoutronaController.prototype, "remove", null);
exports.PoutronaController = PoutronaController = __decorate([
    (0, swagger_1.ApiTags)('poutrona'),
    (0, common_1.Controller)('poutrona'),
    __metadata("design:paramtypes", [poutrona_service_1.PoutronaService])
], PoutronaController);
//# sourceMappingURL=poutrona.controller.js.map