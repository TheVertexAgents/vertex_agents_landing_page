"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

// This is a simple reusable layout for legal pages
export default function LegalPageLayout({ title, content }: { title: string, content: string }) {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 bg-brand-dark text-slate-300">
      <Header />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-brand-cyan/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl w-full px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-8 uppercase tracking-tight">
            {title}
          </h1>

          <div className="prose prose-invert prose-slate max-w-none
            prose-headings:text-white prose-headings:font-tech prose-headings:uppercase prose-headings:tracking-widest
            prose-h2:text-brand-purple prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-brand-cyan prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-slate-400 prose-li:mb-2
            prose-strong:text-white prose-strong:font-bold
            prose-a:text-brand-cyan hover:prose-a:underline prose-a:transition-all">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col gap-1">
             <span className="font-tech text-[10px] text-slate-500 uppercase tracking-[0.2em]">Last_Updated</span>
             <span className="text-white font-tech text-xs uppercase tracking-widest">April 9, 2026</span>
          </div>

          <a
            href="mailto:contact@vertexagents.ai"
            className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-tech text-xs tracking-widest uppercase hover:bg-white/10 hover:border-brand-cyan/50 transition-all group flex items-center gap-3"
          >
            Contact_Legal_Ops
            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          </a>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
