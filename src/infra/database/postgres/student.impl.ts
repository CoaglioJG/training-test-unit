import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/domain/modules/entities/student';
import { StudentRepository } from 'src/domain/repositories/student.repository';
import { Repository } from 'typeorm';

export class StudentImpl implements StudentRepository {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async save(student: Student): Promise<Student> {
    try {
      const createStudent = this.studentRepository.create(student);

      if (!createStudent)
        throw new BadRequestException('Error ir create student');

      return await this.studentRepository.save(createStudent);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findById(id: number): Promise<Student> {
    try {
      return await this.studentRepository.findOne({ where: { id } });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async all(): Promise<Student[]> {
    try {
      return await this.studentRepository.find();
    } catch (error) {}
    throw new BadRequestException();
  }
}
