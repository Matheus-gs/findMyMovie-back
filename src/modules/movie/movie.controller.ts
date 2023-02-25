import { IResponseGetMovieByTitle } from './interfaces/IResponseGetMovieByTitle';
import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('getMovieByTitle')
  async getMovieByTitle(@Query('title') title: string): Promise<IResponseGetMovieByTitle> {
    return await this.movieService.getMovieByTitle(title);
  }
}
