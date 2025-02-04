import { gql, useQuery } from "@apollo/client";
import FetchResponse from "../types/FetchResponse";
import AnimeDetail from "../types/AnimeDetail";

export default function useFetchAnime(id: number): FetchResponse<AnimeDetail> {
  const GET_ANIME = gql`
    query ($id: Int) {
      Media(id: $id) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
          extraLarge
        }
        bannerImage
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        season
        seasonYear
        status
        format
        episodes
        duration
        genres
        averageScore
        popularity
        studios(isMain: true) {
          nodes {
            name
          }
        }
        staff(sort: RELEVANCE) {
          nodes {
            name {
              full
            }
            primaryOccupations
            image {
              medium
            }
          }
        }
        characters(sort: ROLE) {
          nodes {
            name {
              full
            }
          }
        }
        relations {
          nodes {
            title {
              romaji
            }
            type
            status
          }
        }
      }
    }
  `;
  const res = useQuery(GET_ANIME, {
    variables: { id: id },
    notifyOnNetworkStatusChange: true,
  });

  return {
    data: res?.data?.Media ?? {},
    loading: res.loading,
    error: res.error,
  };
}
