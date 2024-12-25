import TestimonialList from '@/components/TestimonialList/TestimonialList';
import Header from '@/components/UI/Header';

const data = {
  title: 'TESTIMONIALS',
};

const TestimonialsPage = () => {
  return (
    <section className='bg-cream-dark dark:bg-teal-dark'>
      <div className='container mx-auto flex flex-col gap-20 px-2 py-24'>
        <Header title={data.title} />
        <TestimonialList />
      </div>
    </section>
  );
};

export default TestimonialsPage;
