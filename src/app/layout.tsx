import type { Metadata } from "next";
import { Mali } from "next/font/google";
import "./globals.css";
import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";

const mali = Mali({
  subsets: ["latin"],
  variable: "--font-mali",
  weight: ["400"],
});

export const metadata = {
  title: "Tan & Sert Wedding",
  description: "Join us to celebrate the wedding of Tan & Sert!",
  openGraph: {
    title: "Tan & Sert Wedding",
    description: "Join us to celebrate the wedding of Tan & Sert!",
    url: "https://ts-wedding-day.vercel.app",
    type: "website",
    images: [
      {
        url: "https://ts-wedding-day.vercel.app/cardWedding.jpg",
        width: 1200,
        height: 630,
        alt: "Tan & Sert Wedding",
      }
    ],
    site_name: "Tan & Sert Wedding",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan & Sert Wedding",
    description: "Join us to celebrate the wedding of Tan & Sert!",
    images: ["https://ts-wedding-day.vercel.app/card2.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${mali.variable} font-hurricane flex flex-col bg-gray-50
       text-gray-950 relative`} 
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
