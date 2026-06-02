import { Module } from '@nestjs/common';
import { PoutronaService } from './poutrona.service';
import { PoutronaController } from './poutrona.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PoutronaController],
  providers: [PoutronaService],
})
export class PoutronaModule {}