import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimeSearch, SearchResult } from "../hooks/useAnimeSearch";
import { useDebounce } from "../hooks/useDebounce";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { handleSearch, results, loading } = useAnimeSearch();
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    handleSearch(debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleAnimeSelect = (anime: SearchResult) => {
    navigate(`/animeDetails/${anime.id}`);
    setSearchTerm("");
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            AniGold
          </div>
          <div className="w-full max-w-md relative" ref={dropdownRef}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search anime..."
              className="w-full bg-slate-800 text-white rounded-lg px-4 py-2 
                border border-slate-700 focus:border-blue-500 focus:ring-2 
                focus:ring-blue-500/20 focus:outline-none
                placeholder:text-slate-500"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5
                     text-slate-400 hover:text-white transition-colors"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </button>
            {isDropdownOpen && searchTerm && (
              <div className="absolute w-full mt-2 bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden">
                {results.length > 0 ? (
                  results.map((anime: SearchResult) => (
                    <div
                      key={anime.id}
                      className="flex items-center gap-3 p-3 hover:bg-slate-700 cursor-pointer transition-colors"
                      onClick={() => handleAnimeSelect(anime)}
                    >
                      <img
                        src={anime.coverImage.medium}
                        alt={anime.title.english || anime.title.romaji}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div>
                        <div className="text-white font-medium">
                          {anime.title.romaji}
                        </div>
                        <div className="text-slate-400 text-sm">
                          {anime.title.english}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-slate-400 text-center">
                    {loading ? "Searching..." : "No results found"}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
