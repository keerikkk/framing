import BenefitsPageHeader from './BenefitsPageHeader';
import BenefitList from './BenefitList';

const BenefitsPage = () => {
  return (
    <section id='#benefits' className='bg-benefits'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 xl:gap-4 py-24 px-2'>
        <BenefitsPageHeader />
        <BenefitList />
      </div>
    </section>
  );
};

export default BenefitsPage;
