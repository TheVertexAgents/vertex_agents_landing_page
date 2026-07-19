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
  title: "Vertex Sentinel | Fail-Closed Execution for AI Agents",
  description: "Vertex Sentinel is the execution-risk layer for autonomous AI agents: EIP-712 intents, on-chain guardrails, and verifiable execution with zero private-key delegation.",
  keywords: ["AI Agents", "Agent Security", "EIP-712", "ERC-8004", "Verifiable Execution", "Smart Contract Guardrails", "Non-Custodial Agents"],
  authors: [{ name: "Vertex Sentinel Team" }],
  openGraph: {
    title: "Vertex Sentinel | Fail-Closed Execution for AI Agents",
    description: "Cryptographic intents, on-chain guardrails, and verifiable execution for autonomous AI agents — no private-key delegation.",
    url: "https://sentinel.vertexagents.ai",
    siteName: "Vertex Sentinel",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Vertex Sentinel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Sentinel | Fail-Closed Execution for AI Agents",
    description: "Execution-risk layer for autonomous AI agents: EIP-712, on-chain policy, and verifiable outcomes.",
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
