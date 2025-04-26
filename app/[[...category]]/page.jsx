import React from "react";
import HomeContainer from "../../containers/HomeContainer";

const API_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmEwOTRlYjFhZmIxOTA1OGZiZDhhYWI5MTVjOWU0NSIsIm5iZiI6MTc0MTc5MjAzNi41MjQsInN1YiI6IjY3ZDFhMzI0NjY4OTJiYWQ2MjgxNmI4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aW5QeB3IVU-Kb0R9VGfb8yRbprsKJcRCOvCmG_2A0xI",
  },
};
const getSingleCategory = async (genreId) => {
  const res = await fetch(
    `${API_URL}/discover/movie?&with_genres=${genreId}language=en-US&page=1`,
    options
  );

  return res.json();
};
const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?language=en-US&page=1`,
    options
  );

  return res.json();
};
const getCategories = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?language=en-US&page=1`,
    options
  );

  return res.json();
};
const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?language=en-US&page=1`,
    options
  );

  return res.json();
};

export default async function HomePage({ params }) {
  let selectedCategory;

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoryPromise = getCategories();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoryPromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params?.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      categories={categories}
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      selectedCategory={{
        id: params?.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}
