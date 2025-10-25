import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Finds Company - Discover Your Perfect Products",
  description: "Premier digital marketing agency specializing in product discovery and brand growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
