export interface TestimonialHeaderProps {
  img: string;
  author: string;
  platform: string;
}

const TestimonialHeader = ({
  img,
  author,
  platform,
}: TestimonialHeaderProps) => {
  return (
    <div className='flex gap-8'>
      <img
        src={img}
        alt={author}
        className='aspect-square w-16 rounded-full object-cover'
      />
      <div className='flex flex-col text-left'>
        <h2 className='overflow-hidden text-ellipsis whitespace-nowrap font-cormorant text-[1.5rem] font-semibold'>
          {author}
        </h2>
        <p>{platform}</p>
      </div>
    </div>
  );
};

export default TestimonialHeader;
