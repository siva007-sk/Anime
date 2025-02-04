import { useParams } from "react-router-dom";
import FetchResponse from "../types/FetchResponse";
import AnimeDetail from "../types/AnimeDetail";
import useFetchAnime from "../hooks/useFetchAnime";
import parse from "html-react-parser";

const AnimeDetails = () => {
  const { animeId } = useParams();
  const details: FetchResponse<AnimeDetail> = useFetchAnime(Number(animeId));
  if (details.loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  if (details.error) return <h1>Something went wrong</h1>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
          {/* Banner Image with Overlay */}
          <div
            className="h-64 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${details.data.bannerImage})`,
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />

          <div className="p-6">
            {/* Title and Basic Info */}
            <h1 className="text-3xl font-bold mb-2 text-white">
              {details.data.title.english || details.data.title.romaji}
            </h1>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-gray-300">
              <div>
                <span className="font-semibold">Season:</span>{" "}
                {details.data.season} {details.data.seasonYear}
              </div>
              <div>
                <span className="font-semibold">Status:</span>{" "}
                {details.data.status}
              </div>
              <div>
                <span className="font-semibold">Episodes:</span>{" "}
                {details.data.episodes}
              </div>
              <div>
                <span className="font-semibold">Score:</span>{" "}
                {details.data.averageScore}%
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-white">
                Synopsis
              </h2>
              <p className="text-gray-300">{parse(details.data.description)}</p>
            </div>

            {/* Genres */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-white">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {details.data.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Staff */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-white">
                Key Staff
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {details.data.staff.nodes.slice(0, 4).map((staff) => (
                  <div key={staff.name.full} className="text-center">
                    <p className="font-medium text-gray-100">
                      {staff.name.full}
                    </p>
                    <p className="text-sm text-gray-400">
                      {staff.primaryOccupations.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Studios */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-white">Studios</h2>
              <div className="flex flex-wrap gap-2">
                {details.data.studios.nodes.map((studio) => (
                  <span
                    key={studio.name}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                  >
                    {studio.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
