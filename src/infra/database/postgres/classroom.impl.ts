import { InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from 'src/domain/modules/entities/classroom';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';
import { Repository } from 'typeorm';

export class ClassroomImpl implements ClassroomRepository {
  constructor(
    @InjectRepository(Classroom)
    private readonly classroomRepository: Repository<Classroom>,
  ) {}

  async save(payload: Classroom): Promise<Classroom> {
    try {
      return await this.classroomRepository.save(payload);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getAll(): Promise<Classroom[]> {
    try {
      return await this.classroomRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findById(id: number): Promise<Classroom> {
    try {
      return await this.classroomRepository.findOne({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
