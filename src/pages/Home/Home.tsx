// import { Link } from "react-router-dom";
import { MovieCard } from "../../components";
import {
  MovieCardProps,
  MovieInterface,
} from "../../components/MovieCard/MovieCard.type";
import { AppProps } from "../../interfaces/general.interface";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

export const Home = (props?: AppProps) => {
  const [movieList, setMovieList] = useState([] as MovieInterface[]);
  const [metadata, setMetadata] = useState({
    total: 0,
    limit: 100,
    count: 0,
    skip: 0,
    page: 1,
    sort: "",
  } as any);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = (params?: string) => {
    setLoading(true);
    const url = params
      ? `${import.meta.env.VITE_API_URL}?q=${params}`
      : `${import.meta.env.VITE_API_URL}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.payload);
        setMetadata(data.metadata);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };
  const handleChange = (event: any) => {
    const val = event.target.value;
    retrieveData(val);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 6;
    const lastPageIndex = firstPageIndex + 6;
    return movieList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <form className="max-w-sm">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Link to={"/add"}>Add Movie</Link>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {movieList.length > 0 ? (
          movieList.map((movie, index) => (
            <div key={index}>
              <MovieCard movie={movie}></MovieCard>
            </div>
          ))
        ) : !loading ? (
          <div>No movies available</div>
        ) : (
          <Skeleton count={5} />
        )}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={metadata.page}
        totalCount={metadata.total}
        pageSize={6}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </div>
  );
};
