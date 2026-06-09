import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmeDto {
  @ApiProperty({ example: 'Vingadores' })
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @ApiProperty({ example: 'Um grupo de heróis...', required: false })
  @IsString()
  @IsOptional()
  sinopse?: string;

  @ApiProperty({ example: '14', required: false })
  @IsString()
  @IsOptional()
  classificacao?: string;

  @ApiProperty({ example: '2h30min', required: false })
  @IsString()
  @IsOptional()
  duracao?: string;

  @ApiProperty({ example: 'Ação', required: false })
  @IsString()
  @IsOptional()
  genero?: string;

  @ApiProperty({ example: '2024-01-01', required: false })
  @IsDateString()
  @IsOptional()
  dataInicioExibicao?: string;

  @ApiProperty({ example: '2024-03-01', required: false })
  @IsDateString()
  @IsOptional()
  dataFinalExibicao?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  cinemaId!: number;
}