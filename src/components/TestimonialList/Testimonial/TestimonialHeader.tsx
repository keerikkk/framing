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
        className='w-16 aspect-square object-cover rounded-full'
      />
      <div className='flex flex-col text-left'>
        <h2 className='font-cormorant font-semibold text-[1.5rem] whitespace-nowrap overflow-hidden text-ellipsis'>
          {author}
        </h2>
        <p>{platform}</p>
      </div>
    </div>
  );
};

export default TestimonialHeader;
