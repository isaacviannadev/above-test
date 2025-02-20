import { useCallback } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ErrorFallback from './error-fallback';

export interface TVStaticErrorBoundaryProps {
  children: React.ReactNode;
  onReset?: () => void;
  onError?: (error: Error, info: { componentStack: string }) => void;
  fallbackRender?: (props: FallbackProps) => React.ReactNode;
}

const TVStaticErrorBoundary = ({
  children,
  onReset,
  onError,
  fallbackRender,
}: TVStaticErrorBoundaryProps) => {
  const handleReset = useCallback(() => {
    onReset?.();
  }, [onReset]);

  const handleError = useCallback(
    (error: Error) => {
      console.error('Error caught by boundary:', error);
      onError?.(error, { componentStack: '' });
    },
    [onError]
  );

  return (
    <ErrorBoundary
      FallbackComponent={fallbackRender ?? ErrorFallback}
      onReset={handleReset}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};

export default TVStaticErrorBoundary;
