"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function ShieldLogo() {
  return (
    <div className="relative mb-8 group">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-8 rounded-full border border-brand-cyan/20 border-dashed"
      />
      
      {/* Inner pulsing glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 bg-brand-cyan/20 rounded-full blur-2xl"
      />

      {/* The Shield Logo */}
      <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-black border border-brand-cyan/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] group-hover:border-brand-cyan/60 transition-colors duration-500 overflow-hidden">
        {/* Animated scanning line */}
        <motion.div
          animate={{ top: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-brand-cyan/40 shadow-[0_0_15px_rgba(0,240,255,0.8)] z-10"
        />

        <Shield className="w-10 h-10 md:w-12 md:h-12 text-brand-cyan group-hover:scale-110 transition-transform duration-500 relative z-20" />

        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 240, 255, 0.2) 1px, transparent 0)', backgroundSize: '10px 10px' }} />
      </div>

      {/* Data status labels */}
      <div className="absolute -right-20 top-0 hidden lg:block">
        <div className="flex flex-col gap-1 font-tech text-[8px] text-brand-cyan/60 tracking-widest uppercase">
          <span>auth_status: ok</span>
          <div className="w-12 h-1 bg-brand-cyan/20 rounded-full overflow-hidden">
             <motion.div
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="w-full h-full bg-brand-cyan"
             />
          </div>
        </div>
      </div>
      <div className="absolute -left-20 bottom-0 hidden lg:block text-right">
        <div className="flex flex-col gap-1 font-tech text-[8px] text-brand-purple/60 tracking-widest uppercase">
          <span>risk_check: pass</span>
          <div className="w-12 h-1 bg-brand-purple/20 rounded-full overflow-hidden ml-auto">
             <motion.div
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-full h-full bg-brand-purple"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
