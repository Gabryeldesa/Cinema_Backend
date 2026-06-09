import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLancheComboDto {
  @ApiProperty({ example: 'Combo Família' })
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({ example: 'Pipoca grande + 2 refrigerantes', required: false })
  @IsString()
  @IsOptional()
  descricao?: string;

  @ApiProperty({ example: 45.0 })
  @IsNumber()
  valorUnitario!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  qtUnidade!: number;
}