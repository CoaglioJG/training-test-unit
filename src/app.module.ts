import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './infra/database/database.module';
import { DomainModule } from './domain/domain.module';
import { DataBaseConnectionService } from './shared/databases/classrom';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DataBaseConnectionService,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    DomainModule,
    // PresentationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
