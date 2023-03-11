import Navbar from '@/components/Navbar';
import ScrollUpButton from '@/components/ScrollUpButton';
import '../../globals.css';

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
        <ScrollUpButton />
        {children}
      </body>
    </html>
  );
}
