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

// export const metadata = {
//   title: "Tan & Sert",
//   description: "Join us to celebrate the wedding of Tan & Sert!",
//   openGraph: {
//     title: "Tan & Sert Wedding",
//     description: "Join us to celebrate the wedding of Tan & Sert!",
//     url: "https://ts-wedding-day.vercel.app",
//     type: "website",
//     images: [
//       {
//         url: "https://ts-wedding-day.vercel.app/card2.png",
//         width: 1200,
//         height: 630,
//         alt: "Tan & Sert Wedding",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Tan & Sert Wedding",
//     description: "Join us to celebrate the wedding of Tan & Sert!",
//     images: ["https://ts-wedding-day.vercel.app/card2.png"],
//   },
// };

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
    locale: "en",
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
        {/* <div
          className="bg-[#adeff6] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem]`"
        />

        <div
          className="bg-[#8474ff] absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        `"
        /> */}
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
