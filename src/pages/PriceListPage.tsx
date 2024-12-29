import { PriceCardList } from '@/components/PriceCardList/PriceCardList';
import Header from '@/components/UI/Header';

const data = {
  title: 'ЦІНИ',
};

const PriceListPage = () => {
  return (
    <section
      id='#pricelist'
      className='relative bg-pricelist bg-cover bg-center before:absolute before:inset-0 before:bg-blue-bright before:opacity-45 dark:before:opacity-0'
    >
      <div className='container mx-auto flex flex-col gap-20 px-2 py-24'>
        <Header title={data.title} />
        <PriceCardList />
      </div>
    </section>
  );
};

export default PriceListPage;
