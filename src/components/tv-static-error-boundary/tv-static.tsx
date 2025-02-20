import { useMemo } from 'react';

interface StaticDot {
  id: number;
  left: string;
  top: string;
  duration: string;
}

interface TVStaticProps {
  dotCount?: number;
}

const TVStatic = ({ dotCount = 100 }: TVStaticProps) => {
  const staticDots: StaticDot[] = useMemo(
    () =>
      Array.from({ length: dotCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${Math.random() * 2 + 0.5}s`,
      })),
    [dotCount]
  );

  return (
    <div className='absolute inset-0 opacity-20 rounded-2xl'>
      {staticDots.map((dot) => (
        <div
          key={dot.id}
          className='absolute bg-white w-2 h-2 animate-flicker'
          style={{
            left: dot.left,
            top: dot.top,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
};

export default TVStatic;
