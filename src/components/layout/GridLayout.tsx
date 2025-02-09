'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface GridLayoutProps {
  children: React.ReactNode;
  title: string;
  filters: React.ReactNode;
  pagination?: React.ReactNode;
}

export default function GridLayout({
  children,
  title,
  filters,
  pagination,
}: GridLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Mobile filter toggle */}
      <div className="sticky top-16 z-40 flex items-center justify-between border-b border-gray-800 bg-[#0A0A0A] p-4 lg:hidden">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center rounded-lg border border-gray-800 px-4 py-2 text-sm text-white hover:border-[#2CD591] hover:text-[#2CD591]"
        >
          {isFilterOpen ? (
            <X className="mr-2 h-4 w-4" />
          ) : (
            <Filter className="mr-2 h-4 w-4" />
          )}
          Filters
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-8 lg:flex-row lg:gap-8">
          {/* Filter sidebar */}
          <aside
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } fixed inset-y-0 left-0 z-30 w-64 transform space-y-4 bg-[#0A0A0A] p-4 pt-20 transition-transform duration-300 lg:relative lg:block lg:translate-x-0 lg:pt-8`}
          >
            <div className="hidden lg:block">
              <h2 className="text-lg font-semibold text-white">Filters</h2>
            </div>
            <div className="mt-4 space-y-4">{filters}</div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <div className="hidden lg:block">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
            <div className="mt-8">
              {children}
              {pagination && <div className="mt-8">{pagination}</div>}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 