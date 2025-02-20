import EpisodeCard from '@/components/episode-card';
import { EpisodeType } from '@/types';
import { gql, useQuery } from '@apollo/client';

const GET_EPISODES = gql`
  query GetEpisodes {
    episodes {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

const List = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data.episodes.map((episode: EpisodeType) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default List;
