import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipes';

async function start() {
  const PORT = 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());
  app.listen(PORT, () => console.log(`start is server ${PORT}`));
}
start();
