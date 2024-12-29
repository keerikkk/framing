import ExperienceList from '@/components/AboutUs/ExperienceList';
import PhotoSlider from '@/components/AboutUs/PhotoSlider';
import AboutUsTitle from '@/components/AboutUs/AboutUsTitle/AbouUsTitle';

export default function AboutUsPage() {
  return (
    <section id='#about-us' className='bg-blue-light dark:bg-black-light'>
      <div className='container mx-auto flex flex-col gap-20 px-2 py-24'>
        <AboutUsTitle />
        <ExperienceList />
        <PhotoSlider />
      </div>
    </section>
  );
}
