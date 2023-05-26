
import Navigation from '@/components/Navigation';
//import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Práctica 1',
  description: 'Primera práctica para aprendizaje de Next.js',
  keywords: 'next,react,app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
};
