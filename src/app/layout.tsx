import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Christopher Belgrave | Senior Project Manager Showreel',
  description: "Christopher Belgrave's professional showreel featuring advertising campaigns, AR experiences, and digital production work for major brands including L'Oréal, Maybelline, and Coca-Cola.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
