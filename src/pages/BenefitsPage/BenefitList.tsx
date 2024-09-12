import Benefit from '@/components/Benefit';

const BenefitList = () => {
  return (
    <div className='contents max-sm:flex max-sm:flex-col max-sm:items-center sm:items-stretch'>
      {data.map((benefit) => (
        <Benefit key={benefit.title} {...benefit} />
      ))}
    </div>
  );
};

export default BenefitList;

const data = [
  {
    icon: 'agency',
    title: 'Agency',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'idea',
    title: 'Choose idea',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'star',
    title: 'Satisfaction',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'quality',
    title: 'Quality',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
  {
    icon: 'creativity',
    title: 'Creativity',
    text: 'Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et.',
  },
];
