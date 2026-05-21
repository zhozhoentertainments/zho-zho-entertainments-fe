import type { Metadata } from "next";
// import Footer from "@/components/shared/Footer";
// import Footer from "@/components/shared/Footer.jsx";

import { Analytics } from "@vercel/analytics/next"
import NewFooter from "@/components/shared/NewFooter";
import NewHeader from "@/components/shared/NewHeader";

export const metadata: Metadata = {
  title: "zho-zho entertainments",
  description: "An event management firm",
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
