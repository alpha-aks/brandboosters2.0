import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'BrandBoosters - #1 Digital Marketing & Web Development Agency',
    template: '%s | BrandBoosters'
  },
  description: 'Top-rated digital marketing and web development agency. Specializing in SEO, social media marketing, and custom web solutions to grow your business online.',
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
  metadataBase: new URL('https://brandboosters.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BrandBoosters - Digital Marketing & Web Development Experts',
    description: 'Transform your online presence with our comprehensive digital marketing and web development services',
    url: 'https://brandboosters.vercel.app',
    siteName: 'BrandBoosters',
    images: [
      {
        url: 'https://brandboosters.vercel.app/2_ande.png',
        width: 1200,
        height: 630,
        alt: 'BrandBoosters - Digital Marketing & Web Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandBoosters - Digital Marketing & Web Development',
    description: 'Transform your online presence with our digital marketing and web development services',
    images: ['https://brandboosters.vercel.app/2_ande.png'],
    creator: '@brandboosters',
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
      <body className={inter.className}>
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
