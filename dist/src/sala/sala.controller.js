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
exports.SalaController = void 0;
const common_1 = require("@nestjs/common");
const sala_service_1 = require("./sala.service");
const create_sala_dto_1 = require("./dto/create-sala.dto");
const update_sala_dto_1 = require("./dto/update-sala.dto");
const swagger_1 = require("@nestjs/swagger");
let SalaController = class SalaController {
    salaService;
    constructor(salaService) {
        this.salaService = salaService;
    }
    create(createSalaDto) {
        return this.salaService.create(createSalaDto);
    }
    findAll() {
        return this.salaService.findAll();
    }
    findOne(id) {
        return this.salaService.findOne(+id);
    }
    update(id, updateSalaDto) {
        return this.salaService.update(+id, updateSalaDto);
    }
    remove(id) {
        return this.salaService.remove(+id);
    }
};
exports.SalaController = SalaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova sala' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Sala criada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sala_dto_1.CreateSalaDto]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as salas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma sala pelo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma sala' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sala_dto_1.UpdateSalaDto]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma sala' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalaController.prototype, "remove", null);
exports.SalaController = SalaController = __decorate([
    (0, swagger_1.ApiTags)('sala'),
    (0, common_1.Controller)('sala'),
    __metadata("design:paramtypes", [sala_service_1.SalaService])
], SalaController);
//# sourceMappingURL=sala.controller.js.map