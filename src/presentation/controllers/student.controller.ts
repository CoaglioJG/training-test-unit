import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Student } from 'src/domain/modules/entities/student';
import { FindByIdStudent } from 'src/domain/modules/usecases/student/find-by-id';
import { GetAllStudent } from 'src/domain/modules/usecases/student/get-all';
import { SaveStudent } from 'src/domain/modules/usecases/student/save';
import { StudentDto } from '../dto/student.dto';

@Controller('student')
export class StudentController {
  constructor(
    private readonly saveStudent: SaveStudent,
    private readonly allStudent: GetAllStudent,
    private readonly findById: FindByIdStudent,
  ) {}

  @Post()
  save(@Body() student: StudentDto): Promise<Student> {
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
