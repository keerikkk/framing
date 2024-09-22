import Link from 'next/link';
import { socialData } from './Home/HomeSocial';
import Icon from './UI/Icon';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <div className='container mx-auto flex items-center justify-between px-4 md:px-24 lg:px-32 pt-6'>
        <Link
          href='/'
          className='font-bold text-2xl text-gray-300 tracking-widest'
        >
          {data.title}
        </Link>

        <div className='flex gap-6 md:gap-12'>
          {socialData.map((icon) => (
            <Icon {...icon} className='text-white' />
          ))}
        </div>
      </div>
      <p className='font-medium text-white absolute bottom-[2.5%] left-1/2 -translate-x-1/2'>
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
