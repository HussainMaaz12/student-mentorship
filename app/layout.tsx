import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { contact } from "@/lib/contact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const siteUrl = "https://futurepath.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FuturePath Advisory | Premium Student Mentorship & Admissions Strategy",
    template: "%s | FuturePath Advisory",
  },
  description:
    "Premium student mentorship, profile building, study abroad strategy, scholarship planning, and university admissions advisory for ambitious families.",
  keywords: [
    "student mentorship",
    "university admissions consultancy",
    "study abroad consultant",
    "profile building",
    "college admissions advisor",
    "career readiness assessment",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FuturePath Advisory",
    description:
      "Long-term mentorship and admissions strategy for students preparing for top universities in India and abroad.",
    url: siteUrl,
    siteName: "FuturePath Advisory",
    images: [
      {
        url: "/images/advisory-session.png",
        width: 1796,
        height: 876,
        alt: "A FuturePath admissions advisory session with a parent, student, and mentor.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FuturePath Advisory",
    description: "Premium student mentorship and university admissions strategy for ambitious families.",
    images: ["/images/advisory-session.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: contact.brand,
  url: siteUrl,
  email: contact.email,
  telephone: contact.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  description:
    "Premium student mentorship, profile building, study abroad strategy, and university admissions advisory.",
  areaServed: ["India", "United States", "United Kingdom", "Canada", "Australia"],
  serviceType: ["Student mentorship", "University admissions advisory", "Profile building", "Study abroad consultancy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
