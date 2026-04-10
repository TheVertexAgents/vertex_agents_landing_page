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
        className="absolute -inset-4 rounded-full border border-brand-cyan/20 border-dashed"
      />
      
      {/* Inner pulsing glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-2 bg-brand-cyan/20 rounded-full blur-xl"
      />

      {/* The Shield Logo */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black border border-brand-cyan/30 shadow-[0_0_25px_rgba(0,240,255,0.15)] group-hover:border-brand-cyan/60 transition-colors duration-500 overflow-hidden">
        {/* Animated scanning line */}
        <motion.div
          animate={{ top: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-brand-cyan/40 shadow-[0_0_10px_rgba(0,240,255,0.8)] z-10"
        />

        <Shield className="w-5 h-5 md:w-6 md:h-6 text-brand-cyan group-hover:scale-110 transition-transform duration-500 relative z-20" />

        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 240, 255, 0.2) 0.5px, transparent 0)', backgroundSize: '5px 5px' }} />
      </div>

      {/* Data status labels */}
      <div className="absolute -right-12 top-0 hidden lg:block">
        <div className="flex flex-col gap-0.5 font-tech text-[6px] text-brand-cyan/60 tracking-widest uppercase">
          <span>auth_status: ok</span>
          <div className="w-8 h-0.5 bg-brand-cyan/20 rounded-full overflow-hidden">
             <motion.div
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="w-full h-full bg-brand-cyan"
             />
          </div>
        </div>
      </div>
      <div className="absolute -left-12 bottom-0 hidden lg:block text-right">
        <div className="flex flex-col gap-0.5 font-tech text-[6px] text-brand-purple/60 tracking-widest uppercase">
          <span>risk_check: pass</span>
          <div className="w-8 h-0.5 bg-brand-purple/20 rounded-full overflow-hidden ml-auto">
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
