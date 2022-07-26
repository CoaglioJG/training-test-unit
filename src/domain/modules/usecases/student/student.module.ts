import { Module } from '@nestjs/common';
import { FindByIdStudent } from './find-by-id';
import { GetAllStudent } from './get-all';
import { SaveStudent } from './save';

@Module({
  providers: [FindByIdStudent, GetAllStudent, SaveStudent],
  exports: [FindByIdStudent, GetAllStudent, SaveStudent],
})
export class StudentModule {}
