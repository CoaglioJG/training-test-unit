import { Student } from './student';

export abstract class Classroom {
  id?: number;

  description?: string;

  type?: string;

  number?: number;

  students?: Student[];

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}
