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
  metadataBase: new URL('https://hellomri.space'),
  title: 'HelloMRI™ — The Brain Longevity Scan',
  description: 'Longevity starts in your brain. Get your 3D brain visualization for $249 - risk-free for 7 days.',
  openGraph: {
    type: 'website',
    url: 'https://hellomri.space/',
    title: 'HelloMRI™ — The Brain Longevity Scan',
    description: 'Your brain, beautifully mapped. Get your 3D brain visualization for $249 - risk-free for 7 days.',
    images: [{ url: '/og/hellomri.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HelloMRI™ — The Brain Longevity Scan',
    description: 'Your brain, beautifully mapped. Get your 3D brain visualization for $249 — risk-free for 7 days.',
    images: ['/og/hellomri.png'],
  },
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
