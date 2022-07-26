import { Module } from '@nestjs/common';
import { FindByIdClassroom } from './find-by-id';
import { GetAllClassroom } from './get-all';
import { SaveClassroom } from './save';

@Module({
  providers: [FindByIdClassroom, GetAllClassroom, SaveClassroom],
  exports: [FindByIdClassroom, GetAllClassroom, SaveClassroom],
})
export class ClassroomModule {}
