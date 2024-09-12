import Header from '@/components/UI/Header';

const BenefitsPageHeader = () => {
  return (
    <div className='flex flex-col justify-center text-start gap-8 lg:me-24 '>
      <Header title={data.title} />
      <p className='text-basic'>{data.text}</p>
    </div>
  );
};

export default BenefitsPageHeader;

const data = {
  title: 'WHY ME',
  text: 'Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.',
};
