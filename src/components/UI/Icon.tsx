import { cn } from '@/lib/utils';

interface IconProps {
  name: string;
  hoverName?: string;
  className?: string;
}

const Icon = ({ name, hoverName, className }: IconProps) => {
  return (
    <div className={`inline-block ${hoverName ? 'relative group' : ''}`}>
      <svg
        className={cn(
          `text-basic h-7 w-7 block transition-opacity duration-300 ${hoverName ? 'opacity-100 group-hover:opacity-0' : ''}`,
          className,
        )}
      >
        <use href={`/sprite.svg#${name}`} />
      </svg>
      {hoverName && (
        <svg
          className={cn(
            'text-basic h-7 w-7 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100',
            className,
          )}
        >
          <use href={`/sprite.svg#${hoverName}`} />
        </svg>
      )}
    </div>
  );
};

export default Icon;
