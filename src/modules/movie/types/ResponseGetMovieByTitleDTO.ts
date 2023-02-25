import { IResponseGetMovieByTitle } from '../interfaces/IResponseGetMovieByTitle';

export type GetMovieByTitleDTO = Pick<
  IResponseGetMovieByTitle,
  'imdbID' | 'Title' | 'Actors' | 'Plot' | 'Poster' | 'Ratings' | 'imdbRating'
>;
export interface ResponseGetMovieByTitleDTO extends GetMovieByTitleDTO {
  Id: string;
}
