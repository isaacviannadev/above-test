import { GET_EPISODE_BY_ID } from '@/graphql/queries';
import { useEpisodeMutations } from '@/hooks/use-episodes-mutations';
import { EpisodeType } from '@/types';
import { useQuery } from '@apollo/client';
import { ArrowLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import AlertDelete from '../alert-delete';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { LoadingFallback } from './loading-fallback';

interface EpisodeDetailsProps {
  episodeId: string;
}

const EpisodeDetails = ({ episodeId }: EpisodeDetailsProps) => {
  const router = useNavigate();

  const { data, loading, error, refetch } = useQuery<{
    getEpisodeById: EpisodeType;
  }>(GET_EPISODE_BY_ID, {
    variables: { episodeId },
  });

  const { deleteEpisode } = useEpisodeMutations();

  const episode = data?.getEpisodeById ?? null;

  const releaseDate = new Date(episode?.releaseDate ?? '').toLocaleString(
    'en',
    {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }
  );

  const handleDelete = async () => {
    try {
      await deleteEpisode(episode?.id ?? '');
      refetch();
      router('/');
    } catch (error) {
      console.error('Failed to delete episode:', error);
    }
  };

  if (error) {
    return (
      <div className='bg-red-50 p-4 rounded-lg text-red-600'>
        Error loading episode: {error.message}
      </div>
    );
  }

  if (loading) {
    return <LoadingFallback />;
  }

  return (
    <div className='group relative lg:gap-8 lg:grid lg:grid-cols-3'>
      <NavLink
        to='/'
        className='top-0 z-20 absolute bg-transparent hover:bg-white/70 hover:shadow-md p-2 rounded-full text-zinc-600 hover:text-sky-700'
        aria-label='Back'
      >
        <ArrowLeft className='size-6 hover:scale-110' />
      </NavLink>
      <div className='relative lg:col-span-2 mb-6 lg:mb-0 rounded-lg aspect-[3/4] sm:aspect-[4/3] lg:aspect-[16/9] overflow-hidden'>
        <div className='z-10 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 rounded-lg' />
        <img
          src='https://placehold.co/600x400'
          alt={`Episode ${episode?.id}`}
          className='size-full object-cover group-hover:scale-110 transition-transform duration-300 transform'
        />
      </div>

      <div className='flex sm:flex-row flex-col lg:flex-col gap-6'>
        <div>
          <h1 className='mb-2 font-semibold text-2xl text-balance'>
            {episode?.title}
          </h1>
          <div className='flex gap-2 mb-4'>
            <Badge className='bg-slate-700 text-white text-xs text-balance'>
              <span>{episode?.series} </span>
              <span> - Ep. {episode?.episodeNumber}</span>
            </Badge>
            <Badge className='bg-zinc-200 rounded text-slate-700'>
              {releaseDate}
            </Badge>
          </div>
          <p className='text-zinc-600 line-clamp-[9]'>{episode?.description}</p>
        </div>

        <div className='flex flex-col justify-end gap-2 min-w-3xs h-full'>
          <Button variant='secondary' className='w-full'>
            <NavLink to={`/management/${episodeId}`} className='w-full'>
              Edit
            </NavLink>
          </Button>
          <AlertDelete onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
