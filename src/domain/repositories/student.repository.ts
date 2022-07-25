import { Student } from '../modules/entities/student';

export abstract class StudentRepository {
  save: (student: Student) => Promise<Student>;
  findById: (id: number) => Promise<Student>;
  all: () => Promise<Student[]>;
}
