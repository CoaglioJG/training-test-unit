import { Module } from '@nestjs/common';
import { ClassroomModule } from './modules/usecases/classroom/classroom.module';
import { StudentModule } from './modules/usecases/student/student.module';

@Module({
  imports: [StudentModule, ClassroomModule],
  exports: [StudentModule, ClassroomModule],
})
export class DomainModule {}
