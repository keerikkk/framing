import { EmailInput } from './EmailInput';

const EmailForm = () => {
  return (
    <article className='md:gap-15 md:py-15 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 bg-cream-light py-10 dark:bg-teal-light md:w-3/4 lg:gap-20 lg:py-20'>
      <h2 className='w-2/3 text-center font-cormorant text-4xl text-blue-dark dark:text-white lg:w-1/2 lg:text-5xl'>
        {data.title}
      </h2>
      <EmailInput />
      <p className='w-3/4 text-center font-light text-blue-dark dark:text-white lg:w-2/3'>
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
