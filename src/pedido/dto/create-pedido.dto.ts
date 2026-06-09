import { IsArray, IsInt, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty({ example: 2 })
  @IsInt()
  qtInteira!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  qtMeia!: number;

  @ApiProperty({ example: 75.0 })
  @IsNumber()
  valorTotal!: number;

  @ApiProperty({ example: [1, 2], required: false })
  @IsArray()
  @IsOptional()
  ingressoIds?: number[];

  @ApiProperty({ example: [1], required: false })
  @IsArray()
  @IsOptional()
  lancheIds?: number[];
}