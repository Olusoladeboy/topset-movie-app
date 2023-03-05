import { MovieCard } from "../../components";
import {
  MovieCardProps,
  MovieInterface,
} from "../../components/MovieCard/MovieCard.type";
import { AppProps } from "../../interfaces/general.interface";

export const Home = (props?: AppProps) => {
  const movieList: MovieInterface[] = [
    {
      id: "1",
      imageUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
      title: "Snake in the eagles shadow",
    },
    {
      id: "2",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg",
      title: "Snake in the eagles shadow",
    },
    {
      id: "3",
      imageUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
      title: "Snake in the eagles shadow",
    },
    {
      id: "4",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg",
      title: "Snake in the eagles shadow",
    },
    {
      id: "2",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg",
      title: "Snake in the eagles shadow",
    },
    {
      id: "3",
      imageUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
      title: "Snake in the eagles shadow",
    },
    {
      id: "4",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg",
      title: "Snake in the eagles shadow",
    },
  ];
  return (
    <div className="p-5">
      <div>
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
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {movieList.length > 0 ? (
          movieList.map((movie, index) => (
            <div key={index}>
              <MovieCard movie={movie}></MovieCard>
            </div>
          ))
        ) : (
          <div>No movies available</div>
        )}
      </div>
    </div>
  );
};
