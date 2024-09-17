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
    <div className='sm:items-stretch hidden sm:contents'>
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
    <div className='w-full mx-auto px-4 pt-8 block sm:hidden'>
      <div className='flex justify-around mb-4'>
        {data.map((benefit) => {
          return (
            <button
              key={benefit.title}
              onClick={() => handleBenefitClick(benefit)}
              className={`flex flex-col items-center p-1  transition-colors bg-transparent ${
                selectedBenefit === benefit
                  ? 'border-b border-teal-500 shadow-md shadow-teal-bright'
                  : ''
              }`}
              aria-expanded={selectedBenefit === benefit}
              aria-controls={`benefit-${benefit.title}`}
            >
              <Icon
                name={benefit.icon}
                className={`${selectedBenefit === benefit && 'text-white'}`}
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
    title: 'Agency',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'idea',
    title: 'Choose idea',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'star',
    title: 'Satisfaction',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'quality',
    title: 'Quality',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'creativity',
    title: 'Creativity',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
];
