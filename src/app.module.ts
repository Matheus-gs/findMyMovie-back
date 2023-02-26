import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MovieModule } from './modules/movie/movie.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
