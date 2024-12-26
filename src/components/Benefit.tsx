import Icon from './UI/Icon';

export interface BenefitProps {
  icon: string;
  title: string;
  text: string;
}

const Benefit = ({ icon, title, text }: BenefitProps) => {
  return (
    <article className='group max-w-max border-transparent transition-all duration-300 hover:md:border-[.375rem] hover:md:border-cream-light hover:md:border-opacity-50 hover:md:shadow-md hover:md:shadow-cream-light dark:hover:md:border-cyan-950 dark:hover:md:shadow-cyan-950'>
      <div className='my-6 ms-6 flex max-w-56 flex-col gap-2 text-left text-paragraph-dark transition-all duration-300 group-hover:text-cream-dark dark:text-gray-400 dark:group-hover:text-white lg:me-20'>
        <Icon
          name={icon}
          className='opacity-75 transition-all duration-300 group-hover:text-cream-dark dark:group-hover:text-white'
        />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Benefit;
