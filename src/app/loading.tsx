export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A]">
      <div className="space-y-4 text-center">
        <div className="relative h-16 w-16 animate-spin">
          <div className="absolute inset-0 rounded-full border-4 border-gray-800" />
          <div className="absolute inset-0 rounded-full border-4 border-[#2CD591] border-t-transparent" />
        </div>
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  );
} 