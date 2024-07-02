import { NestFactory } from '@nestjs/core';
import { ToDoModule } from './to-do/to-do.module';

async function bootstrap() {
  const port = process.env.PORT || 4000; 
  const app = await NestFactory.create(ToDoModule);
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}

bootstrap();
