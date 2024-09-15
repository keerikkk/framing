import EmailForm from '@/components/EmailForm/EmailForm';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <section
      id='#contact'
      className='relative bg-benefits before:absolute before:bg-teal-dark before:bottom-0 before:left-0 before:w-full before:h-1/3 before:content-[""]'
    >
      <div className='container mx-auto flex flex-col gap-20 py-24 px-2 relative'>
        <EmailForm />
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
