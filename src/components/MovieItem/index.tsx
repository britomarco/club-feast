import React from 'react';
import { useRouter } from 'next/navigation'
import { IMovieItem } from './interface';


const genres = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
}

const IMG_URL = process.env.API_IMB_URL


const MovieItem = ({ movie }: IMovieItem) => {
  const route = useRouter()

  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg justify-self-center hover:cursor-pointer mb-3"  onClick={() => route.push(`/details/${movie.id}`)}>
      <img  src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
        <p className="text-gray-700 text-base">
        {movie.release_date}
        </p>
        <p className="text-gray-700 text-base">
          Rating: {movie.vote_average}
        </p>
        <p className="text-gray-700 text-base">Genres: {movie?.genre_ids?.map((genre) => genres[genre]).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieItem;
