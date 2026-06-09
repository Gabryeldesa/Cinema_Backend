import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case 'P2002':
        // Violação de unique constraint
        response.status(HttpStatus.CONFLICT).json({
          statusCode: 409,
          error: 'Conflict',
          message: 'Já existe um registro com esses dados.',
        });
        break;

      case 'P2025':
        // Registro não encontrado (findUnique, update, delete)
        response.status(HttpStatus.NOT_FOUND).json({
          statusCode: 404,
          error: 'Not Found',
          message: 'Registro não encontrado.',
        });
        break;

      case 'P2003':
        // FK inválida (cinemaId, salaId, filmeId etc. inexistente)
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Referência inválida: um dos IDs informados não existe.',
        });
        break;

      case 'P2014':
        // Violação de relação obrigatória
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Violação de relação: a operação quebraria uma associação obrigatória.',
        });
        break;

      default:
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: 500,
          error: 'Internal Server Error',
          message: `Erro interno do banco de dados. Código: ${exception.code}`,
        });
    }
  }
}