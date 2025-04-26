import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "../../../containers/MovieContainer";

const API_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmEwOTRlYjFhZmIxOTA1OGZiZDhhYWI5MTVjOWU0NSIsIm5iZiI6MTc0MTc5MjAzNi41MjQsInN1YiI6IjY3ZDFhMzI0NjY4OTJiYWQ2MjgxNmI4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aW5QeB3IVU-Kb0R9VGfb8yRbprsKJcRCOvCmG_2A0xI",
  },
};
const getMovie = async (movieId) => {
  const res = await fetch(
    `${API_URL}/movie/${movieId}?language=en-US&page=1`,
    options
  );

  return res.json();
};

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
