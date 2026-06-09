"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_exception_filter_1 = require("./prisma/prisma-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    app.useGlobalFilters(new prisma_exception_filter_1.PrismaExceptionFilter());
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    });
    const config = new swagger_1.DocumentBuilder()
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
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log(`Application is running on: http://localhost:3000/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map