"use client"
import React, { useState, useEffect } from 'react';
import { getMovieCredits, getMovieDetails } from '@/app/api/api';
import { IMovie, IMovieCredits, IMovieDetails } from './interface';
import Image from 'next/image'
import { CustomImage } from '../CustomImage';

const IMG_URL = process.env.API_IMB_URL

const MovieDetails = ({ id }: IMovieDetails) => {

  const [movie, setMovie] = useState<IMovie>();
  const [credits, setCredits] = useState<IMovieCredits[]>([]);

  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        const details = await getMovieDetails(id);
        const movieCredits = await getMovieCredits(id);
        setMovie(details);
        setCredits(movieCredits);
      };
      fetchMovieDetails();
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      <div className='bg-opacity-5' style={{ backgroundImage: `url(${IMG_URL}${movie.backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', backgroundPosition: '30%', }}>
        <div className='grid lg:grid-cols-5 md:grid-cols-2 md:gap-1 sm:grid-cols-2'>
         <Image src={`${IMG_URL}${movie.poster_path}`} width={300} height={300} alt={movie.title} />
          <div className='mt-3'>
            <h2 className="text-white mt-3">{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
            <p className="text-white text-base mt-3">Rating: {movie.vote_average}</p>
            <p className="text-white text-base mt-3">Genres: {movie?.genres?.map((genre) => genre.name).join(', ')}</p>
            <p className="text-white text-base mt-3">{movie.overview}</p>
          </div>
        </div>

      </div>
     


      <div className='mx-4 mb-3'>
        <h3 className='font-bold text-xl mb-2 mt-3'>Cast</h3>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {credits.map((credit) => (
            <div key={credit.cast_id} className='max-w-sm rounded overflow-hidden shadow-lg justify-self-center'>
              <CustomImage
                key={credit.cast_id}
                src={`${IMG_URL}${credit.profile_path}`} 
                width={500} 
                height={100} 
                alt={movie.title}
              />
              <div className='px-6 py-4'> 
                 <p key={credit.cast_id} className='text-gray-700 text-base'>{credit.name} as <span className='font-bold'>{credit.character}</span></p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MovieDetails;
