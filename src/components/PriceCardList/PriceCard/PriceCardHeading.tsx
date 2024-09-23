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
    <div className='flex flex-col gap-1.5 text-white text-center'>
      <h3 className='text-2xl font-medium'>{title}</h3>
      <span className='text-4xl font-normal font-cormorant'>
        {value}
        {currency}
      </span>
    </div>
  );
};

export default PriceCardHeading;
