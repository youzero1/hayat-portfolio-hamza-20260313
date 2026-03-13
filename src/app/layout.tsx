import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Johnson | Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable and beautiful web applications.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Web Development',
  ],
  authors: [{ name: 'Alex Johnson' }],
  openGraph: {
    title: 'Alex Johnson | Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Alex Johnson Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Johnson | Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
