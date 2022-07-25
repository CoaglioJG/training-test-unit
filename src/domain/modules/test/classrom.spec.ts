import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomRepository } from '../../repositories/classroom.repository';
import { Classroom } from '../entities/classroom';
import { arrayClassroom, mockClassroom } from './__mocks__/classroom';

const mockClassRoomRepository = () => ({
  save: jest.fn().mockResolvedValue(mockClassroom()),
  findById: jest.fn().mockResolvedValue(mockClassroom()),
  all: jest.fn().mockResolvedValue(arrayClassroom()),
});

describe('Classroom Use Cases', () => {
  let classroomRepository = null;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: ClassroomRepository, useFactory: mockClassRoomRepository },
      ],
    }).compile();

    classroomRepository = module.get<ClassroomRepository>(ClassroomRepository);
  });

  it('Define repository', () => {
    expect(classroomRepository).toBeDefined();
  });

  describe('Save Classroom', () => {
    let mockerClassroom: Classroom;
    beforeEach(() => {
      mockerClassroom = mockClassroom();
    });

    it('Define mocker classroom', () => {
      expect(mockerClassroom).toBeDefined();
    });

    it('Save classroom', async () => {
      const response = await classroomRepository.save(mockerClassroom);

      expect(response).toEqual(mockerClassroom);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(classroomRepository, 'save')
        .mockRejectedValue(new BadRequestException());
      expect(classroomRepository.save(mockerClassroom)).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  describe('Find classroom', () => {
    let findClassrom: Classroom;
    beforeEach(() => {
      findClassrom = mockClassroom();
    });

    it('Define variable findClassrom', () => {
      expect(findClassrom).toBeDefined();
    });

    it('Should return classroom by id', async () => {
      const response = await classroomRepository.findById(1);

      expect(response).toEqual(findClassrom);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(classroomRepository, 'findById')
        .mockRejectedValueOnce(new BadRequestException());
      expect(classroomRepository.findById(1)).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  describe('Get all classrom', () => {
    let allClassroom: Classroom[];
    beforeEach(() => {
      allClassroom = arrayClassroom();
    });

    it('Define all classroom', () => {
      expect(allClassroom).toBeDefined();
    });

    it('Should return all classroom', async () => {
      const response = await classroomRepository.all();

      expect(response).toEqual(allClassroom);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(classroomRepository, 'all')
        .mockRejectedValueOnce(new BadRequestException());
      expect(classroomRepository.all()).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });
});
