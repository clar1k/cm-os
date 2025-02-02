import Link from "next/link";

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Cypher OS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
