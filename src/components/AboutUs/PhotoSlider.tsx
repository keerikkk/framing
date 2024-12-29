'use client';

import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const PhotoSlider = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const photosData = [];
        for (let i = 1; i <= 7; i++) {
          const image = await import(
            `../../../public/assets/photostudio/photostudio_${i}.png`
          );
          photosData.push(image.default);
        }
        setPhotos(photosData);
      } catch (error) {
        console.error('Error loading images:', error);
      }
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
          photos.map((photo, index) => (
            <SwiperSlide
              key={index}
              className='max-w-36 md:max-w-48 lg:max-w-60'
            >
              <Image
                src={photo}
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
