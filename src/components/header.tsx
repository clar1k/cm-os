import Link from "next/link";

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              cypherOS
            </Link>
          </div>
          <nav className="hidden items-center space-x-4 md:flex">
            <Link
              href="/features"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Docs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
