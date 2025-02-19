import Container from '@/components/layout';
import Navbar from '@/components/navbar';
import { Outlet } from 'react-router';

export const Home = () => {
  const handleNewEpisode = () => {
    console.log('New episode clicked');
  };

  return (
    <div className='bg-background min-h-screen'>
      <Navbar onNewEpisode={handleNewEpisode} />
      <main className='py-6'>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
