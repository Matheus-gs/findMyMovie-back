import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { OMDB_API_BASE_URL } from '../../constants/index';
import { ResponseGetMovieByTitleDTO } from './types/ResponseGetMovieByTitleDTO';
import { IResponseGetMovieByTitle } from './interfaces/IResponseGetMovieByTitle';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  async getMovieByTitle(
    title: string,
  ): Promise<ResponseGetMovieByTitleDTO> {
    if (!title) return;
    const url = `${OMDB_API_BASE_URL}&t=${title}`;

    try {
      const { data } = await this.httpService.axiosRef.get<IResponseGetMovieByTitle>(url);

      const { Title, Actors, Plot, Poster, Ratings, imdbRating, imdbID } = data;
      if (!imdbID) throw new Error();

      const Id = imdbID;

      return {
        Id,
        Title,
        Actors,
        Plot,
        Poster,
        Ratings,
        imdbRating,
      };
    } catch (error) {
      return error;
    }
  }
}
