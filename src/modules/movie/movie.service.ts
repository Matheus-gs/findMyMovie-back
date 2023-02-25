import { Injectable } from '@nestjs/common';
import { IResponseGetMovieByTitle } from './interfaces/IResponseGetMovieByTitle';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  async getMovieByTitle(title: string): Promise<IResponseGetMovieByTitle> {
    if (!title) return;
    const url = `http://www.omdbapi.com/?apikey=9219e4d&t=${title}`;

    const { data } =
      await this.httpService.axiosRef.get<IResponseGetMovieByTitle>(url);

    const { Title, Actors, Plot, Poster, Ratings } = data;

    return {
      Title,
      Actors,
      Plot,
      Poster,
      Ratings,
    };
  }
}
