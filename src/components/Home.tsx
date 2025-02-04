import { useState } from "react";
import useFetchList from "../hooks/useFetchList";
import Anime from "../types/Anime";
import FetchResponse from "../types/FetchResponse";
import AnimeCard from "./AnimeCard";
import Pagination from "./Pagination";
import Header from "./Header";

export default function Home() {
  const [page, setPage] = useState(1);
  const response: FetchResponse<Anime[]> = useFetchList(page);

  if (response.loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  if (response.error) return <h1>Something went wrong</h1>;
  if (!response.data?.length) return <h1>no movies found</h1>;

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {response.data.map((anime: Anime) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
        </div>
        <Pagination
          setPage={setPage}
          page={
            response.page ?? {
              currentPage: 1,
              hasNextPage: false,
              lastPage: 1,
              total: 1,
            }
          }
        ></Pagination>
      </div>
    </>
  );
}
