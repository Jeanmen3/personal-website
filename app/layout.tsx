// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jean Mendez, MD | Clinical Operations & Development",
  description:
    "Clinical operations leader translating strategy into execution: speed, quality, and control in complex programs.",
  openGraph: {
    title: "Jean Mendez, MD",
    description:
      "Clinical operations & development leader. Execution built for speed and control.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
