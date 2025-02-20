import EpisodeDetails from '@/components/episode-details';
import EpisodeSuggestions from '@/components/episode-suggestions';
import { useParams } from 'react-router';

const Details = () => {
  const pathname = useParams();

  return (
    <div className='flex flex-col gap-24'>
      <EpisodeDetails episodeId={pathname.id ?? ''} />
      <EpisodeSuggestions refEpisodeId={pathname.id ?? ''} />
    </div>
  );
};

export default Details;
