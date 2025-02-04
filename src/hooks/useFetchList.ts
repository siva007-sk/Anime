import { gql, useQuery } from "@apollo/client";
import FetchResponse from "../types/FetchResponse";
import Anime from "../types/Anime";

export default function useFetchList(page: number): FetchResponse<Anime[]> {
  const GET_TRENDING = gql`
    query TrendingTitles($page: Int!) {
      Page(page: $page, perPage: 12) {
        media(sort: TRENDING_DESC) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          averageScore
          genres
        }
        pageInfo {
          currentPage
          hasNextPage
          lastPage
          total
        }
      }
    }
  `;
  const res = useQuery(GET_TRENDING, {
    variables: { page: page },
    notifyOnNetworkStatusChange: true,
  });

  return {
    data: res.data?.Page?.media || [],
    loading: res.loading,
    error: res.error,
    page: res.data?.Page?.pageInfo || null,
  };
}
