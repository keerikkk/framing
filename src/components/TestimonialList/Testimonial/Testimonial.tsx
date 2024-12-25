import TestimonialHeader, { TestimonialHeaderProps } from './TestimonialHeader';

export interface TestimonialProps {
  header: TestimonialHeaderProps;
  content: string;
}

const Testimonial = ({ header, content }: TestimonialProps) => {
  return (
    <article className='max-w-sm bg-teal-light'>
      <div className='px-8 py-6 text-white'>
        <TestimonialHeader {...header} />
        <hr className='my-6 opacity-40' />
        <p className='text-left font-light'>{content}</p>
      </div>
    </article>
  );
};

export default Testimonial;
