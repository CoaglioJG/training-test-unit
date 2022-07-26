import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Classroom } from 'src/domain/modules/entities/classroom';
import { FindByIdClassroom } from 'src/domain/modules/usecases/classroom/find-by-id';
import { GetAllClassroom } from 'src/domain/modules/usecases/classroom/get-all';
import { SaveClassroom } from 'src/domain/modules/usecases/classroom/save';
import { ClassroomDto } from '../dto/classroom.dto';

@Controller('classroom')
export class ClassroomController {
  constructor(
    private readonly saveClassroom: SaveClassroom,
    private readonly getAllClassroom: GetAllClassroom,
    private readonly findByIdClassroom: FindByIdClassroom,
  ) {}

  @Post()
  save(@Body() payload: ClassroomDto): Promise<Classroom> {
    return this.saveClassroom.call(payload);
  }

  @Get()
  all(): Promise<Classroom[]> {
    return this.getAllClassroom.call();
  }

  @Get(':id')
  find(@Param('id') id: number): Promise<Classroom> {
    return this.findByIdClassroom.call(id);
  }
}
