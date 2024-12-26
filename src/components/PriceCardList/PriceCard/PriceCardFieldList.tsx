import PriceCardField from './PriceCardField';

interface PriceCardFieldListProps {
  fields: { label: string; value: string }[];
}

const PriceCardFieldList = ({ fields }: PriceCardFieldListProps) => {
  return (
    <ul className='flex flex-col gap-6 py-6'>
      {fields &&
        fields.map((field) => <PriceCardField key={field.label} {...field} />)}
    </ul>
  );
};

export default PriceCardFieldList;
