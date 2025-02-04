type AnimeDetail = {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  description: string;
  coverImage: {
    extraLarge: string;
  };
  bannerImage: string;
  startDate: {
    year: string;
    month: string;
    day: string;
  };
  endDate: {
    year: string;
    month: string;
    day: string;
  };
  season: string;
  seasonYear: string;
  status: string;
  format: string;
  episodes: string;
  duration: string;
  genres: string[];
  averageScore: string;
  popularity: string;
  studios: {
    nodes: {
      name: string;
    }[];
  };
  staff: {
    nodes: {
      name: {
        full: string;
      };
      primaryOccupations: string[];
      image: {
        medium: string;
      };
    }[];
  };
  characters: {
    nodes: {
      name: {
        full: string;
      };
      role: string;
    }[];
  };
  relations: {
    nodes: {
      title: {
        romaji: string;
      };
      type: string;
      status: string;
    }[];
  };
};

export default AnimeDetail;
