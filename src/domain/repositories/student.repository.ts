import { Student } from '../modules/entities/student';

export abstract class StudentRepository {
  save: (payload: Student) => Promise<Student>;
  getAll: () => Promise<Student[]>;
  findById: (id: number) => Promise<Student>;
}
