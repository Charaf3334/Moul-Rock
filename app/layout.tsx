import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: {
    template: "%s - Moul Rock",
    default: "Moul-Rock",
  },
  description: "Moul Rock, For Moroccans, by Moroccans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <div className="flex flex-col min-h-screen">
            <Header />
              <main className="flex-1 ">
                {children}
              </main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
