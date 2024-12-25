import Icon from './UI/Icon';

export interface BenefitProps {
  icon: string;
  title: string;
  text: string;
}

const Benefit = ({ icon, title, text }: BenefitProps) => {
  return (
    <article className='group max-w-max border-transparent transition-all duration-300 hover:md:border-[.375rem] hover:md:border-cyan-950 hover:md:border-opacity-50 hover:md:shadow-md hover:md:shadow-cyan-950'>
      <div className='my-6 ms-6 flex max-w-56 flex-col gap-2 text-left text-gray-400 transition-all duration-300 group-hover:text-white lg:me-20'>
        <Icon
          name={icon}
          className='transition-all duration-300 group-hover:text-white'
        />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Benefit;
