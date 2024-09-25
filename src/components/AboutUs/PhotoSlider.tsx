import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PocketBase, { RecordModel } from 'pocketbase';

import 'swiper/css';

async function getPhotos() {
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.collection('pictures').getList();
  return data.items;
}

const PhotoSlider = () => {
  const [photos, setPhotos] = useState<RecordModel[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      const photosData = await getPhotos();
      setPhotos(photosData);
    }

    fetchPhotos();
  });

  return (
    <article className='pt-4 md:pt-14 lg:pt-20'>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView='auto'
        autoplay={{
          delay: 1,
        }}
        speed={4000}
        spaceBetween={5}
        breakpoints={{
          720: {
            spaceBetween: 10,
          },
          1024: {
            spaceBetween: 15,
          },
          1280: {
            spaceBetween: 20,
          },
        }}
      >
        {photos &&
          photos.map((photo) => (
            <SwiperSlide
              key={photo.id}
              className='max-w-36 md:max-w-48 lg:max-w-60'
            >
              <img
                src={photo.image}
                alt='Slider Image'
                className='aspect-[293/358] object-cover'
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </article>
  );
};

export default PhotoSlider;
