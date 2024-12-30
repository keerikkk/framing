'use client';

import Benefit, { BenefitProps } from '@/components/Benefit';
import Icon from '@/components/UI/Icon';
import { useState } from 'react';

const BenefitList = () => {
  return (
    <>
      <BenefitListDesktop />
      <BenefitListMobile />
    </>
  );
};

export default BenefitList;

const BenefitListDesktop = () => {
  return (
    <div className='hidden sm:contents sm:items-stretch'>
      {data.map((benefit) => (
        <Benefit key={benefit.title} {...benefit} />
      ))}
    </div>
  );
};

const BenefitListMobile = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(data[0]);

  const handleBenefitClick = (benefit: BenefitProps) => {
    setSelectedBenefit(benefit);
  };

  return (
    <div className='mx-auto block w-full px-4 pt-8 sm:hidden'>
      <div className='mb-4 flex justify-around'>
        {data.map((benefit) => {
          return (
            <button
              key={benefit.title}
              onClick={() => handleBenefitClick(benefit)}
              className={`flex flex-col items-center bg-transparent p-1 transition-colors ${
                selectedBenefit === benefit
                  ? 'shadow:cream-bright border-b border-cream-dark shadow-md shadow-cream-bright dark:border-teal-500 dark:shadow-teal-bright'
                  : ''
              }`}
              aria-expanded={selectedBenefit === benefit}
              aria-controls={`benefit-${benefit.title}`}
            >
              <Icon
                name={benefit.icon}
                className={`${selectedBenefit === benefit && 'text-blue-dark dark:text-white'}`}
              />
            </button>
          );
        })}
      </div>
      {selectedBenefit && <Benefit {...selectedBenefit} />}
    </div>
  );
};

const data: BenefitProps[] = [
  {
    icon: 'agency',
    title: 'Агенція',
    text: 'Ваш комфорт - наш пріоритет. Жодних обмежень. Ви отримаєте студію та обладнання в одному пакеті.',
  },
  {
    icon: 'idea',
    title: 'Вибір ідеї',
    text: 'Ми допомагаємо вам вибрати ідею для зйомки, яка буде найбільш ефективною для досягнення ваших цілей.',
  },
  {
    icon: 'star',
    title: 'Задоволення',
    text: 'Ми гарантуємо, що ви будете задоволені результатом нашої роботи.',
  },
  {
    icon: 'quality',
    title: 'Якість',
    text: 'Ми використовуємо лише найкраще обладнання та техніку, щоб забезпечити високу якість наших фотографій.',
  },
  {
    icon: 'creativity',
    title: 'Креативність',
    text: 'Ми постійно у пошуках нових ідей та способів для створення унікальних та оригінальних фотографій.',
  },
];
