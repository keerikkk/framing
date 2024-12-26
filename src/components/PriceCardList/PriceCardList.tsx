import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { priceCards, priceCardsTitles } from '@/constants/PriceCards';
import { PriceCard } from './PriceCard/PriceCard';
import './priceCardList.css';

export const PriceCardList = () => {
  return (
    <>
      <PriceCardListDesktop />
      <PriceCardListMobile />
    </>
  );
};

const PriceCardListDesktop = () => {
  const [selectedCard, setSelectedCard] = useState<string>('PREMIUM');

  return (
    <div className='hidden md:block'>
      <div className='mb-8 flex items-stretch justify-center gap-6'>
        {priceCards.map((priceCard) => (
          <PriceCard
            key={priceCard.title}
            {...priceCard}
            isSelected={selectedCard === priceCard.title}
            onClick={() => setSelectedCard(priceCard.title)}
          />
        ))}
      </div>
      <div className='mt-12 flex justify-center space-x-2'>
        {priceCardsTitles.map((title) => (
          <button
            key={title}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              selectedCard === title ? 'bg-cyan-900' : 'bg-gray-400'
            }`}
            onClick={() => setSelectedCard(title)}
          />
        ))}
      </div>
    </div>
  );
};

const PriceCardListMobile = () => {
  return (
    <div className='md:hidden'>
      <Swiper pagination={true} modules={[Pagination]}>
        {priceCards.map((priceCard) => (
          <SwiperSlide key={priceCard.title}>
            <PriceCard {...priceCard} isSelected />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
