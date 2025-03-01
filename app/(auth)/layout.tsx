import Footer from '@/app/ui/footer';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>

    <div>
      {children}
      <Footer />
    </div>

  </>
  );
}
