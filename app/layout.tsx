import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { StarsCanvas } from "@/components/main/star-background";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Script from "next/script";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mint" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // @ts-ignore
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Fernanda Manzano",
    template:
      "%s - Fernanda Manzano",
  },
  description:
    "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
  keywords: [
    "web dev",
    "web developer",

  ],
  openGraph: {
    type: "website",
    url: "https://www.azacdev.com",
    locale: "en_US",
    title: "Daniela Manzano",
    images: "./opengraph-image.webp",
    description:
      "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
    siteName: "Daniela Manzano",
  },
};
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body
      className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      //</html>className={cn(
        //"bg-[#030014] overflow-y-scroll overflow-x-hidden",
        //inter.className
      //)}
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
