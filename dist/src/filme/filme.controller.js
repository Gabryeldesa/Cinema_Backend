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
exports.FilmeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const filme_service_1 = require("./filme.service");
const create_filme_dto_1 = require("./dto/create-filme.dto");
const update_filme_dto_1 = require("./dto/update-filme.dto");
let FilmeController = class FilmeController {
    filmeService;
    constructor(filmeService) {
        this.filmeService = filmeService;
    }
    create(createFilmeDto) {
        return this.filmeService.create(createFilmeDto);
    }
    findAll() {
        return this.filmeService.findAll();
    }
    findOne(id) {
        return this.filmeService.findOne(+id);
    }
    update(id, updateFilmeDto) {
        return this.filmeService.update(+id, updateFilmeDto);
    }
    remove(id) {
        return this.filmeService.remove(+id);
    }
};
exports.FilmeController = FilmeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo filme' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Filme criado com sucesso.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filme_dto_1.CreateFilmeDto]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os filmes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um filme pelo ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um filme' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_filme_dto_1.UpdateFilmeDto]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um filme' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "remove", null);
exports.FilmeController = FilmeController = __decorate([
    (0, swagger_1.ApiTags)('Filme'),
    (0, common_1.Controller)('filme'),
    __metadata("design:paramtypes", [filme_service_1.FilmeService])
], FilmeController);
//# sourceMappingURL=filme.controller.js.map