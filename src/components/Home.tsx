import { useQuery, gql } from "@apollo/client";
import Anime from "../types/Anime";
import AnimeCard from "./AnimeCard";

export default function Home() {
  const GET_TRENDING = gql`
    query TrendingTitles($page: Int) {
      Page(page: $page, perPage: 10) {
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
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_TRENDING, {
    variables: { page: 1 },
  });
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : data?.Page?.media?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-900 p-24">
          {data?.Page?.media?.map((anime: Anime) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
        </div>
      ) : (
        <h1>no movies found</h1>
      )}
    </>
  );
}
