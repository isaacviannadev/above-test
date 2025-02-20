import EpisodeCard from '@/components/episode-card';
import { EPISODES_MOCK } from '@/utils/mocks/episodes';

interface EpisodeSuggestionsProps {
  refEpisodeId: string;
}

const EpisodeSuggestions = ({ refEpisodeId }: EpisodeSuggestionsProps) => {
  const episodes = EPISODES_MOCK.filter(
    (episode) => episode.id !== +refEpisodeId
  );

  return (
    <section className='space-y-4'>
      <h2 className='text-2xl'>More to watch</h2>
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};

export default EpisodeSuggestions;
