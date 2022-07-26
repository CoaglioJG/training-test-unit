import { Injectable } from '@nestjs/common';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';
import { Classroom } from '../../entities/classroom';

@Injectable()
export class SaveClassroom {
  constructor(private readonly classroomRepository: ClassroomRepository) {}

  async call(payload: Classroom): Promise<Classroom> {
    return this.classroomRepository.save(payload);
  }
}
