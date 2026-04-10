"use client";

import React from "react";
import { Shield, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface IconProps {
  className?: string;
}

// Custom SVG for X / Twitter
const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.078z" />
  </svg>
);

// Custom SVG for Github
const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Custom SVG for Telegram
const TelegramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.6 2.9c-.3-.3-.8-.4-1.2-.3L2.6 8.1c-.6.2-.7.7-.3 1.1l3.3 3.2 1.9 6.1c.2.6.7.6 1 .4l2.7-2.1 4.5 3.1c.8.5 1.5.2 1.8-.8l2.2-11.2c.2-1-.2-1.6-.9-2zM10.4 14.6l-1.1-3.6 8.8-6.1-7.7 9.7z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-brand-dark border-t border-white/5 mt-24">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col items-start">
            <Link href="/" className="group flex items-center gap-3 mb-6">
               <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 group-hover:border-brand-cyan/50 transition-all duration-300">
                 <Shield className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                 <div className="absolute inset-0 rounded-lg bg-brand-cyan/10 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-tech text-xs tracking-[0.3em] text-white group-hover:text-brand-cyan transition-colors">SENTINEL</span>
                <span className="font-tech text-[8px] tracking-[0.1em] text-slate-500 group-hover:text-slate-300 transition-colors uppercase">BY_VERTEXAGENTS</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm md:text-sm leading-relaxed max-w-sm mb-6 font-tech uppercase">
              Fail-closed, non-custodial, and on-chain risk management for AI trading agents.
            </p>
          </div>

          {/* Related Links */}
          <div className="flex flex-col items-start gap-8">
            <div>
              <h3 className="text-white font-tech tracking-widest text-xs mb-6 flex items-center gap-2">
                ECOSYSTEM
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/#how-it-works" className="text-slate-400 hover:text-brand-cyan transition-colors font-tech text-xs flex items-center gap-2 group">
                    <ArrowUpRight className="w-3 h-3 text-brand-cyan/50 group-hover:text-brand-cyan" />
                    HOW_IT_WORKS
                  </Link>
                </li>
                <li>
                  <Link href="/#architecture" className="text-slate-400 hover:text-brand-cyan transition-colors font-tech text-xs flex items-center gap-2 group">
                    <ArrowUpRight className="w-3 h-3 text-brand-cyan/50 group-hover:text-brand-cyan" />
                    ARCHITECTURE
                  </Link>
                </li>
                <li>
                  <Link href="/#blog" className="text-slate-400 hover:text-brand-cyan transition-colors font-tech text-xs flex items-center gap-2 group">
                    <ArrowUpRight className="w-3 h-3 text-brand-cyan/50 group-hover:text-brand-cyan" />
                    BLOG_RESEARCH
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal & Social Column */}
          <div className="flex flex-col items-start gap-8">
            <div>
              <h3 className="text-white font-tech tracking-widest text-xs mb-6 flex items-center gap-2">
                LEGAL
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy-policy" className="text-slate-400 hover:text-brand-cyan transition-colors font-tech text-xs flex items-center gap-2 group">
                    <ArrowUpRight className="w-3 h-3 text-brand-cyan/50 group-hover:text-brand-cyan" />
                    PRIVACY_POLICY
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-slate-400 hover:text-brand-cyan transition-colors font-tech text-xs flex items-center gap-2 group">
                    <ArrowUpRight className="w-3 h-3 text-brand-cyan/50 group-hover:text-brand-cyan" />
                    TERMS_OF_SERVICE
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-white font-tech tracking-widest text-xs mb-6 uppercase">Connect</h3>
              <div className="flex items-center gap-3">
                <a href="https://x.com/TheVertexAgents" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-brand-cyan/50 hover:bg-brand-cyan/10 text-slate-400 hover:text-brand-cyan transition-all group relative" aria-label="X (formerly Twitter)">
                  <XIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 rounded-lg bg-brand-cyan/10 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://github.com/TheVertexAgents" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/50 hover:bg-white/10 text-slate-400 hover:text-white transition-all group relative" aria-label="GitHub">
                  <GithubIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 rounded-lg bg-white/10 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://t.me/vertexagents" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-brand-cyan/50 hover:bg-brand-cyan/10 text-slate-400 hover:text-brand-cyan transition-all group relative" aria-label="Telegram">
                  <TelegramIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 rounded-lg bg-brand-cyan/10 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
             <p className="text-slate-500 font-tech text-[10px] tracking-wider uppercase">
               © {new Date().getFullYear()} Sentinel by Vertex Agents. All rights reserved.
             </p>
          </div>
          <div className="flex items-center gap-6 text-slate-500 font-tech text-[10px] tracking-wider uppercase">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">PRIVACY_POLICY</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">TERMS_OF_SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
