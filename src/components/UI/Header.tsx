import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  className?: string;
}

const Header = ({ title, className }: HeaderProps) => {
  return (
    <h1
      className={cn(
        'relative z-10 text-left font-cormorant text-4xl text-blue-dark dark:text-white sm:text-5xl lg:text-6xl',
        className,
      )}
    >
      {title}
    </h1>
  );
};

export default Header;
