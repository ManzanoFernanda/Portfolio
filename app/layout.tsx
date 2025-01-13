import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Script from "next/script";
import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mint" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://danimanzano.vercel.app/"),
  title: {
    default: "Daniela Manzano",
    template: "%s - Daniela Manzano",
  },
  description: "Portfolio",
  keywords: ["web dev", "web developer"],
  openGraph: {
    type: "website",
    url: "https://danimanzano.vercel.app/",
    locale: "en_US",
    title: "Daniela Manzano",
    images: [
      {
        url: "/urlimage.png", // Ruta relativa para la imagen en la carpeta `public`
        width: 1200, // Ancho recomendado para Open Graph
        height: 630, // Alto recomendado para Open Graph
        alt: "Daniela Manzano Portfolio", // Texto alternativo para la imagen
      },
    ],
    description: "Portfolio",
    siteName: "Daniela Manzano",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danimanzano.vercel.app/" />
        <meta property="og:title" content="Daniela Manzano" />
        <meta property="og:description" content="Portfolio" />
        <meta property="og:image" content="https://danimanzano.vercel.app/urlimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Daniela Manzano Portfolio" />
      </head>
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

