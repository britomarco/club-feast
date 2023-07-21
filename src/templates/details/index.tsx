import React from 'react';
import MovieDetails from '@/components/MovieDetails';
import Header from '@/components/Header';

const Details = ({params}: {
  params: {id: string}
}) => {

  return (
    <>
      <Header />
      <MovieDetails id={params.id} />
    </>
  )
};

export default Details;
