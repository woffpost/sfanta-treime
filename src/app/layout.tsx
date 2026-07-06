import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sfânta Treime — Parish",
  description: "Demo landing page — Sfânta Treime — Parish",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
