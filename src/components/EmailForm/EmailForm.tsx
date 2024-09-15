import { EmailInput } from './EmailInput';

const EmailForm = () => {
  return (
    <article className='max-w-5xl w-full md:w-3/4 bg-teal-light flex flex-col gap-10 md:gap-15 lg:gap-20 py-10 md:py-15 lg:py-20 items-center mx-auto'>
      <h2 className='text-white text-center text-4xl font-cormorant w-2/3 lg:w-1/2 lg:text-5xl'>
        {data.title}
      </h2>
      <EmailInput />
      <p className='text-white font-light text-center w-3/4 lg:w-2/3'>
        * By clicking “<strong>Submit</strong>” button, you agree to our Terms
        and that you have read our <strong>Data Use Policy.</strong>
      </p>
    </article>
  );
};

export default EmailForm;

const data = {
  title: 'Get more info other discount prices',
};
