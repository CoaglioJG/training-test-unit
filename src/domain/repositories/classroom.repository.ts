import { Classroom } from '../modules/entities/classroom';

export abstract class ClassroomRepository {
  save: (payload: Classroom) => Promise<Classroom>;
  getAll: () => Promise<Classroom[]>;
  findById: (id: number) => Promise<Classroom>;
}
