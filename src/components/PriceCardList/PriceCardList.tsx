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
      <div className='flex justify-center items-stretch gap-6 mb-8'>
        {priceCards.map((priceCard) => (
          <PriceCard
            key={priceCard.title}
            {...priceCard}
            isSelected={selectedCard === priceCard.title}
            onClick={() => setSelectedCard(priceCard.title)}
          />
        ))}
      </div>
      <div className='flex justify-center mt-12 space-x-2'>
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
