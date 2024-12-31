import Page from "../types/Page";

type PaginationProps = {
  setPage: (page: number) => void;
  page: Page;
};

const Pagination = ({ setPage, page }: PaginationProps) => {
  const handlePrevious = () => {
    if (page.currentPage > 1) setPage(page.currentPage - 1);
  };

  const handleNext = () => {
    if (page.hasNextPage) setPage(page.currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={handlePrevious}
        disabled={page.currentPage === 1}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:hover:bg-blue-600"
      >
        Previous
      </button>
      <div className="flex gap-2">
        {[1, 2, 3].map((_p) => (
          <span
            key={_p}
            onClick={() => setPage(_p)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors
                  ${
                    _p === page.currentPage
                      ? "bg-blue-500 text-white"
                      : "text-slate-400 hover:bg-slate-700"
                  }`}
          >
            {_p}
          </span>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={!page.hasNextPage}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
