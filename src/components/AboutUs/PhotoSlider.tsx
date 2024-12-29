'use client';

import Image from 'next/image';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '@/assets/photostudio/photostudio_1.png';
import img2 from '@/assets/photostudio/photostudio_2.png';
import img3 from '@/assets/photostudio/photostudio_3.png';
import img4 from '@/assets/photostudio/photostudio_4.png';
import img5 from '@/assets/photostudio/photostudio_5.png';
import img6 from '@/assets/photostudio/photostudio_6.png';
import img7 from '@/assets/photostudio/photostudio_7.png';

const photos = [img1, img2, img3, img4, img5, img6, img7];

const PhotoSlider = () => {
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
