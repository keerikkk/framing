import Header from '@/components/UI/Header';
import HeaderText from './BenefitsHeaderText';

const BenefitsPageHeader = () => {
  return (
    <div className='flex flex-col justify-center gap-8 text-start lg:me-24'>
      <Header title={data.title} />
      <HeaderText text={data.text} />
    </div>
  );
};

export default BenefitsPageHeader;

const data = {
  title: 'ЧОМУ МИ',
  text: 'Сучасний інтер’єр із панорамними вікнами та високими стелями, які адаптуються під будь-яку концепцію зйомки.',
};
