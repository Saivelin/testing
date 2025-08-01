import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsModule } from './items/items.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true // чтобы env были доступны во всём приложении
        }),
        TypeOrmModule.forRoot({
            type: 'postgres', // или mysql, sqlite, и т.д.
            host: process.env.DB_HOST || 'localhost',
            port: Number(process.env.DB_PORT) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true // ВНИМАНИЕ! В продакшене ставь false
        }),
        ItemsModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
