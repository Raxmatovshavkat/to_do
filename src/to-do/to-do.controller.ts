import { Controller, Get, Post, Body,  Param, Delete, Put } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { create_to_do_dto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  async create(@Body() createToDoDto:create_to_do_dto) {
    return await this.toDoService.create(createToDoDto);
  }

  @Get()
  async findAll() {
    return await this.toDoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.toDoService.findOne(id);
  }

  @Put(':id')
 async update(@Param('id') id: string, @Body() updateToDoDto: UpdateToDoDto) {
    return await this.toDoService.update(id, updateToDoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.toDoService.remove(id);
  }
}
