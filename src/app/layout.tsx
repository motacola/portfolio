import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Christopher Belgrave | Senior Project Manager Showreel',
  description: "Christopher Belgrave's professional showreel featuring advertising campaigns, AR experiences, and digital production work for major brands including L'Oréal, Maybelline, and Coca-Cola.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
