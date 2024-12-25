import HomeSocial from '@/components/Home/HomeSocial';
import HomeHeader from '@/components/Home/HomeHeader';
import { Button } from '@/components/UI/button';
import HomeDescription from '@/components/Home/HomeDescription';

const HomePage = () => {
  return (
    <section
      id='#home'
      className='relative bg-teal-light flex flex-col min-h-screen before:absolute before:bg-black-light before:top-0 before:right-0 before:w-1/2 before:h-full before:content-[""]'
    >
      <div className='container mx-auto flex flex-col gap-20 py-48 px-2 relative flex-1'>
        <HomeHeader />
        <HomeDescription />
        <HomeSocial />
        <Button className='home-button'>Order Now</Button>
      </div>
    </section>
  );
};

export default HomePage;
