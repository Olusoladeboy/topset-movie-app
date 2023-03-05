import { useState } from "react";
import { AppProps } from "../../interfaces/general.interface";
import { MovieCardProps } from "./MovieCard.type";

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [isMovieDetail, setIsMovieDetail] = useState(false);
  return isMovieDetail ? (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src={movie.imageUrl}
              alt={movie.title}
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{movie.title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Series</div>
              <div className="text-lg text-gray-800">2019</div>
            </div>
            <p className=" text-gray-400 max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex text-2xl font-bold text-a">$83.90</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <a>
          <img
            className="rounded-t-lg h-[20rem] w-full"
            src={movie.imageUrl}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {movie.title}
          </h5>
          {/* <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          {/* <button
            type="button"
            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Button
          </button> */}
        </div>
      </div>
    </div>
  );
};
