import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalaDto {
  @ApiProperty({ example: 'SALA-01' })
  @IsString()
  @IsNotEmpty()
  codigo!: string;

  @ApiProperty({ example: 100 })
  @IsInt()
  capacidade!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  cinemaId!: number;
}