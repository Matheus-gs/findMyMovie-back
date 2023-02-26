import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startSwagger } from './docs/swagger';
import { enableCors } from './config/cors';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  enableCors(app);
  startSwagger(app);
  await app.listen(3000);
  Logger.log("Server started on http://localhost:3000/docs")
}
bootstrap();
