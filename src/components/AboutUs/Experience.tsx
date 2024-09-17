export interface ExperienceProps {
  title: string;
  text: string;
}

const Experience = ({ title, text }: ExperienceProps) => {
  return (
    <article className='text-white text-right flex flex-col gap-2 md:gap-5 border-r border-white py-2 md:py-4 pe-3 md:pe-8'>
      <h3 className='font-cormorant  text-3xl md:text-5xl'>{title}</h3>
      <p className='text-sm md:text-xl'>{text}</p>
    </article>
  );
};

export default Experience;
