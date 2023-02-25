import { INestApplication } from '@nestjs/common/interfaces';
export function enableCors(app: INestApplication) {
  app.enableCors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  });
}
