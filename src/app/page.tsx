import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
      <div className="max-w-lg mx-auto p-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Discover Your Salesforce Package
        </h1>
        <Link href="/survey">
          <button className="p-2 sm:p-3 md:p-4 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-300">
            Let&apos;s Begin!
          </button>
        </Link>
      </div>
    </div>
  );
}