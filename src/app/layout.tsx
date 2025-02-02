import "~/styles/globals.css";
import localFont from "next/font/local";
import { type Metadata } from "next";
import { DynamicProvider } from "~/providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "cypherOS",
  description: "community manager on steroids",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const arcade = localFont({ src: "./arcade.ttf" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${arcade.className}`}>
      <body className="bg-black">
        <DynamicProvider>{children}</DynamicProvider>
        <Toaster />
      </body>
    </html>
  );
}
