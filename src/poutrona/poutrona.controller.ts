import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoutronaService } from './poutrona.service';
import { CreatePoutronaDto } from './dto/create-poutrona.dto';
import { UpdatePoutronaDto } from './dto/update-poutrona.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('poutrona')
@Controller('poutrona')
export class PoutronaController {
  constructor(private readonly poutronaService: PoutronaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova poltrona' })
  @ApiResponse({ status: 201, description: 'Poltrona criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createPoutronaDto: CreatePoutronaDto) {
    return this.poutronaService.create(createPoutronaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as poltronas' })
  findAll() {
    return this.poutronaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma poltrona pelo ID' })
  findOne(@Param('id') id: string) {
    return this.poutronaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma poltrona' })
  update(@Param('id') id: string, @Body() updatePoutronaDto: UpdatePoutronaDto) {
    return this.poutronaService.update(+id, updatePoutronaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma poltrona' })
  remove(@Param('id') id: string) {
    return this.poutronaService.remove(+id);
  }
}