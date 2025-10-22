import type { Metadata } from 'next';
import { Namdhinggo, Mulish, DM_Sans } from 'next/font/google';
import './globals.css';

const namdhingo = Namdhinggo({
  weight: '600',
  variable: '--font-namdhingo',
  subsets: ['latin'],
});

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HelloMRI',
  description:
    'Longevity starts in your brain. Measure, understand, and elevate your mental performance with Neuro-Span™',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${namdhingo.variable} ${mulish.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
