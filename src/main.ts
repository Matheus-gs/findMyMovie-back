import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startSwagger } from './docs/swagger';
import { enableCors } from './config/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  enableCors(app);
  startSwagger(app);
  await app.listen(3000);
}
bootstrap();
