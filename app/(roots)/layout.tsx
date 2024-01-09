import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function LayoutRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="px-4 py-2 md:px-16 md:py-10 mt-[15rem] xl:mt-[20rem] overflow-y-scroll h-fit">
        {children}
      </main>
      <Footer />
    </>
  );
}
