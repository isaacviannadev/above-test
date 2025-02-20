import Container from '@/components/layout';
import Navbar from '@/components/navbar';
import { Outlet } from 'react-router';

export const Home = () => {
  return (
    <div className='relative flex flex-col bg-background min-h-screen'>
      <Navbar />
      <main className='flex-1 py-6'>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
