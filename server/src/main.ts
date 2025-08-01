import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
    app.setGlobalPrefix('/api')
    app.enableCors({
        origin: ['http://localhost:3000'], 
    })

    const config = new DocumentBuilder()
        .setTitle('Items API')
        .setDescription('API для управления товарами')
        .setVersion('1.0')
        .addTag('items')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document) // Swagger по адресу: /api

    await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
