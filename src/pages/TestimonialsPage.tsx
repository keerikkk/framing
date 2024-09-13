import TestimonialList from '@/components/TestimonialList/TestimonialList';
import Header from '@/components/UI/Header';

const data = {
  title: 'TESTIMONIALS',
};

const TestimonialsPage = () => {
  return (
    <section className='bg-teal-dark'>
      <div className='container mx-auto flex flex-col gap-20 py-24 px-2'>
        <Header title={data.title} />
        <TestimonialList />
      </div>
    </section>
  );
};

export default TestimonialsPage;