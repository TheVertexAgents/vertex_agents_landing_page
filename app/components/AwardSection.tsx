"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, ExternalLink, ShieldCheck } from "lucide-react";

export default function AwardSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Visual Side */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full border border-yellow-500/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-yellow-500/10 border-dashed"
              />

              {/* Main Trophy Icon */}
              <div className="relative z-10 p-12 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 backdrop-blur-sm shadow-[0_0_50px_rgba(234,179,8,0.1)]">
                <Trophy className="w-32 h-32 text-yellow-500" strokeWidth={1} />

                {/* Floating accolades */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 p-3 rounded-lg bg-black border border-yellow-500/30 shadow-lg"
                >
                  <Award className="w-6 h-6 text-yellow-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 p-3 rounded-lg bg-black border border-yellow-500/30 shadow-lg"
                >
                  <Star className="w-6 h-6 text-yellow-500" />
                </motion.div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/5">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="font-tech text-[10px] text-yellow-500 tracking-[0.2em] uppercase">Champion Status</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-tech tracking-tight mb-6">
              Best Trustless <br />
              <span className="text-yellow-500">Trading Agent</span>
            </h2>

            <p className="font-mono text-sm text-slate-400 mb-8 leading-relaxed max-w-lg">
              Vertex Sentinel was awarded 1st Place at the Lablab.ai AI Trading Agents Hackathon.
              Our solution was recognized for pioneering the [fail-closed] security layer for autonomous
              agents, integrating ERC-8004 identity and on-chain risk guardrails.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors">
                <div className="font-tech text-[10px] text-yellow-500 mb-2 uppercase tracking-widest">Main Prize</div>
                <div className="text-lg font-tech">$10,000 IN $SURGE TOKENS</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors">
                <div className="font-tech text-[10px] text-yellow-500 mb-2 uppercase tracking-widest">Host</div>
                <div className="text-lg font-tech italic">lablab.ai</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://lablab.ai/ai-hackathons/ai-trading-agents/#winners"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-yellow-500 text-black font-tech text-[10px] tracking-[0.1em] rounded-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all"
              >
                VIEW_LEADERBOARD
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-sm font-tech text-[10px] tracking-[0.1em] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-yellow-500" />
                VERIFIED_ACHIEVEMENT
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HUD Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </section>
  );
}
