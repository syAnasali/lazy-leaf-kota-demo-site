import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#0c0e0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "The Lazy Leaf | Artisanal Cafe & Kitchen • Kota, Rajasthan",
    template: "%s | The Lazy Leaf Kota",
  },
  description:
    "Experience The Lazy Leaf in Kota, Rajasthan. A tranquil sanctuary on Commerce College Road featuring artisanal specialty brews, hand-stretched sourdough pizzas, botanical aesthetic, and unhurried conversations.",
  keywords: [
    "The Lazy Leaf",
    "The Lazy Leaf Kota",
    "Cafe in Kota",
    "Best cafe in Kota Rajasthan",
    "Talwandi cafe Kota",
    "Coffee shop Kota",
    "Artisanal coffee Kota",
    "Aesthetic cafe Kota",
    "Work friendly cafe Kota",
    "Gourmet kitchen Kota",
    "Kota restaurant",
    "Specialty brews Kota",
  ],
  authors: [{ name: "The Lazy Leaf", url: "https://the-lazy-leaf-kota.com" }],
  creator: "The Lazy Leaf",
  publisher: "The Lazy Leaf",
  metadataBase: new URL("https://the-lazy-leaf-kota.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://the-lazy-leaf-kota.com",
    siteName: "The Lazy Leaf - Kota",
    title: "The Lazy Leaf | Artisanal Cafe & Kitchen • Kota, Rajasthan",
    description:
      "A serene culinary oasis in Kota, Rajasthan. Artisanal brews, curated bites, lush vibes, and relaxed conversations. Take your time.",
    images: [
      {
        url: "/lazy-leaf-logo.jpg",
        width: 1200,
        height: 630,
        alt: "The Lazy Leaf Cafe & Kitchen - Kota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lazy Leaf | Artisanal Cafe & Kitchen • Kota, Rajasthan",
    description:
      "A serene culinary oasis in Kota, Rajasthan. Artisanal brews, curated bites, lush vibes, and relaxed conversations. Take your time.",
    images: ["/lazy-leaf-logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Food & Beverage",
  applicationName: "The Lazy Leaf",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "The Lazy Leaf",
  "image": "https://the-lazy-leaf-kota.com/lazy-leaf-logo.jpg",
  "description": "Artisanal Cafe & Kitchen in Kota, Rajasthan offering specialty brews, gourmet food, and serene botanical ambiance.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-257, Commerce College Road, Talwandi",
    "addressLocality": "Kota",
    "addressRegion": "Rajasthan",
    "postalCode": "324005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.1396,
    "longitude": 75.8344
  },
  "servesCuisine": ["Specialty Coffee", "Cafe", "Continental", "Bakery", "Beverages", "Pizza", "Pasta"],
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "23:00"
    }
  ],
  "telephone": "+919876543210",
  "url": "https://the-lazy-leaf-kota.com"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-charcoal text-cream-muted font-secondary antialiased selection:bg-olive selection:text-cream">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
