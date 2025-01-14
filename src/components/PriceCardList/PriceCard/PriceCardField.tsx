interface PriceCardFieldProps {
  label: string;
  value: string;
}

const PriceCardField = ({ label, value }: PriceCardFieldProps) => {
  return (
    <li className='flex items-center justify-between text-cream-bright dark:text-white'>
      <strong>{label}:</strong> {value}
    </li>
  );
};

export default PriceCardField;
