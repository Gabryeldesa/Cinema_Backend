import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CinemaModule } from './cinema/cinema.module';
import { SalaModule } from './sala/sala.module';
import { PoltronaModule } from './poltrona/poltrona.module';

@Module({
  imports: [PrismaModule, CinemaModule, SalaModule, PoltronaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}