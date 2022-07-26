import { Injectable } from '@nestjs/common';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';
import { Classroom } from '../../entities/classroom';

@Injectable()
export class GetAllClassroom {
  constructor(private readonly classroomRepository: ClassroomRepository) {}

  async call(): Promise<Classroom[]> {
    return this.classroomRepository.getAll();
  }
}
