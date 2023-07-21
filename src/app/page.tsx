import React from 'react';
import MoviesList from '@/components/MovieList';
import Header from '@/components/Header'

const Home = () => {
  return (
    <main>
      <Header />
      <MoviesList type="upcoming" />
      <MoviesList type="popular" />
      <MoviesList type="top_rated" />
    </main>
  );
};

export default Home;