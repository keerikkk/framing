import Link from 'next/link';
import Icon from '../UI/Icon';

const HomeSocial = () => {
  return (
    <div className='absolute right-0 top-1/2 h-3/4 w-7 -translate-y-1/2 border-l-2 border-cream-bright dark:border-teal-bright'>
      <div className='home-social'>
        {socialData.map((icon) => (
          <Link key={icon.name} href={icon.to} target='_blank'>
            <Icon
              {...icon}
              className='text-cream-bright dark:text-teal-bright'
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeSocial;

export const socialData = [
  {
    name: 'google',
    hoverName: 'google-colored',
    to: 'mailto:framing.studio.uz@gmail.com',
  },
  {
    name: 'instagram',
    hoverName: 'instagram-colored',
    to: 'https://www.instagram.com/fraaming/',
  },
];
