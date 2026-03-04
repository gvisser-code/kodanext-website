import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KodaNext — Vind jouw droombaan in één klik",
  description:
    "KodaNext is het Nederlandse recruitmentplatform waarbij AI jouw sollicitatiebrief schrijft. Solliciteer in één klik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} antialiased bg-[#F8FAFC]`}>
        <Header />
        <main>{children}</main>
        <footer className="bg-[#1E2A4A] text-gray-400 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-white font-bold text-lg">
                Koda<span className="text-[#10B981]">Next</span>
              </span>
              <nav className="flex gap-6 text-sm">
                <a href="/over-ons" className="hover:text-white transition-colors">Over ons</a>
                <a href="/werkgevers" className="hover:text-white transition-colors">Voor Werkgevers</a>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </nav>
              <p className="text-xs">© 2025 KodaNext. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
