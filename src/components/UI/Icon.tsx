import { cn } from '@/lib/utils';

interface IconProps {
  name: string;
  hoverName?: string;
  className?: string;
}

const Icon = ({ name, hoverName, className }: IconProps) => {
  return (
    <div className={`inline-block ${hoverName ? 'group relative' : ''}`}>
      <svg
        className={cn(
          `block h-7 w-7 text-paragraph-dark transition-opacity duration-300 dark:text-gray-400 ${hoverName ? 'opacity-100 group-hover:opacity-0' : ''}`,
          className,
        )}
      >
        <use href={`/sprite.svg#${name}`} />
      </svg>
      {hoverName && (
        <svg
          className={cn(
            'absolute left-0 top-0 h-7 w-7 text-paragraph-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-400',
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
