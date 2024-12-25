import BenefitsPageHeader from './BenefitsPageHeader';
import BenefitList from './BenefitList';

const BenefitsPage = () => {
  return (
    <section id='#benefits' className='bg-black-light'>
      <div className='container mx-auto flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-1 xl:gap-4 py-24 px-2 '>
        <BenefitsPageHeader />
        <BenefitList />
      </div>
    </section>
  );
};

export default BenefitsPage;
