import { footerCategories } from '@/lib/constant';
import NewsTicker from './news-ticker';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Link from 'next/link';
import { Twitter, Facebook, Youtube, Instagram, Rss } from 'lucide-react';
import { runningText } from '@/actions/articles.actions';
const Footer = async () => {
  const sourceText = await runningText();
  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="w-screen">
        <NewsTicker source={sourceText} />
      </div>
      <div className="p-16 flex flex-col">
        <div className="flex flex-col lg:justify-between lg:flex-row">
          <p className="text-slate-50 mb-2 text-xl md:text-7xl uppercase max-w-[500px] leading-none font-bold">
            the news to your inbox
          </p>
          <div className="flex gap-2 items-center text-slate-900">
            <Input className="rounded-none bg-slate-50" placeholder="Email" />
            <Button className="uppercase bg-slate-50 text-slate-900 rounded-none text-sm hover:bg-slate-300 hover:text-slate-900">
              sign up
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-4">
          <h3 className="uppercase font-semibold">the newstest</h3>
          <div className="border-t-[1px] border-slate-50/10 grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 capitalize">
            {footerCategories.map((item) => (
              <Link key={item} href="#">
                <p className="text-xs font-light text-slate-50 hover:text-slate-50/30">
                  {item}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center text-xs font-light mt-6 text-slate-50/50">
          <p>
            <Link
              href="https://dwicaksono.vercel.app/"
              target="_blank"
              className="underline"
            >
              © dimas wicaksono
            </Link>{' '}
            - Powered by{' '}
            <Link
              href="https://developer.nytimes.com/"
              target="_blank"
              className="underline"
            >
              api nytimes.com
            </Link>
          </p>
          <div className="flex gap-2 items-center">
            <Twitter className="w-4" />
            <Facebook className="w-4" />
            <Youtube className="w-4" />
            <Rss className="w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
