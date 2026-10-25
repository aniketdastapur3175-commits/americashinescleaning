import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A1128",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const isIndexingEnabled = process.env.ENABLE_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "America Shines Cleaning Service, LLC | Premium House Cleaning in Joppatowne, MD",
  description:
    "Thoughtful, dependable residential and commercial cleaning based in Joppatowne, Maryland. Serving Harford County, Bel Air, Edgewood, Abingdon, Fallston, and Baltimore County.",
  keywords: [
    "house cleaning Joppatowne MD",
    "America Shines Cleaning Service",
    "maid service Bel Air MD",
    "deep cleaning Harford County",
    "move-in cleaning Edgewood MD",
    "residential cleaning Abingdon",
    "commercial cleaning Joppatowne",
  ],
  authors: [{ name: "America Shines Cleaning Service, LLC" }],
  creator: "America Shines Cleaning Service, LLC",
  publisher: "America Shines Cleaning Service, LLC",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    title: "America Shines Cleaning Service, LLC — A Spotless Home. An Elevated Standard.",
    description:
      "Dependable recurring and deep residential cleaning based in Joppatowne, MD and serving Harford County.",
    url: siteUrl || undefined,
    siteName: "America Shines Cleaning Service, LLC",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "America Shines Cleaning Service, LLC — Sunlit Luxury Living Room Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "America Shines Cleaning Service, LLC | Joppatowne, MD",
    description:
      "Thoughtful, dependable house cleaning services providing recurring and deep cleans in Harford County, Maryland.",
    images: ["/images/hero.jpg"],
  },
  // Default to no-index / no-follow during client preview until business owner confirms launch
  robots: isIndexingEnabled
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.shortName,
    legalName: BUSINESS_INFO.legalName,
    description:
      "Professional residential and commercial cleaning services providing recurring and deep cleans in Joppatowne, MD and Harford County.",
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.emailReported,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area.name}, ${area.state}`,
    })),
    makesOffer: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.shortDesc,
      },
    })),
  };

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF9F5] text-[#242E3E] font-sans antialiased selection:bg-[#0A1128] selection:text-[#FAF9F5]">
        {children}
      </body>
    </html>
  );
}
