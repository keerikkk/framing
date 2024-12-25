import EmailForm from '@/components/EmailForm/EmailForm';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <section
      id='#contact'
      className='relative bg-black-light before:absolute before:bottom-0 before:left-0 before:h-1/3 before:w-full before:bg-teal-dark before:content-[""]'
    >
      <div className='container relative mx-auto flex flex-col gap-20 px-2 py-24'>
        <EmailForm />
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
