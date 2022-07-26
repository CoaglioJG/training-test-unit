import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/domain/modules/entities/student';
import { StudentRepository } from 'src/domain/repositories/student.repository';
import { HttpExceptionError } from 'src/shared/utils/http-exception.erros';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

export class StudentImpl implements StudentRepository {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async save(payload: Student): Promise<Student> {
    try {
      const response = this.studentRepository.create({
        ...payload,
        uuid: uuid(),
      });

      if (!response) throw new BadRequestException('Error in create student');

      return await this.studentRepository.save(response);
    } catch (error) {
      throw new HttpExceptionError(error);
    }
  }

  async getAll(): Promise<Student[]> {
    try {
      return await this.studentRepository.find();
    } catch (error) {
      throw new HttpExceptionError(error);
    }
  }

  async findById(id: number): Promise<Student> {
    try {
      return await this.studentRepository.findOne({ where: { id } });
    } catch (error) {
      throw new HttpExceptionError(error);
    }
  }
}
