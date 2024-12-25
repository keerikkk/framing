import ExperienceList from '@/components/AboutUs/ExperienceList';
import PhotoSlider from '@/components/AboutUs/PhotoSlider';
import AboutUsTitle from '@/components/AboutUs/AbouUsTitle';

export default function AboutUsPage() {
  return (
    <section id='#about-us' className='bg-black-light'>
      <div className='container mx-auto flex flex-col gap-20 py-24 px-2'>
        <AboutUsTitle />
        <ExperienceList />
        <PhotoSlider />
      </div>
    </section>
  );
}
