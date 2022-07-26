import { Classroom } from './classroom';

export abstract class Student {
  id?: number;

  uuid?: string;

  name?: string;

  RA?: string;

  classroom?: Partial<Classroom>;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}
