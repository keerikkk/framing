import HomeSocial from '@/components/Home/HomeSocial';
import HomeHeader from '@/components/Home/HomeHeader';
import { Button } from '@/components/UI/button';
import HomeDescription from '@/components/Home/HomeDescription';
import HomeButton from '@/components/Home/HomeButton';

const HomePage = () => {
  return (
    <section
      id='#home'
      className='relative flex min-h-screen flex-col bg-cream-light before:absolute before:right-0 before:top-0 before:h-full before:w-1/2 before:bg-blue-light before:content-[""] dark:bg-teal-light dark:before:bg-black-light'
    >
      <div className='container relative mx-auto flex flex-1 flex-col gap-20 px-2 py-48'>
        <HomeHeader />
        <HomeDescription />
        <HomeSocial />
        <HomeButton />
      </div>
    </section>
  );
};

export default HomePage;
