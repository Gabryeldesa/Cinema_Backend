import { Module } from '@nestjs/common';
import { PoltronaService } from './poltrona.service';
import { PoltronaController } from './poltrona.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PoltronaController],
  providers: [PoltronaService],
})
export class PoltronaModule {}