import Experience, { ExperienceProps } from './Experience';

const ExperienceList = () => {
  return (
    <div className='relative z-10 mx-auto flex gap-4 backdrop-blur-sm md:gap-16 xl:gap-24'>
      {data.map((experience) => (
        <Experience key={experience.text} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceList;

const data: ExperienceProps[] = [
  {
    title: {
      value: 100,
      text: '',
    },
    text: 'Успiшних\nпроектiв',
  },
  {
    title: {
      value: 450,
      text: '',
    },
    text: 'Клієнтів',
  },
  {
    title: {
      value: 15,
      text: 'K',
    },
    text: 'Фотографій',
  },
];
