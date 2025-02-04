const Header: React.FC<object> = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold text-white">AniGold</div>
          <div className="w-full max-w-md relative">
            <input
              type="text"
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
