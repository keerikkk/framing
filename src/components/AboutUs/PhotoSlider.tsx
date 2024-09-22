import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

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
        {data.map((image) => (
          <SwiperSlide
            key={image.src}
            className='max-w-36 md:max-w-48 lg:max-w-60'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='aspect-[293/358] object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default PhotoSlider;

const data = [
  {
    src: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg',
    alt: 'Image 1',
  },
  {
    src: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg',
    alt: 'Image 3',
  },
  {
    src: 'https://www.freedigitalphotos.net/images/img/homepage/339504.jpg',
    alt: 'Image 4',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg',
    alt: 'Image 5',
  },
  {
    src: 'https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg',
    alt: 'Image 6',
  },
  {
    src: 'https://photoscissors.com/images/samples/1-before.jpg',
    alt: 'Image 7',
  },
  {
    src: 'https://images.ctfassets.net/hrltx12pl8hq/12wPNuS1sirO3hOes6l7Ds/9c69a51705b4a3421d65d6403ec815b1/non_cheesy_stock_photos_cover-edit.jpg',
    alt: 'Image 8',
  },
  {
    src: 'https://cdn0.weddingwire.in/article/2542/3_2/960/jpg/112452-engagement-photos-closeup-majestic-photography.jpeg',
    alt: 'Image 9',
  },
  {
    src: 'https://people.com/thmb/W9hu212ZarEmX3eMRWsS1XrjjPw=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/michael-caine69-987b236327764608ad200351f28e0881.jpg',
    alt: 'Image 10',
  },
];
