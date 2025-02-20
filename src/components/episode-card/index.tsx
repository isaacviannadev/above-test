import { EpisodeType } from '@/types';
import { NavLink } from 'react-router';

interface EpisodeCardProps {
  episode: EpisodeType;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
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
      <div className='bottom-4 left-4 absolute text-white text-balance'>
        {episode.title}
      </div>
    </div>
  );
};

export default EpisodeCard;
