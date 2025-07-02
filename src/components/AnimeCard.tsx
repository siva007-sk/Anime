import React from "react";
import Anime from "../types/Anime";
import { useNavigate } from "react-router-dom";

type AnimeCardProps = {
  anime: Anime;
};

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/animeDetails/${anime.id}`)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={anime.coverImage.large}
          alt="Anime cover"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {anime.averageScore + "%" || "N/A"}
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-1 mb-3">
          <h3 className="text-lg font-bold text-white leading-tight">
            {anime.title.romaji}
          </h3>
          <h4 className="text-sm text-slate-400 font-medium italic">
            {anime.title.english}
          </h4>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {anime.genres.map((_g) => (
            <span
              key={_g}
              className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-200"
            >
              {_g}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
