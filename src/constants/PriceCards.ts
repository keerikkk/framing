export interface PriceCardItem {
  title: string;
  price: {
    value: number;
    currency: string;
  };
  fields: [
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
  ];
}

export const priceCardsTitles: string[] = ['STANDARD', 'PREMIUM', 'PRO'];

export const priceCards: PriceCardItem[] = [
  {
    title: priceCardsTitles[0],
    price: { value: 100, currency: '$' },
    fields: [
      { label: 'Duration', value: '3 hours' },
      { label: 'Photos', value: '60 - 80' },
      { label: 'Retouching', value: '25 items' },
      { label: 'Finishing', value: '10 days' },
    ],
  },
  {
    title: priceCardsTitles[1],
    price: { value: 150, currency: '$' },
    fields: [
      { label: 'Duration', value: '4 hours' },
      { label: 'Photos', value: '85 - 90' },
      { label: 'Retouching', value: '40 items' },
      { label: 'Finishing', value: '7 days' },
    ],
  },
  {
    title: priceCardsTitles[2],
    price: { value: 200, currency: '$' },
    fields: [
      { label: 'Duration', value: '6 hours' },
      { label: 'Photos', value: 'unlimited' },
      { label: 'Retouching', value: 'unlimited' },
      { label: 'Finishing', value: '3 days' },
    ],
  },
];
