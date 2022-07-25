import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { StudentRepository } from '../../repositories/student.repository';
import { Student } from '../entities/student';
import { arrayStudent, mockStudentData } from './__mocks__/student';

const mockStudentRepository = () => ({
  save: jest.fn().mockReturnValue(mockStudentData()),
  findById: jest.fn().mockReturnValue(mockStudentData()),
  all: jest.fn().mockReturnValue(arrayStudent()),
});

describe('Student Use Cases', () => {
  let studentRepository = null;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: StudentRepository, useFactory: mockStudentRepository },
      ],
    }).compile();

    studentRepository = module.get<StudentRepository>(StudentRepository);
  });

  it('should be define', () => {
    expect(studentRepository).toBeDefined();
  });

  describe('Save student', () => {
    let mockerStudent: Student;
    beforeEach(() => {
      mockerStudent = mockStudentData();
    });

    it('Save', async () => {
      expect(mockerStudent).toBeDefined();
    });

    it('should be equal success', async () => {
      const result = await studentRepository.save(mockerStudent);

      expect(result).toEqual(mockerStudent);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(studentRepository, 'save')
        .mockRejectedValueOnce(new BadRequestException());
      expect(studentRepository.save(mockerStudent)).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  describe('Find student', () => {
    let getStudent: Student;
    beforeEach(() => {
      getStudent = mockStudentData();
    });

    it('Define student', () => {
      expect(getStudent).toBeDefined();
    });

    it('Find Student', async () => {
      const response = await studentRepository.findById(1);

      expect(response).toEqual(getStudent);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(studentRepository, 'findById')
        .mockRejectedValueOnce(new BadRequestException());
      expect(studentRepository.findById(1)).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  describe('Find all', () => {
    let findAllStudent: Student[];
    beforeEach(() => {
      findAllStudent = arrayStudent();
    });

    it('Define array student', () => {
      expect(findAllStudent).toBeDefined();
    });

    it('Get all students', async () => {
      const response = await studentRepository.all();

      expect(response).toEqual(findAllStudent);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(studentRepository, 'all')
        .mockRejectedValueOnce(new BadRequestException());
      expect(studentRepository.all()).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });
});
