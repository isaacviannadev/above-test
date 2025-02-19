import { Button } from '@/components/ui/button';
import { Clapperboard } from 'lucide-react';
import Container from '../layout';
import Logo from '../logo';
import SearchBar from '../search-bar';

interface NavbarProps {
  onNewEpisode?: () => void;
}

const Navbar = ({ onNewEpisode }: NavbarProps) => {
  return (
    <header className='border-b h-16'>
      <Container className='h-full'>
        <div className='flex justify-between items-center gap-4 lg:gap-8 h-full'>
          <Logo isNav />
          <SearchBar />
          <Button onClick={onNewEpisode} size='sm'>
            <Clapperboard className='mr-1 w-4 h-4' />
            New
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
