import { Injectable } from '@nestjs/common';
import { StudentRepository } from 'src/domain/repositories/student.repository';
import { Student } from '../../entities/student';

@Injectable()
export class GetAllStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async call(): Promise<Student[]> {
    return this.studentRepository.getAll();
  }
}
