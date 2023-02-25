import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common/interfaces';

const config = new DocumentBuilder()
  .setTitle('FindMyMovieAPI')
  .setDescription('An API to consume OMDB API')
  .setVersion('1.0')
  .build();

export function startSwagger(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
