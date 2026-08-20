import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/ShrutiiiShinde/secure-dev-portfolio"),
  title: {
    default: "Shruti Vijay Shinde | Secure Developer Portfolio",
    template: "%s | Shruti Vijay Shinde",
  },
  description:
    "Personal portfolio of Shruti Vijay Shinde — Full-Stack Software Developer & Cybersecurity Specialist focused on VAPT, Secure SDLC, Next.js, and TypeScript.",
  keywords: [
    "Shruti Vijay Shinde",
    "Cybersecurity",
    "VAPT",
    "Penetration Testing",
    "Full-Stack Developer",
    "Next.js 15",
    "TypeScript",
    "Secure Coding",
    "DevSecOps",
    "OWASP Top 10",
  ],
  authors: [{ name: "Shruti Vijay Shinde" }],
  creator: "Shruti Vijay Shinde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ShrutiiiShinde/secure-dev-portfolio",
    title: "Shruti Vijay Shinde | Secure Developer Portfolio",
    description:
      "Full-Stack Software Developer & Cybersecurity Specialist focused on VAPT, Secure SDLC, Next.js, and TypeScript.",
    siteName: "Shruti Vijay Shinde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shruti Vijay Shinde | Secure Developer Portfolio",
    description:
      "Full-Stack Software Developer & Cybersecurity Specialist focused on VAPT, Secure SDLC, Next.js, and TypeScript.",
    creator: "@ShrutiShinde",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-primary-foreground focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>

        {/* Navigation Header Landmark */}
        <Navbar />

        {/* Main Content Area Landmark */}
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>

        {/* Footer Landmark */}
        <Footer />
      </body>
    </html>
  );
}
