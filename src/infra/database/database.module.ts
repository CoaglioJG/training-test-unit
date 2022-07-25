import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from '../../domain/repositories/student.repository';
import { ClassroomEntity } from './entities/classroom.entity';
import { StudentEntity } from './entities/student.entity';
import { StudentImpl } from './postgres/student.impl';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ClassroomEntity, StudentEntity])],
  providers: [{ provide: StudentRepository, useClass: StudentImpl }],
  exports: [StudentRepository],
})
export class DatabaseModule {}
