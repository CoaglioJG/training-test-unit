import { Student } from './student';

export class Classroom {
  id: number;
  description: string;
  type: string;
  number: number;
  students?: Array<Student>;
}
