import { Injectable } from '@nestjs/common';
import { StudentRepository } from 'src/domain/repositories/student.repository';
import { Student } from '../../entities/student';

@Injectable()
export class SaveStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async call(payload: Student): Promise<Student> {
    return this.studentRepository.save(payload);
  }
}
