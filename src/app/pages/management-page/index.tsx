import Container from '@/components/layout';
import { Outlet } from 'react-router';

const ManagementPage = () => {
  return (
    <Container>
      <h1>Management page</h1>
      <Outlet />
    </Container>
  );
};

export default ManagementPage;
