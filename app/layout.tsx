import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ObjectSpread - Empowering Independent Researchers",
  description: "A community for curious minds, where independent researchers, students, and thinkers come together to explore ideas, publish papers, and make knowledge accessible to all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
