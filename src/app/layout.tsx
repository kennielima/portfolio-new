import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kennielima",
  description: "Kennie's Portfolio",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🫡</text></svg>"
  },
  verification: {
    google: "vqXqnXG1N9XjomRA6fZ0d_Rlj0PqDgu1_BCze9JyJpo"
  },
  metadataBase: new URL('https://kennylima.vercel.app'),
  alternates: {
    canonical: '/'
  }};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased h-screen`}
      >
        {children}
        <footer className="flex justify-center text-neutral-200 pb-8 md:pb-0 sm:pt-4 text-xs"> &#169; 2025. Kennielima</footer>
      </body>
    </html>
  );
}
