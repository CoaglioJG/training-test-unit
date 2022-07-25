import { Injectable } from '@nestjs/common';
import { Student } from 'src/domain/modules/entities/student';
import { StudentRepository } from 'src/domain/repositories/student.repository';

@Injectable()
export class FindStudentById {
  constructor(private readonly studentRepository: StudentRepository) {}

  async call(id: number): Promise<Student> {
    return await this.studentRepository.findById(id);
  }
}
