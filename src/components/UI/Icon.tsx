import { cn } from '@/lib/utils';
import sprite from '..//../../public/sprite.svg';

interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  return (
    <svg className={cn('text-slate-400 h-7 w-7', className)}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
