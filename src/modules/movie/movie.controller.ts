import { ResponseGetMovieByTitleDTO } from './types/ResponseGetMovieByTitleDTO';
import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('getMovieByTitle/:title')
  async getMovieByTitle(
    @Param('title') title: string,
  ): Promise<ResponseGetMovieByTitleDTO> {
    return await this.movieService.getMovieByTitle(title);
  }
}
