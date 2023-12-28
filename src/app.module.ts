import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DeadlineModule } from './deadline/deadline.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get('BD_TYPE') as any,
        host: configService.get('BD_HOST') as any,
        port: configService.get('BD_PORT') as any,
        database: configService.get('POSTGRES_DB') as any,
        username: configService.get('POSTGRES_USER') as any,
        password: configService.get('POSTGRES_PASSWORD') as any,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    DeadlineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
