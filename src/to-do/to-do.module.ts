import { Module } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Todo,TodoSchema } from './schema/to-do.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoUrl), 
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])
  ],
  
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule { }

