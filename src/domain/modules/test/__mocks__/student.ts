import { Student } from '../../entities/student';

export function mockStudentData(): Student {
  return {
    id: 1,
    name: 'Joaquim',
    RA: '12314213',
    uuid: '1082bb17-685a-4800-90ed-e7ebf8f0dc67',
    classroom: {
      id: 1,
      description: '1° ano',
      type: 'A',
      number: 5,
    },
  };
}

export function arrayStudent(): Student[] {
  return [
    {
      id: 1,
      name: 'Joaquim',
      RA: '12314213',
      uuid: '1082bb17-685a-4800-90ed-e7ebf8f0dc67',
      classroom: {
        id: 1,
        description: '1° ano',
        type: 'A',
        number: 5,
      },
    },
    {
      id: 2,
      name: 'Rita',
      RA: '55534534353',
      uuid: '1082bb17-685a-4800-90ed-e7ebf8f0dc69',
      classroom: {
        id: 2,
        description: '2° ano',
        type: 'A',
        number: 6,
      },
    },
    {
      id: 3,
      name: 'Teresa',
      RA: '555345343353',
      uuid: '1082bb17-685a-4800-90ed-e7ebf8f0dc66',
      classroom: {
        id: 3,
        description: '3° ano',
        type: 'A',
        number: 7,
      },
    },
  ];
}
