export interface IResponseGetMovieByTitle {
  Title: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Ratings?: Ratings[] | null;
}
export interface Ratings {
  Source: string;
  Value: string;
}

export interface ICompleteResponseGetMovieByTitle {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings?: Ratings[] | null;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
