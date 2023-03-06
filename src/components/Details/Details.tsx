import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieInterface } from "../MovieCard/MovieCard.type";

export const Details = () => {
  const [movie, setMovie] = useState({} as MovieInterface);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}?_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.payload);
        setMovie(data.payload[0]);
      });
  }, []);
  return (
    <div className="min-h-screen py-6 flex flex-col sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white text-gray-800 shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src={movie?.imageUrl}
              alt={movie?.title}
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{movie?.title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
            </div>
            {/* <div>
              <div className="text-sm text-gray-800">Series</div>
              <div className="text-lg text-gray-800">2019</div>
            </div> */}
            <p className=" text-gray-800 max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex text-2xl font-bold text-a">${movie.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
