import { Classroom } from './classroom';

export class Student {
  id?: number;
  uuid: string;
  name: string;
  RA: string;
  classroom?: Classroom;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
