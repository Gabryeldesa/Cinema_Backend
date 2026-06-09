import { IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIngressoDto {
  @ApiProperty({ example: 30.0 })
  @IsNumber()
  valorInteira!: number;

  @ApiProperty({ example: 15.0 })
  @IsNumber()
  valorMeia!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  sessaoId!: number;
}