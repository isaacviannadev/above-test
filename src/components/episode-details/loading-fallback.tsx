import { Skeleton } from '../ui/skeleton';

export const LoadingFallback = () => {
  return (
    <div className='flex flex-row gap-6 w-full h-[400px]'>
      <div className='flex flex-col gap-4 w-2/3'>
        <Skeleton className='bg-gray-200 rounded w-full h-full' />
      </div>

      <div className='flex flex-col gap-4 w-1/3'>
        <Skeleton className='bg-gray-200 rounded w-40 h-8' />
        <div className='flex gap-2'>
          <Skeleton className='bg-gray-200 rounded w-20 h-4' />
          <Skeleton className='bg-gray-200 rounded w-20 h-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <Skeleton className='bg-gray-200 rounded w-full h-3' />
          <Skeleton className='bg-gray-200 rounded w-full h-3' />
          <Skeleton className='bg-gray-200 rounded w-full h-3' />
        </div>
      </div>
    </div>
  );
};
