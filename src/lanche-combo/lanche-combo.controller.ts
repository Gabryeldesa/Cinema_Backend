import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LancheComboService } from './lanche-combo.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';

@ApiTags('LancheCombo')
@Controller('lanche-combo')
export class LancheComboController {
  constructor(private readonly lancheComboService: LancheComboService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo lanche combo' })
  @ApiResponse({ status: 201, description: 'Lanche combo criado com sucesso.' })
  create(@Body() createLancheComboDto: CreateLancheComboDto) {
    return this.lancheComboService.create(createLancheComboDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os lanches combo' })
  findAll() {
    return this.lancheComboService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um lanche combo pelo ID' })
  findOne(@Param('id') id: string) {
    return this.lancheComboService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um lanche combo' })
  update(@Param('id') id: string, @Body() updateLancheComboDto: UpdateLancheComboDto) {
    return this.lancheComboService.update(+id, updateLancheComboDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lanche combo' })
  remove(@Param('id') id: string) {
    return this.lancheComboService.remove(+id);
  }
}