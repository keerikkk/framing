const HomeHeader = () => {
  return (
    <div className='home-header'>
      <h2 className='font-cormorant'>{data.first}</h2>
      <h2 className='absolute left-1/2 font-cormorant'>{data.second}</h2>
    </div>
  );
};

export default HomeHeader;

const data = {
  first: 'FRAMING',
  second: 'STUDIO',
};
