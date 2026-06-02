import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CinemaModule } from './cinema/cinema.module';
import { SalaModule } from './sala/sala.module';
import { PoutronaModule } from './poutrona/poutrona.module';

@Module({
  imports: [PrismaModule, CinemaModule, SalaModule, PoutronaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
