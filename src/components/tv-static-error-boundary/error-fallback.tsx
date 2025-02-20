import { FallbackProps } from 'react-error-boundary';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import TVStatic from './tv-static';

interface CustomError extends Error {
  statusCode?: number;
  apiMessage?: string;
}

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const errorMessage = (error as CustomError).apiMessage || error.message;

  return (
    <div className='relative bg-gray-500 rounded-4xl w-full h-96 overflow-hidden'>
      <TVStatic />

      <div className='absolute inset-0 flex justify-center items-center'>
        <Alert className='bg-black/80 border-red-500 max-w-lg'>
          <AlertTitle className='text-red-500'>
            Technical Difficulties
          </AlertTitle>
          <AlertDescription className='mt-2 text-gray-300'>
            {errorMessage ||
              "We're experiencing some interference with our signal. Please try refreshing the page or contact support if the issue persists."}
          </AlertDescription>
          <div className='flex gap-4 mt-4'>
            <Button variant='destructive' onClick={resetErrorBoundary}>
              Try Again
            </Button>
            <Button variant='outline' onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default ErrorFallback;
