import { cn } from '@/lib/utils';
import LogoText from './components/logo-full';
import LogoShape from './components/logo-shape';

interface LogoProps {
  className?: string;
  isNav?: boolean;
}

const Logo = ({ className = '', isNav = false }: LogoProps) => {
  const Tag = isNav ? 'a' : 'div';

  return (
    <Tag
      className={cn('flex items-center gap-x-2', className)}
      href='/'
      aria-label='Above Entertainment'
    >
      <div className='flex items-center gap-x-2'>
        <LogoShape className='h-10' />
        <LogoText className='hidden sm:block h-7' />
      </div>
      <span className='sr-only'>Above Entertainment Logo</span>
    </Tag>
  );
};

export default Logo;
