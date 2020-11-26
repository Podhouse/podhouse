export interface IGenre {
  id: number;
  name: string;
  href: string;
}

export interface GenresProps {
  title: string;
  genres: Array<IGenre>;
}
