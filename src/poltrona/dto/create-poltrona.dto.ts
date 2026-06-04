import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePoltronaDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  numero!: number;

  @ApiProperty({ example: 'VIP' })
  @IsString()
  @IsNotEmpty()
  categoria!: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  salaId!: number;

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}