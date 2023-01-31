import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="scrollbar scrollbar-w-1 scrollbar-thumb-gray-900 scrollbar-track-gray-700">
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
  );
}
