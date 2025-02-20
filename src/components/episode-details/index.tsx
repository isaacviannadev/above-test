import { EPISODES_MOCK } from '@/utils/mocks/episodes';
import { NavLink } from 'react-router';
import AlertDelete from '../alert-delete';
import { Button } from '../ui/button';

interface EpisodeDetailsProps {
  episodeId: string;
}

const EpisodeDetails = ({ episodeId }: EpisodeDetailsProps) => {
  const episode = EPISODES_MOCK.find((episode) => episode.id === +episodeId);

  return (
    <div className='group lg:gap-8 lg:grid lg:grid-cols-3'>
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
          <div className='bg-zinc-200 mb-4 rounded w-16 h-4' />
          <p className='text-zinc-600 line-clamp-[11]'>
            {episode?.description}
          </p>
        </div>

        <div className='flex flex-col justify-end gap-2 min-w-3xs h-full'>
          <Button variant='secondary' className='w-full'>
            <NavLink to={`/management/${episodeId}`} className='w-full'>
              Edit
            </NavLink>
          </Button>
          <AlertDelete onDelete={() => console.log('Delete')} />
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
