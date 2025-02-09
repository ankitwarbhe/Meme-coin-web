'use client';

import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] p-4">
      <div className="text-center">
        <div className="mb-4 inline-block rounded-full bg-red-500/10 p-4">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-white">
          Oops! Something went wrong
        </h1>
        <p className="mb-6 text-gray-400">{error.message}</p>
        <button
          onClick={reset}
          className="rounded-lg bg-[#2CD591] px-6 py-3 text-sm font-medium text-black hover:bg-[#2CD591]/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 