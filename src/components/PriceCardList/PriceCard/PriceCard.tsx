'use client';

import * as motion from 'motion/react-client';

import { Button } from '@/components/UI/button';
import { PriceCardItem } from '@/constants/PriceCards';
import PriceCardHeading from './PriceCardHeading';
import PriceCardFieldList from './PriceCardFieldList';

interface PriceCardProps extends PriceCardItem {
  isSelected: boolean;
  onClick?: () => void;
}

export function PriceCard({
  title,
  price,
  fields,
  isSelected,
  onClick,
}: PriceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`mx-auto w-full max-w-xs backdrop-blur-sm hover:cursor-pointer ${isSelected ? 'scale-110' : 'scale-100'} max-md:scale-100`}
      onClick={onClick}
    >
      <div
        className={`flex flex-col justify-between bg-gray-950 bg-opacity-15 px-8 py-4 max-md:bg-opacity-50 ${isSelected ? 'border-[.375rem] border-cream-light border-opacity-50 shadow-md shadow-cream-light dark:border-cyan-950 dark:shadow-cyan-950' : ''}`}
      >
        <PriceCardHeading title={title} {...price} />
        <PriceCardFieldList fields={fields} />
        <Button className='border border-blue-bright bg-transparent hover:bg-blue-light hover:text-black-bright dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900'>
          Photo Session Schedule
        </Button>
      </div>
    </motion.div>
  );
}
