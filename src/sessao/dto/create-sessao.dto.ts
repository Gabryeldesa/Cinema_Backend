import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSessaoDto {
  @ApiProperty({ example: '2024-06-01T19:00:00.000Z' })
  @IsDateString()
  @IsNotEmpty()
  horarioExibicao!: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  filmeId!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  salaId!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  cinemaId!: number;
}