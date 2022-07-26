import { Module } from '@nestjs/common';
import { ClassroomModule } from './modules/usecases/classroom/classroom.module';
import { StudentModule } from './modules/usecases/student/student.module';

@Module({
  imports: [ClassroomModule, StudentModule],
  exports: [ClassroomModule, StudentModule],
})
export class DomainModule {}
