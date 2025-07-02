import { gql, useLazyQuery } from "@apollo/client";

const SEARCH_ANIME = gql`
  query SearchAnime($search: String) {
    Page(page: 1, perPage: 5) {
      media(search: $search, type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        coverImage {
          medium
        }
      }
    }
  }
`;

export interface SearchResult {
  id: number;
  title: {
    romaji: string;
    english: string;
  };
  coverImage: {
    medium: string;
  };
}

export const useAnimeSearch = () => {
  const [searchAnime, { data, loading, error }] = useLazyQuery(SEARCH_ANIME);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim()) {
      searchAnime({ variables: { search: searchTerm } });
    }
  };

  const results = data?.Page?.media || [];

  return {
    handleSearch,
    results,
    loading,
    error,
  };
};
