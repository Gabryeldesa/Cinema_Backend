import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalaDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  numero!: number;

  @ApiProperty({ example: 100 })
  @IsInt()
  capacidade!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  cinemaId!: number;
}