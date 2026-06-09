"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaExceptionFilter = class PrismaExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        switch (exception.code) {
            case 'P2002':
                response.status(common_1.HttpStatus.CONFLICT).json({
                    statusCode: 409,
                    error: 'Conflict',
                    message: 'Já existe um registro com esses dados.',
                });
                break;
            case 'P2025':
                response.status(common_1.HttpStatus.NOT_FOUND).json({
                    statusCode: 404,
                    error: 'Not Found',
                    message: 'Registro não encontrado.',
                });
                break;
            case 'P2003':
                response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    error: 'Bad Request',
                    message: 'Referência inválida: um dos IDs informados não existe.',
                });
                break;
            case 'P2014':
                response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    error: 'Bad Request',
                    message: 'Violação de relação: a operação quebraria uma associação obrigatória.',
                });
                break;
            default:
                response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                    statusCode: 500,
                    error: 'Internal Server Error',
                    message: `Erro interno do banco de dados. Código: ${exception.code}`,
                });
        }
    }
};
exports.PrismaExceptionFilter = PrismaExceptionFilter;
exports.PrismaExceptionFilter = PrismaExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaExceptionFilter);
//# sourceMappingURL=prisma-exception.filter.js.map