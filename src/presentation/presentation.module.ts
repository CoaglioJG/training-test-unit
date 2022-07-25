import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { StudentController } from './controllers/student.controller';

@Module({
  imports: [DomainModule],
  providers: [],
  controllers: [StudentController],
})
export class PresentationModule {}
