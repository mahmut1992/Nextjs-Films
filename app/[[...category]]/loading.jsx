import React from "react";

import { FeatureMovieLoading } from "../../components/featuredMovie";
import { CategoriesLoading } from "../../components/caterories";
import { MoviesSectionLoading } from "../../components/moviesSection";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;
