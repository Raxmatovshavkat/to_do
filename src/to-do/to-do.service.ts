import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { create_to_do_dto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { Todo, TodoDocument } from './schema/to-do.schema';
@Injectable()
export class ToDoService {

  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>
  ){}
  async create(createToDoDto: create_to_do_dto):Promise<Todo> {
    return await new this.model({...createToDoDto, createdAt: new Date(),}).save();
  }
  

  async findAll() {
    return await this.model.find()
  }

  async findOne(id: any): Promise<Todo> {
    console.log(id);
    
    return await this.model.findById(id).exec();
  }

  async update(id: any, updateToDoDto: UpdateToDoDto) {
    return await this.model.findByIdAndUpdate(id,updateToDoDto)
  }

  async remove(id: any) {
    return await this.model.findByIdAndDelete(id)
  }
}
