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
      { label: 'Тривалість', value: '3 години' },
      { label: 'Фотографії', value: '60 - 80' },
      { label: 'Ретушування', value: '25 елементів' },
      { label: 'Завершення', value: '10 днів' },
    ],
  },
  {
    title: priceCardsTitles[1],
    price: { value: 150, currency: '$' },
    fields: [
      { label: 'Тривалість', value: '4 години' },
      { label: 'Фотографії', value: '85 - 90' },
      { label: 'Ретушування', value: '40 елементів' },
      { label: 'Завершення', value: '7 днів' },
    ],
  },
  {
    title: priceCardsTitles[2],
    price: { value: 200, currency: '$' },
    fields: [
      { label: 'Тривалість', value: '6 годин' },
      { label: 'Фотографії', value: 'без обмежень' },
      { label: 'Ретушування', value: 'без обмежень' },
      { label: 'Завершення', value: '3 дні' },
    ],
  },
];
