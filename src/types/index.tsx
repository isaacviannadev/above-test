export type EpisodeType = {
  id: string;
  series: string;
  title: string;
  description: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
};

export type EpisodeInput = EpisodeType;
export type UpdateEpisodeInput = EpisodeType;
