import Link from 'next/link';
import { socialData } from './Home/HomeSocial';
import Icon from './UI/Icon';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <div className='container mx-auto flex items-center justify-between px-4 pt-6 md:px-24 lg:px-32'>
        <Link
          href='/'
          className='text-2xl font-bold tracking-widest text-paragraph-light dark:text-gray-300'
        >
          {data.title}
        </Link>

        <div className='flex gap-6 md:gap-12'>
          {socialData.map((icon) => (
            <Icon
              key={icon.name}
              {...icon}
              className='text-blue-dark dark:text-white'
            />
          ))}
        </div>
      </div>
      <p className='absolute bottom-[2.5%] left-1/2 -translate-x-1/2 font-medium text-blue-dark dark:text-white'>
        {data.copyright}
      </p>
    </footer>
  );
};

export default Footer;

const data = {
  title: 'FRAMING',
  copyright: '\u00A9 Copyright 2024 I Framing',
};
