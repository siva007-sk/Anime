type Anime = {
  id: string;
  title: { romaji: string; english: string };
  coverImage: { large: string };
  genres: string[];
  averageScore: number;
};

export default Anime;