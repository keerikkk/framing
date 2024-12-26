import Experience, { ExperienceProps } from './Experience';

const ExperienceList = () => {
  return (
    <div className='relative z-10 mx-auto flex gap-4 backdrop-blur-sm md:gap-16 xl:gap-24'>
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
