import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  className?: string;
}

const Header = ({ title, className }: HeaderProps) => {
  return (
    <h1
      className={cn(
        'font-cormorant text-4xl sm:text-5xl lg:text-6xl text-white text-left',
        className,
      )}
    >
      {title}
    </h1>
  );
};

export default Header;
