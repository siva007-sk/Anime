type Anime = {
  id: number;
  title: { romaji: string; english: string };
  coverImage: { large: string };
  genres: string[];
  averageScore: number;
};

export default Anime;
