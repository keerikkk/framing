import AboutUsTitle from '@/components/AboutUs/AbouUsTitle';
import ExperienceList from '@/components/AboutUs/ExperienceList';
import PhotoSlider from '@/components/AboutUs/PhotoSlider';

const AbousUsPage = () => {
  return (
    <section id='#contact' className=' bg-benefits'>
      <div className='container mx-auto flex flex-col gap-20 py-24 px-2'>
        <AboutUsTitle />
        <ExperienceList />
        <PhotoSlider />
      </div>
    </section>
  );
};

export default AbousUsPage;