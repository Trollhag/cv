import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/app/components/Header'
import "../globals.css";
import Package from "../../../package.json"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Oscar Trollhag - CV (v${Package.version})`,
  description: "",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }]
}

export default function BaseLayout({ children, params }: Readonly<{ children: React.ReactNode, params: { lang: string } }>) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} bg-white dark:bg-slate-900 min-h-screen pb-8`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
