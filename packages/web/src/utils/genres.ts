type PrimaryGenres =
  | "Arts"
  | "Business"
  | "Comedy"
  | "Education"
  | "Fiction"
  | "Government"
  | "Health & Fitness"
  | "History"
  | "Kids & Family"
  | "Leisure"
  | "Music"
  | "News"
  | "Religion & Spirituality"
  | "Science"
  | "Society & Culture"
  | "Sports"
  | "TV & Film"
  | "Technology"
  | "True Crime";

export type Genre = {
  id: number;
  name: string;
  href: string;
  primaryGenre: PrimaryGenres;
};

export type GenresArray = Array<Genre>;

const genres: GenresArray = [
  {
    id: 1,
    name: "Arts",
    href: "/genre/arts",
    primaryGenre: "Arts",
  },
  {
    id: 2,
    name: "Business",
    href: "/genre/business",
    primaryGenre: "Business",
  },
  {
    id: 3,
    name: "Comedy",
    href: "/genre/comedy",
    primaryGenre: "Comedy",
  },
  {
    id: 4,
    name: "Education",
    href: "/genre/education",
    primaryGenre: "Education",
  },
  {
    id: 5,
    name: "Fiction",
    href: "/genre/fiction",
    primaryGenre: "Fiction",
  },
  {
    id: 6,
    name: "Government",
    href: "/genre/government",
    primaryGenre: "Government",
  },
  {
    id: 7,
    name: "Health & Fitness",
    href: "/genre/health",
    primaryGenre: "Health & Fitness",
  },
  {
    id: 8,
    name: "History",
    href: "/genre/history",
    primaryGenre: "History",
  },
  {
    id: 9,
    name: "Kids & Family",
    href: "/genre/kids",
    primaryGenre: "Kids & Family",
  },
  {
    id: 10,
    name: "Leisure",
    href: "/genre/leisure",
    primaryGenre: "Leisure",
  },
  {
    id: 11,
    name: "Music",
    href: "/genre/music",
    primaryGenre: "Music",
  },
  {
    id: 12,
    name: "News",
    href: "/genre/news",
    primaryGenre: "News",
  },
  {
    id: 13,
    name: "Religion & Spirituality",
    href: "/genre/religion",
    primaryGenre: "Religion & Spirituality",
  },
  {
    id: 14,
    name: "Science",
    href: "/genre/science",
    primaryGenre: "Science",
  },
  {
    id: 15,
    name: "Society & Culture",
    href: "/genre/society",
    primaryGenre: "Society & Culture",
  },
  {
    id: 16,
    name: "Sports",
    href: "/genre/sports",
    primaryGenre: "Sports",
  },
  {
    id: 17,
    name: "TV & Film",
    href: "/genre/tv",
    primaryGenre: "TV & Film",
  },
  {
    id: 18,
    name: "Technology",
    href: "/genre/technology",
    primaryGenre: "Technology",
  },
  {
    id: 19,
    name: "True Crime",
    href: "/genre/crime",
    primaryGenre: "True Crime",
  },
];

export default genres;
