import React from "react";

import { FeaturedMovie } from "@/components/featuredMovie";
import { Categories } from "@/components/caterories";

import { MoviesSection } from "@/components/moviesSection";

export default function HomeContainer({
  popularMovies = [],
  selectedCategory = [],
  topRatedMovies = [],
  categories = [],
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(1, 6)} />
      {!!selectedCategory?.movies?.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      />
    </div>
  );
}
