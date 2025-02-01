import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { DynamicProvider } from "~/providers";

export const metadata: Metadata = {
  title: "cypherOS",
  description: "community manager on steroids",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-black">
        <DynamicProvider>{children}</DynamicProvider>
      </body>
    </html>
  );
}
