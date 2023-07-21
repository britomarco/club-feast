
"use client"

import React, { useState, useEffect } from 'react';
import { getMovies, getGenre } from '../../app/api/api';
import MovieItem from '../MovieItem';

interface IProps {
  type: string
}

const MoviesList = ({ type }: IProps) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies(type);
      setMovies(data);
    };
    fetchMovies();
  }, [type]);

  useEffect(()=>{
    const fetchGenre = async () => {
      const genres = await getGenre()
      console.log(genres)
    }
    fetchGenre()
  },[])

  return (
    <div className='mx-4 mb-3'>
      <h2 className="font-bold uppercase">{type}</h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 md:gap-1 sm:grid-cols-2 lg:gap-1">
        {movies.map((movie) => (
          <MovieItem key={JSON.stringify(movie)} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
