import { Module } from '@nestjs/common';
import { FindClassroomById } from './find-by-id';
import { GetAllClassroom } from './get-all';
import { SaveClassroom } from './save';

@Module({
  providers: [SaveClassroom, FindClassroomById, GetAllClassroom],
  exports: [SaveClassroom, FindClassroomById, GetAllClassroom],
})
export class ClassroomModule {}
