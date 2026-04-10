import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sentinel.vertexagents.ai'),
  title: "The Sentinel Layer | Verifiable Risk Management for AI",
  description: "Fail-closed, non-custodial, and on-chain risk management for AI trading agents. Secure your autonomous capital with ERC-8004 and EIP-712 verifiable intents.",
  keywords: ["AI Trading", "Blockchain Security", "ERC-8004", "DeFi Safety", "Autonomous Agents", "Risk Management", "Ethereum"],
  authors: [{ name: "Vertex Sentinel Team" }],
  openGraph: {
    title: "The Sentinel Layer | Verifiable Risk Management for AI",
    description: "Fail-closed, non-custodial, and on-chain risk management for AI trading agents.",
    url: "https://sentinel.vertexagents.ai",
    siteName: "Vertex Sentinel",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Vertex Sentinel Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sentinel Layer | Verifiable Risk Management for AI",
    description: "Fail-closed, non-custodial, and on-chain risk management for AI trading agents.",
    images: ["/web-app-manifest-512x512.png"],
    creator: "@TheVertexAgents",
  },
  icons: {
    icon: '/web-app-manifest-192x192.png',
    shortcut: '/web-app-manifest-192x192.png',
    apple: '/web-app-manifest-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen w-full overflow-x-hidden bg-brand-dark flex flex-col">{children}</body>
    </html>
  );
}
