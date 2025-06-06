import type { Metadata } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.css";
import SupernesiaChatbot from "@/components/supernesia-chatbot";
import Script from 'next/script'; // Import Script component for JSON-LD

// Fonts (keep as is)
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});

// --- SEO Metadata Optimization ---
// !!! IMPORTANT: Replace placeholder values below with your actual information !!!
const siteUrl = "https://www.supernesia.id"; // <<< REPLACE with actual domain
const siteName = "Supernesia Creative Technology";
const siteTitle = "Supernesia: Jasa Website & Aplikasi Profesional, Solusi Digital UMKM Indonesia"; // Optimized Title
const siteDescription = "Supernesia: Jasa pembuatan website profesional & aplikasi mobile custom untuk UMKM/Bisnis di Indonesia. Tingkatkan bisnis Anda dengan solusi digital & transformasi digital terpercaya."; // Optimized Description
const siteKeywords = [
  // Core Services
  "jasa pembuatan website",
  "jasa pembuatan aplikasi",
  "pengembangan software",
  "aplikasi mobile",
  "pengembangan aplikasi custom",
  "pembuatan website profesional",
  "jasa website toko online",
  "jasa website e-commerce",
  "website company profile",
  // Target Audience & Solutions
  "solusi digital UMKM",
  "transformasi digital bisnis",
  "software custom UMKM",
  "layanan IT untuk UMKM",
  "digital marketing UMKM",
  "konsultan IT",
  // Location & National
  "jasa pembuatan website indonesia",
  "jasa pembuatan aplikasi indonesia",
  "software house indonesia",
  "konsultan IT indonesia",
  "jasa website jakarta", // Add other key locations if relevant
  "jasa website surabaya",
  "jasa website bandung",
  // Brand & Others
  "Supernesia",
  "Supernesia Creative Technology",
  "teknologi kreatif",
  "jasa SEO website",
  "harga jasa pembuatan website",
]; // Expanded Keywords
const siteAuthor = "Supernesia Creative Technology";
const googleVerification = "rDv4azVm7pImPiuru4Q-YvU6yrYRuVHpUzLaUTTb1Ho"; // Keep existing or update if changed
const ogImageUrl = `${siteUrl}/images/og-image.png`; // <<< REPLACE with actual OG image URL (e.g., /images/og-supernesia.png)
const logoUrl = `${siteUrl}/images/logo.png`; // <<< REPLACE with actual Logo URL
const twitterHandle = "@supernesia_id"; // <<< REPLACE with actual Twitter handle (optional)
const facebookPageUrl = "https://www.facebook.com/supernesia"; // <<< REPLACE with actual Facebook page URL
const linkedinPageUrl = "https://www.linkedin.com/company/supernesia/"; // <<< REPLACE with actual LinkedIn page URL
const contactPhoneNumber = "+6281281892625"; // <<< REPLACE with actual phone number
const contactEmail = "info@supernesia.id"; // <<< REPLACE with actual contact email
const streetAddress = "Gedung Wirausaha Lantai 1 Unit 104, Jalan HR Rasuna Said Kav. C-5 RT 003/RW 001 Kelurahan Karet, Kecamatan Setia Budi";
const addressLocality = "Jakarta Selatan";
const addressRegion = "DKI Jakarta";
const postalCode = "12920";
const addressCountry = "ID";

export const metadata: Metadata = {
  // --- Core Metadata ---
  metadataBase: new URL(siteUrl), // Crucial for resolving relative URLs
  title: {
    default: siteTitle, // Default title for homepage/layout
    template: `%s | ${siteName}`, // Template for page titles (e.g., "About Us | Supernesia Creative Technology")
  },
  description: siteDescription,
  keywords: siteKeywords,
  generator: "Next.js",
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  authors: [{ name: siteAuthor, url: siteUrl }],
  creator: siteAuthor,
  publisher: siteAuthor,
  // --- Robots & Indexing ---
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
  // --- Icons ---
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    // other: [
    //   { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }, // <<< Add if you have a mask icon
    // ],
  },
  // --- Manifest ---
  manifest: "/site.webmanifest", // <<< Ensure you have this file
  // --- Open Graph (Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: ogImageUrl, // Must be absolute URL
        width: 1200,
        height: 630,
        alt: `${siteName} Open Graph Image`,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  // --- Twitter Card ---
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    site: twitterHandle, // Optional
    creator: twitterHandle, // Optional
    images: [ogImageUrl], // Must be absolute URL
  },
  // --- Verification ---
  verification: {
    google: googleVerification,
    // Add other verifications if needed (e.g., Yandex, Bing)
    // yandex: '...',
    // other: {
    //   me: [contactEmail, siteUrl],
    // },
  },
  // --- Other --- 
  // alternates: { // Add alternate languages if applicable
  //   canonical: '/', // Handled per page usually
  //   languages: {
  //     'en-US': '/en-US',
  //   },
  // },
  // assets: ['/fonts/inter-v12-latin-regular.woff2'], // Preload assets if needed
  category: 'technology', // Define content category
};

// --- JSON-LD Structured Data ---
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteName,
  "url": siteUrl,
  "logo": logoUrl, // <<< Ensure this logo URL is correct
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": contactPhoneNumber,
    "contactType": "Customer Service",
    "email": contactEmail,
    "areaServed": addressCountry,
    "availableLanguage": ["Indonesian", "English"]
  },
  "sameAs": [
    facebookPageUrl,
    twitterHandle ? `https://twitter.com/${twitterHandle.substring(1)}` : undefined,
    linkedinPageUrl
    // Add others like Instagram, YouTube etc.
  ].filter(Boolean), // Filter out undefined values if handles are missing
  "address": {
    "@type": "PostalAddress",
    "streetAddress": streetAddress,
    "addressLocality": addressLocality,
    "addressRegion": addressRegion,
    "postalCode": postalCode,
    "addressCountry": addressCountry
  },
  "description": siteDescription,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${bebasNeue.variable} ${nunito.variable} scroll-smooth`}
    >
      <head>
        {/* Google Site Verification is handled by metadata object */}
        {/* JSON-LD Structured Data */} 
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Add other head elements if needed, like preconnect/preload links */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Example Preload: <link rel="preload" as="image" href="/images/hero-banner.webp"> */}
      </head>
      {/* Added basic light/dark mode classes example - adapt to your styling system */}
      <body className="font-sans text-base leading-relaxed font-body bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        {/* Consider adding Skip to Content link for accessibility */}
        {/* <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a> */}

        {/* Basic structure example - replace/integrate with your actual Header/Footer components */}
        {/* <header> Header Content / Navigation </header> */}

        <main id="main-content"> {/* Added main tag with id for skip link target */}
          {children}
        </main>

        {/* <footer> Footer Content / Links </footer> */}

        <SupernesiaChatbot />
      </body>
    </html>
  );
}