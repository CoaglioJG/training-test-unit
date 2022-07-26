import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';
import { StudentRepository } from 'src/domain/repositories/student.repository';
import { Classroom } from './entities/classroom.entity';
import { Student } from './entities/student.entity';
import { ClassroomImpl } from './postgres/classroom.impl';
import { StudentImpl } from './postgres/student.impl';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Student, Classroom])],
  providers: [
    { provide: StudentRepository, useClass: StudentImpl },
    { provide: ClassroomRepository, useClass: ClassroomImpl },
  ],
  exports: [StudentRepository, ClassroomRepository],
})
export class DatabaseModule {}
