import { Module } from '@nestjs/common';
import { FindStudentById } from './find-by-id';
import { GetAllStudents } from './get-all';
import { SaveStudent } from './save';

@Module({
  providers: [SaveStudent, FindStudentById, GetAllStudents],
  exports: [SaveStudent, FindStudentById, GetAllStudents],
})
export class StudentModule {}
