import EpisodeCard from '@/components/episode-card';
import { EPISODES_MOCK } from '@/utils/mocks/episodes';

const List = () => {
  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {EPISODES_MOCK.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default List;
