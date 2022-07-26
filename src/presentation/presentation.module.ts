import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { ClassroomController } from './controllers/classroom.controller';
import { StudentController } from './controllers/student.controller';

@Module({
  imports: [DomainModule],
  providers: [],
  controllers: [StudentController, ClassroomController],
})
export class PresentationModule {}
