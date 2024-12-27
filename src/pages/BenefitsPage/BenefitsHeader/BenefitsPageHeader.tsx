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
  title: 'WHY ME',
  text: 'Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.',
};
