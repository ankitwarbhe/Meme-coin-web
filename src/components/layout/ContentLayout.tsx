'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface ContentLayoutProps {
  children: React.ReactNode;
  title: string;
  navigation: Array<{ title: string; href: string }>;
}

export default function ContentLayout({
  children,
  title,
  navigation,
}: ContentLayoutProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Mobile navigation toggle */}
      <div className="sticky top-16 z-40 flex items-center border-b border-gray-800 bg-[#0A0A0A] p-4 lg:hidden">
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="text-white hover:text-[#2CD591]"
        >
          {isMobileNavOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        <h1 className="ml-4 text-xl font-bold text-white">{title}</h1>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside
            className={`${
              isMobileNavOpen ? 'block' : 'hidden'
            } fixed inset-y-0 left-0 z-30 w-64 transform space-y-4 bg-[#0A0A0A] p-4 pt-20 transition-transform duration-300 lg:relative lg:block lg:translate-x-0 lg:pt-8`}
          >
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#2CD591]"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 py-8 lg:pl-8">
            <div className="hidden lg:block">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
            <div className="mt-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
} 