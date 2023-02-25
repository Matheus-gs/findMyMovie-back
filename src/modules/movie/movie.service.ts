import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { OMDB_API_BASE_URL } from 'src/constants';
import { ResponseGetMovieByTitleDTO } from './types/ResponseGetMovieByTitleDTO';
import { IResponseGetMovieByTitle } from './interfaces/IResponseGetMovieByTitle';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  async getMovieByTitle(title: string): Promise<ResponseGetMovieByTitleDTO> {
    if (!title) return;
    const url = `${OMDB_API_BASE_URL}&t=${title}`;

    const { data } = await this.httpService.axiosRef.get<IResponseGetMovieByTitle>(url);

    const { Title, Actors, Plot, Poster, Ratings, imdbRating } = data;

    return {
      Title,
      Actors,
      Plot,
      Poster,
      Ratings,
      imdbRating,
    };
  }
}
