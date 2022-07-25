import { Injectable } from '@nestjs/common';
import { Student } from 'src/domain/modules/entities/student';
import { StudentRepository } from 'src/domain/repositories/student.repository';

@Injectable()
export class SaveStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async call(student: Student): Promise<Student> {
    return await this.studentRepository.save(student);
  }
}
