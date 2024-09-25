import Icon from '../UI/Icon';

const HomeSocial = () => {
  return (
    <div className='absolute border-l-2 border-teal-bright top-1/2 -translate-y-1/2 right-0 h-3/4 w-7'>
      <div className='home-social'>
        {socialData.map((icon) => (
          <Icon key={icon.name} {...icon} className='text-teal-bright' />
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
  },
  {
    name: 'instagram',
    hoverName: 'instagram-colored',
  },
];
