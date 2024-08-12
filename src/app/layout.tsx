import type { Metadata } from "next";
import "./globals.css";
import Package from "../../package.json"

export const metadata: Metadata = {
  title: `Oscar Trollhag - CV (v${Package.version})`,
  description: "",
};

export default function BaseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
