import { Injectable } from '@nestjs/common';
import { Classroom } from 'src/domain/modules/entities/classroom';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';

@Injectable()
export class GetAllClassroom {
  constructor(private readonly classroomRepository: ClassroomRepository) {}

  async call(): Promise<Classroom[]> {
    return await this.classroomRepository.all();
  }
}
