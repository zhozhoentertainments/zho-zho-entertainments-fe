import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "zho-zho entertainments",
  description: "An event management firm",

  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/icons/apple-touch-icon.png",
  },

  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        figtree.variable,
        "font-sans"
      )}
    >
      <body
        className={cn(
          poppins.variable,
          "min-h-screen overflow-x-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}