import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoltronaService } from './poltrona.service';
import { CreatePoltronaDto } from './dto/create-poltrona.dto';
import { UpdatePoltronaDto } from './dto/update-poltrona.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('poltrona')
@Controller('poltrona')
export class PoltronaController {
  constructor(private readonly poltronaService: PoltronaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova poltrona' })
  @ApiResponse({ status: 201, description: 'Poltrona criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createPoltronaDto: CreatePoltronaDto) {
    return this.poltronaService.create(createPoltronaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as poltronas' })
  findAll() {
    return this.poltronaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma poltrona pelo ID' })
  findOne(@Param('id') id: string) {
    return this.poltronaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma poltrona' })
  update(@Param('id') id: string, @Body() updatePoltronaDto: UpdatePoltronaDto) {
    return this.poltronaService.update(+id, updatePoltronaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma poltrona' })
  remove(@Param('id') id: string) {
    return this.poltronaService.remove(+id);
  }
}