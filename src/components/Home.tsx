import { useState } from "react";
import useFetchList from "../hooks/useFetchList";
import Anime from "../types/Anime";
import FetchResponse from "../types/FetchResponse";
import AnimeCard from "./AnimeCard";
import Pagination from "./Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const response: FetchResponse = useFetchList(page);

  if (response.loading) return <h1>Loading...</h1>;
  if (response.error) return <h1>Something went wrong</h1>;
  if (!response.data?.length) return <h1>no movies found</h1>;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {response.data.map((anime: Anime) => (
              <AnimeCard anime={anime} key={anime.id} />
            ))}
          </div>
          <Pagination setPage={setPage} page={response.page}></Pagination>
        </div>
      </div>
    </>
  );
}
