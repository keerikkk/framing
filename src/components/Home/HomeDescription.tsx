const HomeDescription = () => {
  return (
    <div className='absolute bottom-1/4 translate-y-1/4 right-1/3 translate-x-1/3 md:right-[10%] md:-translate-x-[10%] max-w-xs'>
      <p className='text-gray-400 text-lg md:text-xl text-left'>
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
