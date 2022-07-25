import { Injectable } from '@nestjs/common';
import { Classroom } from 'src/domain/modules/entities/classroom';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';

@Injectable()
export class FindClassroomById {
  constructor(private readonly classroomRepository: ClassroomRepository) {}

  async call(id: number): Promise<Classroom> {
    return await this.classroomRepository.findById(id);
  }
}
