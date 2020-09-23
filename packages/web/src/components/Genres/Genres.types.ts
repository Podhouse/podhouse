export interface IGenre {
  id: number;
  name: string;
  icon: any;
  href: string;
}

export interface GenresProps {
  title: string;
  genres: Array<IGenre>;
}
