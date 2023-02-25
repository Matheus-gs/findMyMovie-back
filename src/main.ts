import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startSwagger } from './docs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  startSwagger(app);
  await app.listen(3000);
}
bootstrap();
