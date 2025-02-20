import { Clapperboard } from 'lucide-react';
import { NavLink } from 'react-router';

const NewEpisodeButton = () => {
  return (
    <NavLink
      to='/management'
      className='right-2 bottom-4 z-50 fixed sm:relative sm:inset-0 flex justify-center items-center gap-2 bg-gradient-to-br from-cyan-700 hover:from-cyan-500 to-slate-800 hover:to-slate-600 shadow-sm sm:shadow-none px-3 py-2 rounded-full size-16 sm:size-auto text-white transition duration-200'
    >
      <Clapperboard className='size-6 sm:size-4' />
      <span className='hidden sm:block text-sm'>New</span>
    </NavLink>
  );
};

export default NewEpisodeButton;
