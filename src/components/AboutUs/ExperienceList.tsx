import Experience, { ExperienceProps } from './Experience';

const ExperienceList = () => {
  return (
    <div className='flex gap-4 md:gap-16 xl:gap-24 mx-auto relative z-10 backdrop-blur-sm'>
      {data.map((experience) => (
        <Experience key={experience.title} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceList;

const data: ExperienceProps[] = [
  { title: '+10 Years', text: 'Experience' },
  { title: '+450', text: 'Customers' },
  { title: '+15K', text: 'Portfolio Photos' },
];
