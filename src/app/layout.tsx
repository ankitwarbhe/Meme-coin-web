import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Heroes - Meme-Based Gaming Platform",
  description: "A revolutionary meme-based AI heroes gaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-[#0A0A0A] text-white`}>
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/80">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center">
                <Link href="/" className="flex items-center text-2xl font-bold text-[#2CD591]">
                  AI Heroes
                </Link>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <a href="/characters" className="text-sm hover:text-[#2CD591]">Characters</a>
                <a href="/battle" className="text-sm hover:text-[#2CD591]">Battle</a>
                <a href="/market" className="text-sm hover:text-[#2CD591]">Market</a>
                <a href="/resources" className="text-sm hover:text-[#2CD591]">Resources</a>
                <a href="/roadmap" className="text-sm hover:text-[#2CD591]">Roadmap</a>
                <a href="/community" className="text-sm hover:text-[#2CD591]">Community</a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="/market"
                  className="rounded-lg bg-[#2CD591] px-4 py-2 text-sm font-medium text-black hover:bg-[#2CD591]/90"
                >
                  Buy Heroes
                </a>
                <a
                  href="/battle"
                  className="rounded-lg border border-[#2CD591] px-4 py-2 text-sm font-medium text-[#2CD591] hover:bg-[#2CD591]/10"
                >
                  Battle Now
                </a>
              </div>
            </nav>
          </header>

          {/* Breadcrumbs */}
          <div className="mt-16">
            <Breadcrumbs />
          </div>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-800 bg-[#0A0A0A] py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <div className="flex items-center space-x-4">
                  <a href="https://twitter.com" className="text-gray-400 hover:text-[#2CD591]">Twitter</a>
                  <a href="https://discord.com" className="text-gray-400 hover:text-[#2CD591]">Discord</a>
                  <a href="https://telegram.org" className="text-gray-400 hover:text-[#2CD591]">Telegram</a>
                </div>
                <p className="text-sm text-gray-400">
                  © 2024 AI Heroes. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
