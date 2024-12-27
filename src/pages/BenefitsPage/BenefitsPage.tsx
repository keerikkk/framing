import BenefitsPageHeader from './BenefitsHeader/BenefitsPageHeader';
import BenefitList from './BenefitList';

const BenefitsPage = () => {
  return (
    <section id='#benefits' className='bg-blue-light dark:bg-black-light'>
      <div className='container mx-auto flex flex-col gap-1 px-2 py-24 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:gap-4'>
        <BenefitsPageHeader />
        <BenefitList />
      </div>
    </section>
  );
};

export default BenefitsPage;
