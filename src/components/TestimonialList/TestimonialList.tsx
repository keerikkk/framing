'use client';

import Testimonial, { TestimonialProps } from './Testimonial/Testimonial';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

const TestimonialList = () => {
  return (
    <Swiper
      className='max-sm:m-0'
      slidesPerView={'auto'}
      spaceBetween={10}
      freeMode
      breakpoints={{
        1280: {
          spaceBetween: 20,
        },
      }}
    >
      {data.length > 0 ? (
        data.map((testimonial) => (
          <SwiperSlide className='max-w-sm' key={testimonial.header.author}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))
      ) : (
        <p>No testimonials available</p>
      )}
    </Swiper>
  );
};

export default TestimonialList;

const data: TestimonialProps[] = [
  {
    header: {
      img: 'https://as2.ftcdn.net/v2/jpg/05/53/97/13/1000_F_553971391_58CnJ3qSdxmrOFUp6eojyVhZ9khKq2Et.jpg',
      author: 'Verda Angel',
      platform: 'Instagram',
    },
    content:
      'I love how Framing can transform my look and make it more attractive. They are very knowledgeable and supportive. I would highly recommend them to anyone looking to improve their appearance.',
  },
  {
    header: {
      img: 'https://media.istockphoto.com/id/1309405105/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B8.jpg?s=612x612&w=0&k=20&c=9Q0Xtw9IpkJJoIZJ7u8SRtqY1GHKbEjwSlvpRggjnWU=',
      author: 'Lovia Franciska',
      platform: 'Instagram',
    },
    content:
      'I love how Framing can transform my look and make it more attractive. They are very knowledgeable and supportive. I would highly recommend them to anyone looking to improve their appearance.',
  },
  {
    header: {
      img: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-the-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716940800&semt=ais_user',
      author: 'John Doe',
      platform: 'Instagram',
    },
    content:
      'I love how Framing can transform my look and make it more attractive. They are very knowledgeable and supportive. I would highly recommend them to anyone looking to improve their appearance.',
  },
];
