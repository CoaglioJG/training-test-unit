import { Injectable } from '@nestjs/common';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';
import { Classroom } from '../../entities/classroom';

@Injectable()
export class FindByIdClassroom {
  constructor(private readonly classroomRepository: ClassroomRepository) {}

  async call(id: number): Promise<Classroom> {
    return this.classroomRepository.findById(id);
  }
}
