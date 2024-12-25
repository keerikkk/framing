import Header from '../UI/Header';
import Icon from '../UI/Icon';

const AboutUsTitle = () => {
  return (
    <div className='flex justify-between gap-8 md:pt-4 lg:pt-8 pb-8 sm:pb-12 md:pb-24'>
      <div className='relative'>
        <Header title={data.title} className='whitespace-pre' />
        <Icon
          name='arrow'
          className='w-[1.875rem] h-[10.625rem] absolute left-1/2 -translate-x-1/2'
        />
      </div>
      <p className='max-w-md text-left text-gray-400'>{data.text}</p>
    </div>
  );
};

export default AboutUsTitle;

const data = {
  title: 'ABOUT\nUS',
  text: 'We are a team of creative, talented, and passionate architects who have been working together for over 20 years. Our vision is to create beautiful, sustainable, and inclusive buildings that will inspire and provoke thought.',
};
