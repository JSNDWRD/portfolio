import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason's Web Portfolio",
  description: "Jason Edward Salim's Website Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-hidden bg-slate-200 antialiased text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
