import { FC } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface PhotoSliderProps {
  photos: any[];
}

const PhotoSlider: FC<PhotoSliderProps> = ({ photos }) => {
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
        {photos.map((photo) => (
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
