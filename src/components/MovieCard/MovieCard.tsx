import { useState } from "react";
import { AppProps } from "../../interfaces/general.interface";
import { MovieCardProps } from "./MovieCard.type";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      <Link to={"/detail/" + movie._id}>
        <div className="flex justify-center">
          <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a>
              <img
                className="rounded-t-lg h-[15rem] w-full"
                src={movie.imageUrl}
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {movie.title}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
