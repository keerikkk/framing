import type { Metadata } from 'next';

import { Navbar } from '@/components/Navbar/Navbar';
import { Providers } from './providers';

const baseUrl = process.env.NEXT_PUBLIC_URL || '';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: 'Framing - Професійна фотостудія Ужгороду',
  description:
    'Framing - це провідна фотостудія, яка спеціалізується на широкому спектрі фотографічних послуг, включаючи портретну та комерційну зйомку. Ми зосереджені на тому, щоб зберегти ваші особливі моменти з творчим підходом та високим рівнем професіоналізму.',
  openGraph: {
    title: 'Framing - Професійна фотостудія Ужгороду',
    description:
      'Професійна фотостудія Ужгороду. Портретна, комерційна зйомка. Ми зосереджені на збереженні ваших особливих моментів з високим рівнем професіоналізму.',
    type: 'website',
    locale: 'uk_UA',
    url: baseUrl,
    siteName: 'Framing',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta
          name='google-site-verification'
          content='dULAMEO5ixFFQAUPY9-VEp6SfbsSUPNAmj-tkahir-k'
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
