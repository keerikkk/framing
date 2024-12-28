import { EmailInput } from './EmailInput';

const EmailForm = () => {
  return (
    <article className='md:gap-15 md:py-15 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 bg-cream-light py-10 dark:bg-teal-light md:w-3/4 lg:gap-20 lg:py-20'>
      <h2 className='w-2/3 text-center font-cormorant text-4xl text-blue-dark dark:text-white lg:w-1/2 lg:text-5xl'>
        {data.title}
      </h2>
      <EmailInput />
      <p className='w-3/4 text-center font-light text-blue-dark dark:text-white lg:w-2/3'>
        * Натискаючи кнопку “<strong>Надіслати</strong>”, ви погоджуєтеся з
        нашими Умовами та підтверджуєте, що ознайомилися з нашою{' '}
        <strong>Політикою використання даних.</strong>
      </p>
    </article>
  );
};

export default EmailForm;

const data = {
  title: 'Отримайте більше інформації про інші знижки',
};
