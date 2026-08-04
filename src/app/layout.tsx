import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ambassador.bsprep.in'),
  title: {
    default: "BSPrep Ambassador Program | Elite Tech Student Community",
    template: "%s | BSPrep Ambassador",
  },
  description: "Join the official BSPrep Student Ambassador Program. Empower data science students, host campus workshops, and earn exclusive zero-cost rewards like AI mock interviews, .XYZ domains, and premium swag from top industry sponsors.",
  keywords: [
    "BSPrep", "Student Ambassador", "Data Science", "IIT Madras", 
    "Referral Program", "Campus Ambassador", "Tech Internship", 
    "Student Community", "Tech Leaders", "AI Mock Interviews",
    "InterviewBuddy", "TruScholar", "Tech Swag", "Developer Community"
  ],
  authors: [{ name: "BSPrep Founding Team", url: "https://bsprep.in" }],
  creator: "BSPrep",
  publisher: "BSPrep",
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
  openGraph: {
    title: "BSPrep Ambassador Program | Elite Tech Student Community",
    description: "Join the movement to empower data science students everywhere. Build your network, host events, and earn premium zero-cost rewards.",
    url: "https://ambassador.bsprep.in",
    siteName: "BSPrep Ambassador Program",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "BSPrep Student Ambassador Program - Empowering Tech Leaders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSPrep Ambassador Program | Elite Tech Student Community",
    description: "Join the movement to empower data science students everywhere. Earn points, swag, and career boosts at zero cost.",
    images: ["/open-graph.png"],
    creator: "@bsprep",
    site: "@bsprep",
  },
  icons: {
    icon: "/bsprep.png",
    shortcut: "/bsprep.png",
    apple: "/bsprep.png",
  },
  alternates: {
    canonical: "https://ambassador.bsprep.in",
  },
};

import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.className} ${sora.variable} h-full antialiased`}
      style={{ fontSize: "90%" }}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HSHJVL0MPW"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HSHJVL0MPW');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Navbar />
            {children}
            <CookieBanner />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
