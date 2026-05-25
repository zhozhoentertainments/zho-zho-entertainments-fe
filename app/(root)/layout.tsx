import type { Metadata } from "next";
// import Footer from "@/components/shared/Footer";
// import Footer from "@/components/shared/Footer.jsx";

import { Analytics } from "@vercel/analytics/next"
import NewFooter from "@/components/shared/NewFooter";
import NewHeader from "@/components/shared/NewHeader";

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
    <div className="flex min-h-screen flex-col font-sans bg-[#050505] text-white overflow-x-hidden">
      <NewHeader/>
      <main className="flex-1 flex flex-col">{children}</main>
      <NewFooter />
      {/* <Footer/> */}
      <Analytics />
    </div>
  );
}
