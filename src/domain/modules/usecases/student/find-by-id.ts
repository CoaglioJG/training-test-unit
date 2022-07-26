import { Injectable } from '@nestjs/common';
import { StudentRepository } from 'src/domain/repositories/student.repository';
import { Student } from '../../entities/student';

@Injectable()
export class FindByIdStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async call(id: number): Promise<Student> {
    return this.studentRepository.findById(id);
  }
}
