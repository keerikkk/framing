interface PriceCardHeadingProps {
  title: string;
  value: number;
  currency: string;
}

const PriceCardHeading = ({
  title,
  value,
  currency,
}: PriceCardHeadingProps) => {
  return (
    <div className='flex flex-col gap-1.5 text-center text-white'>
      <h3 className='text-2xl font-medium'>{title}</h3>
      <span className='font-cormorant text-4xl font-normal'>
        {value}
        {currency}
      </span>
    </div>
  );
};

export default PriceCardHeading;
