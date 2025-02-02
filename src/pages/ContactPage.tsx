import EmailForm from '@/components/EmailForm/EmailForm';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <section
      id='#contact'
      className='relative bg-blue-light before:absolute before:bottom-0 before:left-0 before:h-1/3 before:w-full before:bg-cream-dark before:content-[""] dark:bg-black-light dark:before:bg-teal-dark'
    >
      <div className='container relative mx-auto flex flex-col gap-20 px-2 py-24'>
        <EmailForm />
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
