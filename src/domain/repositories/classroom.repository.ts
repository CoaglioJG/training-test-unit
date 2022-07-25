import { Classroom } from '../modules/entities/classroom';

export abstract class ClassroomRepository {
  save: (classroom: Classroom) => Promise<Classroom>;
  findById: (id: number) => Promise<Classroom>;
  all: () => Promise<Classroom[]>;
}
