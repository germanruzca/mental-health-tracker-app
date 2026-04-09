import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/layout/Providers';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import Navbar from '@/components/layout/Navbar';


export const metadata: Metadata = {
  title: 'Mental Health Tracker',
  description: 'Track your daily mental health status',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}