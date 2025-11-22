import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

  // Reset scroll position on route change
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full bg-white bg-opacity-80 backdrop-blur-sm">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <div key={router.pathname} className="relative">
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </main>
      
      {!isBlogRoute && (
        <footer className="mt-auto">
          <Footer />
        </footer>
      )}
      
      {/* Global styles for hover effects */}
      <style jsx global>{`
        .hover-effect {
          position: relative;
          overflow: hidden;
        }
        .hover-effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease-in-out;
        }
        .hover-effect:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        /* Ensure Navbar is above other content */
        .sticky {
          position: sticky;
          top: 0;
          z-index: 50;
        }
      `}</style>
    </div>
  );
}
