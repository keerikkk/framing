import type { Metadata } from 'next';

import { Navbar } from '@/components/Navbar/Navbar';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Framing',
  description:
    'Framing is a premier photo studio offering a wide range of photography services including portrait and commercial photography. Our team of experienced photographers is dedicated to capturing your special moments with creativity and professionalism.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
