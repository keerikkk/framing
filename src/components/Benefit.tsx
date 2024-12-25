import Icon from './UI/Icon';

export interface BenefitProps {
  icon: string;
  title: string;
  text: string;
}

const Benefit = ({ icon, title, text }: BenefitProps) => {
  return (
    <article className='max-w-max group border-transparent hover:md:border-[.375rem] hover:md:border-cyan-950 hover:md:border-opacity-50 hover:md:shadow-cyan-950 hover:md:shadow-md transition-all duration-300'>
      <div className='flex flex-col group-hover:text-white text-left text-gray-400 gap-2 max-w-56 my-6 ms-6 lg:me-20 transition-all duration-300'>
        <Icon
          name={icon}
          className='group-hover:text-white transition-all duration-300'
        />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Benefit;
