import { Injectable } from '@nestjs/common';
import { Classroom } from 'src/domain/modules/entities/classroom';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';

@Injectable()
export class SaveClassroom {
  constructor(private readonly classroomRepository: ClassroomRepository) {}

  async call(classroom: Classroom): Promise<Classroom> {
    return await this.classroomRepository.save(classroom);
  }
}
