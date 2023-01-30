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
      <body>
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
  );
}
