import React from "react";
import Anime from "../types/Anime";

type AnimeCardProps = {
  anime: Anime;
};

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
      <img
        src={anime.coverImage.large}
        alt={anime.title.romaji}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{anime.title.romaji}</h2>
        <p className="text-gray-500">{anime.genres.join(", ")}</p>
        <div className="flex items-center mt-2">
          <span>Score: {anime.averageScore || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
