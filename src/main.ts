import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaExceptionFilter } from './prisma/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, 
    }),
  );
  
  app.useGlobalFilters(new PrismaExceptionFilter());

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  });

  const config = new DocumentBuilder()
    .setTitle('Cinema API')
    .setDescription('API de gerenciamento de cinemas, salas e poltronas')
    .setVersion('1.0')
    .addTag('cinema')
    .addTag('sala')
    .addTag('poltrona')
    .addTag('Filme')
    .addTag('Sessao')
    .addTag('Ingresso')
    .addTag('LancheCombo')
    .addTag('Pedido')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/api`);
}
bootstrap();