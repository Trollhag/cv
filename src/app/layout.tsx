import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/app/components/Header'
import "./globals.css";
import Package from "../../package.json"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Oscar Trollhag - CV (v${Package.version})`,
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-slate-900 min-h-screen py-8`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
