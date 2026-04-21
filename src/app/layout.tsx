import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laskowski.studio"),
  title: {
    default: "Laskowski.studio — Szymon Laskowski",
    template: "%s · Laskowski.studio",
  },
  description:
    "Studio by Szymon Laskowski. Editorial web, quiet detail. Walk the floor.",
  openGraph: {
    title: "Laskowski.studio — Szymon Laskowski",
    description:
      "Studio by Szymon Laskowski. Editorial web, quiet detail. Walk the floor.",
    url: "https://laskowski.studio",
    siteName: "Laskowski.studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laskowski.studio — Szymon Laskowski",
    description:
      "Editorial web, quiet detail. A studio of one, run by Szymon Laskowski.",
  },
  keywords: [
    "Szymon Laskowski",
    "Simon Laskowski",
    "Laskowski.studio",
    "front-end developer",
    "web design Poland",
    "Next.js developer",
    "editorial web",
    "brutalist web design",
  ],
  authors: [{ name: "Szymon Laskowski" }],
  creator: "Szymon Laskowski",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
