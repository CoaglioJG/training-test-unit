import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from 'src/domain/modules/entities/classroom';
import { ClassroomRepository } from 'src/domain/repositories/classroom.repository';
import { Repository } from 'typeorm';

export class ClassroomImpl implements ClassroomRepository {
  constructor(
    @InjectRepository(Classroom)
    private readonly classroomRepository: Repository<Classroom>,
  ) {}

  async save(classroom: Classroom): Promise<Classroom> {
    try {
      const response = this.classroomRepository.create(classroom);

      if (!response) throw new BadRequestException();

      return await this.classroomRepository.save(classroom);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findById(id: number): Promise<Classroom> {
    try {
      return await this.classroomRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async all(): Promise<Classroom[]> {
    try {
      return await this.classroomRepository.find();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
