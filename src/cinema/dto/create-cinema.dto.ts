import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCinemaDto {
  @ApiProperty({ example: 'Cinemark Shopping' })
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({ example: 'Rua das Flores, 123', required: false })
  @IsString()
  @IsOptional()
  endereco?: string;
}