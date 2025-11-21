import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';

export default function App({
  Component,
  pageProps,
  router: routerProp,
}: {
  Component: any;
  pageProps: any;
  router: any;
}) {
  const router = useRouter();
  const isBlogRoute = router.pathname.startsWith('/blog');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Component
            key={routerProp.route}
            {...pageProps}
          />
        </AnimatePresence>
      </main>
      
      {!isBlogRoute && (
        <footer className="mt-auto">
          <Footer />
        </footer>
      )}
    </div>
  );
}
