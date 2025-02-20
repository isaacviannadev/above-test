import App from '@/App';
import Details from '@/app/pages/episode-details-page';
import List from '@/app/pages/episode-list-page';
import ManagementPage from '@/app/pages/management-page';
import { Route, Routes } from 'react-router';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<List />} />
        <Route path='episode/:id' element={<Details />} />
        <Route path='management/:id?' element={<ManagementPage />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
