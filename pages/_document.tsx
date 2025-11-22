import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="BrandBoosters - Creative Branding Agency" />
        <meta name="description" content="We help brands grow through strategic design and development solutions." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brandboosters.marketing/" />
        <meta property="og:title" content="BrandBoosters - Creative Branding Agency" />
        <meta property="og:description" content="We help brands grow through strategic design and development solutions." />
        <meta property="og:image" content="https://www.brandboosters.marketing/logo.png" />
        <meta property="og:image:secure_url" content="https://www.brandboosters.marketing/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BrandBoosters Logo" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.brandboosters.marketing/" />
        <meta property="twitter:title" content="BrandBoosters - Creative Branding Agency" />
        <meta property="twitter:description" content="We help brands grow through strategic design and development solutions." />
        <meta property="twitter:image" content="https://www.brandboosters.marketing/logo.png" />
        
        {/* WhatsApp Specific */}
        <meta property="og:site_name" content="BrandBoosters" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
