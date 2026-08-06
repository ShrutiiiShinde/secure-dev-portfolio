import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shruti | Personal Portfolio",
  description: "Personal portfolio website for Shruti - Software Developer & Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
