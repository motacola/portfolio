import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';
import { Inter, Playfair_Display } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Christopher Belgrave | Senior Project Manager Showreel',
  description:
    "Christopher Belgrave's professional showreel featuring advertising campaigns, AR experiences, and digital production work for major brands including L'Oréal, Maybelline, and Coca-Cola.",
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <a href="#main" className="skip-to-content">
          Skip to main content
        </a>
        <Layout>{children}</Layout>
        <div id="nav-skip-anchor" style={{ position: 'absolute', top: 0 }} />
      </body>
    </html>
  );
}
