import PriceCardList from '@/components/PriceCardList/PriceCardList';
import Header from '@/components/UI/Header';

const data = {
  title: 'PRICELIST',
};

const PriceListPage = () => {
  return (
    <section id='#pricelist' className='bg-pricelist bg-cover bg-center'>
      <div className='container mx-auto flex flex-col gap-20 py-24'>
        <Header title={data.title} />
        <PriceCardList />
      </div>
    </section>
  );
};

export default PriceListPage;
