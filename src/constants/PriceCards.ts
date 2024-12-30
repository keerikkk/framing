export interface PriceCardItem {
  title: string;
  price: {
    value: number;
    currency: string;
  };
  fields: {
    label: string;
    value: string;
  }[];
}

export const priceCardsTitles: string[] = ['STANDARD', 'PREMIUM', 'PRO'];

export const priceCards: PriceCardItem[] = [
  {
    title: priceCardsTitles[0],
    price: { value: 800, currency: ' грн' },
    fields: [
      { label: 'Тривалість', value: '1 година' },
      { label: 'Обладнання', value: 'повне' },
    ],
  },
  {
    title: priceCardsTitles[1],
    price: { value: 2500, currency: ' грн' },
    fields: [
      { label: 'Тривалість', value: '4 години' },
      { label: 'Обладнання', value: 'повне' },
    ],
  },
  {
    title: priceCardsTitles[2],
    price: { value: 4000, currency: ' грн' },
    fields: [
      { label: 'Робота фотографа', value: '1 година' },
      { label: 'Фотографії', value: '80 шт' },
      { label: 'Ретушування', value: '80 шт' },
      { label: 'Завершення', value: '10 днів' },
    ],
  },
];
