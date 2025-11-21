import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

// Base URL for the website
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandboosters.vercel.app';

// Structured data for organization (schema.org)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrandBoosters",
  "url": baseUrl,
  "logo": `${baseUrl}/logo.png`,
  "sameAs": [
    "https://www.facebook.com/brandboosters",
    "https://twitter.com/brandboosters",
    "https://www.instagram.com/brandboosters",
    "https://www.linkedin.com/company/brandboosters"
  ]
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  title: {
    default: 'BrandBoosters - #1 Digital Marketing & Web Development Agency',
    template: '%s | BrandBoosters'
  },
  applicationName: 'BrandBoosters',
  description: 'Top-rated digital marketing and web development agency. Specializing in SEO, social media marketing, and custom web solutions to grow your business online.',
  metadataBase: new URL('https://brandboosters.vercel.app'),
  keywords: [
    'digital marketing',
    'web development',
    'SEO services',
    'social media marketing',
    'branding',
    'content creation',
    'e-commerce solutions',
    'website design',
    'online marketing',
    'brand boosters'
  ],
  authors: [{ name: 'BrandBoosters Team' }],
  creator: 'BrandBoosters',
  publisher: 'BrandBoosters',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BrandBoosters - Digital Marketing & Web Development Experts',
    description: 'Transform your online presence with our comprehensive digital marketing and web development services',
    url: 'https://brandboosters.vercel.app',
    siteName: 'BrandBoosters',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://brandboosters.vercel.app/2_ande.png',
        width: 1200,
        height: 630,
        alt: 'BrandBoosters - Digital Marketing & Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandBoosters - Digital Marketing & Web Development',
    description: 'Transform your online presence with our digital marketing and web development services',
    images: ['/2_ande.png'],
    creator: '@brandboosters',
    site: '@brandboosters',
  },
  other: {
    'og:site_name': 'BrandBoosters',
    'og:type': 'website',
    'og:image:alt': 'BrandBoosters - Digital Marketing & Web Development',
    'twitter:image:alt': 'BrandBoosters - Digital Marketing & Web Development',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_KEY',
    yandex: 'YANDEX_VERIFICATION',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
