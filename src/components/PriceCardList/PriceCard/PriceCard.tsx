'use client';

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
    <div
      className={`w-full max-w-xs mx-auto backdrop-blur-sm hover:cursor-pointer
      ${isSelected ? 'scale-110' : 'scale-100'} max-md:scale-100`}
      onClick={onClick}
    >
      <div
        className={`flex flex-col px-8 py-4 bg-gray-950 bg-opacity-15 max-md:bg-opacity-50 justify-between
      ${isSelected ? 'border-[.375rem] border-cyan-950 border-opacity-50 shadow-cyan-950 shadow-md' : ''}`}
      >
        <PriceCardHeading title={title} {...price} />
        <PriceCardFieldList fields={fields} />
        <Button className='bg-transparent border border-white hover:bg-white hover:text-gray-900'>
          Photo Session Schedule
        </Button>
      </div>
    </div>
  );
}
