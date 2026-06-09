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
exports.CreateFilmeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateFilmeDto {
    titulo;
    sinopse;
    classificacao;
    duracao;
    genero;
    dataInicioExibicao;
    dataFinalExibicao;
    cinemaId;
}
exports.CreateFilmeDto = CreateFilmeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Vingadores' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Um grupo de heróis...', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "sinopse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '14', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "classificacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2h30min', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "duracao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ação', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "genero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-01', required: false }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "dataInicioExibicao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-03-01', required: false }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFilmeDto.prototype, "dataFinalExibicao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFilmeDto.prototype, "cinemaId", void 0);
//# sourceMappingURL=create-filme.dto.js.map