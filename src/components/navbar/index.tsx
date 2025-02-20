import Container from '../layout';
import Logo from '../logo';
import NewEpisodeButton from '../new-episode-button';
import SearchBar from '../search-bar';

const Navbar = () => {
  return (
    <header className='border-b h-16'>
      <Container className='flex justify-between items-center gap-4 lg:gap-8 h-full'>
        <Logo isNav />
        <SearchBar />
        <NewEpisodeButton />
      </Container>
    </header>
  );
};

export default Navbar;
