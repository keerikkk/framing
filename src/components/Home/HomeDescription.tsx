const HomeDescription = () => {
  return (
    <div className='absolute bottom-1/4 right-1/3 max-w-xs translate-x-1/3 translate-y-1/4 md:right-[10%] md:-translate-x-[10%]'>
      <p className='text-left text-lg text-paragraph-dark dark:text-gray-400 md:text-xl'>
        {data.content}
      </p>
    </div>
  );
};

export default HomeDescription;

const data = {
  content:
    'Pellentesque mauris a lobortis in bibendum sed lobortis semper. Eget eu vel eu vitae.',
};
