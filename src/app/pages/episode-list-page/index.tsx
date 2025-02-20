import EpisodeCard from '@/components/episode-card';
import { useEpisodes } from '@/hooks/use-episodes';
import { EpisodeType } from '@/types';
import { useSearchParams } from 'react-router';
import { useDebounce } from 'use-debounce';

const List = () => {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get('searchTerm') ?? '';

  const [debouncedSearch] = useDebounce(searchTerm, 300);
  const { episodes, isLoading, error } = useEpisodes({
    searchTerm: debouncedSearch,
  });

  if (error) {
    return <div className='text-red-600'>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {episodes.map((episode: EpisodeType) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default List;
