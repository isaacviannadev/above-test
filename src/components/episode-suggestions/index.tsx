import EpisodeCard from '@/components/episode-card';
import { useEpisodes } from '@/hooks/use-episodes';
import { useEffect } from 'react';

interface EpisodeSuggestionsProps {
  refEpisodeId: string;
}

const EpisodeSuggestions = ({ refEpisodeId }: EpisodeSuggestionsProps) => {
  const { episodes, refetch } = useEpisodes();

  const episodesSuggested = episodes.filter(
    (episode) => episode.id !== +refEpisodeId
  );

  useEffect(() => {
    refetch();
  }, []);

  if (episodesSuggested.length <= 0) return;

  return (
    <section className='space-y-4'>
      <h2 className='text-2xl'>More to watch</h2>
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {episodesSuggested.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};

export default EpisodeSuggestions;
