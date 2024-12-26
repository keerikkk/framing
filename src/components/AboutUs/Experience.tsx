export interface ExperienceProps {
  title: string;
  text: string;
}

const Experience = ({ title, text }: ExperienceProps) => {
  return (
    <article className='flex flex-col gap-2 border-r border-blue-dark py-2 pe-3 text-right text-blue-dark dark:border-white dark:text-white md:gap-5 md:py-4 md:pe-8'>
      <h3 className='font-cormorant text-3xl md:text-5xl'>{title}</h3>
      <p className='text-sm md:text-xl'>{text}</p>
    </article>
  );
};

export default Experience;
