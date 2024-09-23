import PocketBase from 'pocketbase';

import ExperienceList from '@/components/AboutUs/ExperienceList';
import PhotoSlider from '@/components/AboutUs/PhotoSlider';
import AboutUsTitle from '@/components/AboutUs/AbouUsTitle';

async function getPhotos() {
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.collection('pictures').getList();
  return data.items;
}

export default async function AboutUsPage() {
  const photos = await getPhotos();

  return (
    <section id='contact' className='bg-benefits'>
      <div className='container mx-auto flex flex-col gap-20 py-24 px-2'>
        <AboutUsTitle />
        <ExperienceList />
        <PhotoSlider photos={photos} />
      </div>
    </section>
  );
}
