import { FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] p-4">
      <div className="text-center">
        <div className="mb-4 inline-block rounded-full bg-[#2CD591]/10 p-4">
          <FileQuestion className="h-8 w-8 text-[#2CD591]" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-white">Page Not Found</h1>
        <p className="mb-6 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-[#2CD591] px-6 py-3 text-sm font-medium text-black hover:bg-[#2CD591]/90"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 