import { EpisodeType } from '@/types';
import { NavLink } from 'react-router';
import { Badge } from '../ui/badge';

interface EpisodeCardProps {
  episode: EpisodeType;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  console.log('EpisodeCard', episode);

  const releaseDate = new Date(episode.releaseDate).toLocaleString('en', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className='group relative rounded-xl aspect-square overflow-hidden'>
      <NavLink
        to={`/episode/${episode.id}`}
        className='z-10 absolute inset-0'
      />
      <img
        src='https://placehold.co/600x400'
        alt={`Episode ${episode.id}`}
        className='size-full object-cover group-hover:scale-110 transition-transform duration-300 transform'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900' />
      <Badge className='top-4 left-4 absolute bg-slate-700 text-white text-xs text-balance'>
        <span>{episode.series} </span>
        <span> - Ep. {episode.episodeNumber}</span>
      </Badge>
      <Badge
        variant={'secondary'}
        className='top-4 right-4 absolute text-slate-500 text-xs text-balance'
      >
        <span>{releaseDate}</span>
      </Badge>

      <div className='bottom-12 left-4 absolute text-white text-2xl text-balance'>
        <span>{episode.title}</span>
      </div>
      <div className='bottom-4 left-4 absolute text-white/70 text-xs text-balance leading-3'>
        <span className='line-clamp-2'>{episode.description}</span>
      </div>
    </div>
  );
};

export default EpisodeCard;
