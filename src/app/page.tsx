import { Inter } from "next/font/google";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { BackgroundGradient } from "~/components/background-gradient";
import { Header } from "~/components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <BackgroundGradient />
      <Header />
      <main className="relative mx-auto min-h-screen max-w-7xl p-8 pt-24">
        <div className="flex max-w-xl flex-col gap-[6px]">
          <h1
            className={`${inter.className} bg-gradient-to-r from-white to-gray-500 bg-clip-text text-6xl font-bold text-transparent`}
          >
            cmOS
          </h1>
          <p className={`${inter.className} text-xl font-medium text-gray-200`}>
            community manager on steroids
          </p>
          <p
            className={`${inter.className} mt-2 text-lg leading-relaxed text-gray-500`}
          >
            Develop a new AI community management to effectively moderate your
            Telegram, Twitter, and Farcaster with just a few clicks.
          </p>
        </div>

        <div className="mt-[450px] flex items-center justify-center">
          <Link href="/create" className="relative">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 blur" />
            <Button
              className={`relative ${inter.className} rounded-3xl border border-gray-800 bg-black px-20 py-10 text-2xl text-white transition-all duration-200 hover:bg-black/80`}
            >
              Create
            </Button>
          </Link>
        </div>

        <footer className="absolute bottom-8 left-8 flex items-center justify-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 1200 1227"
          >
            <path
              fill="#fff"
              d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
            />
          </svg>
          <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#2AABEE" />
                <stop offset="100%" stop-color="#229ED9" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
            />
            <path
              fill="#FFF"
              d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"
            />
          </svg>
        </footer>
      </main>
    </div>
  );
}
