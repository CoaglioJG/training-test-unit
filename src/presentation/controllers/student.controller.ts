import { Body, Get, Param, Post } from '@nestjs/common';
import { Student } from 'src/domain/modules/entities/student';
import { FindStudentById } from 'src/domain/modules/usecases/student/find-by-id';
import { GetAllStudents } from 'src/domain/modules/usecases/student/get-all';
import { SaveStudent } from 'src/domain/modules/usecases/student/save';

export class StudentController {
  constructor(
    private readonly saveStudent: SaveStudent,
    private readonly allStudent: GetAllStudents,
    private readonly findById: FindStudentById,
  ) {}

  @Post()
  save(@Body() student: Student): Promise<Student> {
    return this.saveStudent.call(student);
  }

  @Get()
  all(): Promise<Student[]> {
    return this.allStudent.call();
  }

  @Get(':id')
  get(@Param('id') id: number): Promise<Student> {
    return this.findById.call(id);
  }
}
