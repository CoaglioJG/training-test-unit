import { Classroom } from '../../entities/classroom';

export function mockClassroom(): Classroom {
  return {
    id: 1,
    description: '1° ano',
    type: 'A',
    number: 5,
  };
}

export function arrayClassroom(): Classroom[] {
  return [
    {
      id: 1,
      description: '1° ano',
      type: 'A',
      number: 5,
    },
    {
      id: 2,
      description: '2° ano',
      type: 'B',
      number: 10,
    },
    {
      id: 3,
      description: '3° ano',
      type: 'B',
      number: 12,
    },
  ];
}
