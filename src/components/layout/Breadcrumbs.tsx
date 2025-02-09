'use client';

import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="flex py-4">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-[#2CD591]"
            >
              Home
            </Link>
          </li>
          {segments.map((segment, index) => {
            const path = `/${segments.slice(0, index + 1).join('/')}`;
            const isLast = index === segments.length - 1;
            const title = segment.charAt(0).toUpperCase() + segment.slice(1);

            return (
              <li key={path} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-gray-600" />
                {isLast ? (
                  <span className="text-sm text-[#2CD591]">{title}</span>
                ) : (
                  <Link
                    href={path}
                    className="text-sm text-gray-400 hover:text-[#2CD591]"
                  >
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
} 