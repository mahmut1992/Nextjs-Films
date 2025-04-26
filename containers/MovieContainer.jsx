import { FeaturedMovie } from "@/components/featuredMovie";
import React from "react";

export default function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}
