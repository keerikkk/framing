import Header from '@/components/UI/Header';

const BenefitsPageHeader = () => {
  return (
    <div className='flex flex-col justify-center gap-8 text-start lg:me-24'>
      <Header title={data.title} />
      <p className='text-paragraph-dark dark:text-gray-400'>{data.text}</p>
    </div>
  );
};

export default BenefitsPageHeader;

const data = {
  title: 'WHY ME',
  text: 'Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.',
};
