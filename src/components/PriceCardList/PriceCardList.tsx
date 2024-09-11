import { useState } from 'react';
import { priceCards, priceCardsTitles } from '@/constants/PriceCards';
import { PriceCard } from './PriceCard/PriceCard';

export const PriceCardList = () => {
  const [selectedCard, setSelectedCard] = useState<string>('PREMIUM');

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 mb-8'>
        {priceCards.map((priceCard) => (
          <PriceCard
            key={priceCard.title}
            {...priceCard}
            isSelected={selectedCard === priceCard.title}
            onClick={() => setSelectedCard(priceCard.title)}
          />
        ))}
      </div>
      <div className='flex justify-center mt-12 space-x-2 max-md:hidden'>
        {priceCardsTitles.map((title) => (
          <button
            key={title}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              selectedCard === title ? 'bg-cyan-900' : 'bg-gray-400'
            }`}
            onClick={() => setSelectedCard(title)}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceCardList;
