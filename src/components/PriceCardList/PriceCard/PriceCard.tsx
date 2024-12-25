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
      className={`mx-auto w-full max-w-xs backdrop-blur-sm hover:cursor-pointer ${isSelected ? 'scale-110' : 'scale-100'} max-md:scale-100`}
      onClick={onClick}
    >
      <div
        className={`flex flex-col justify-between bg-gray-950 bg-opacity-15 px-8 py-4 max-md:bg-opacity-50 ${isSelected ? 'border-[.375rem] border-cyan-950 border-opacity-50 shadow-md shadow-cyan-950' : ''}`}
      >
        <PriceCardHeading title={title} {...price} />
        <PriceCardFieldList fields={fields} />
        <Button className='border border-white bg-transparent hover:bg-white hover:text-gray-900'>
          Photo Session Schedule
        </Button>
      </div>
    </div>
  );
}
