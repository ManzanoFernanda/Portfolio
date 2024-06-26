import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Script from "next/script";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import foto2 from '@/public/foto2.jpg';

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mint" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // @ts-ignore
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Daniela Manzano",
    template:
      "%s - Daniela Manzano",
  },
  description:
    "Portfolio",
  keywords: [
    "web dev",
    "web developer",

  ],
  openGraph: {
    type: "website",
    url: "https://daniela-manzano.vercel.app/",
    locale: "en_US",
    title: "Daniela Manzano",
    images: "foto2.jpg",
    description:
      "",
    siteName: "Daniela Manzano",
  },
};
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body
      className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}
    >
     <Script id="theme-switcher" strategy="beforeInteractive">
        {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}

      </Script>
      <Toaster theme="dark" />
      <Navbar />
      {children}
      <Footer />
      <SpeedInsights />
    </body>
    </html>
  );
}
