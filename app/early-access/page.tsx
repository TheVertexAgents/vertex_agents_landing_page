"use client";

export default function EarlyAccess() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-3xl md:text-5xl font-tech tracking-tight text-white mb-6">Early Access</h1>
        <p className="font-mono text-sm text-gray-400 mb-10 max-w-2xl leading-relaxed">
          We’re opening limited access to integrators and operator groups who want verifiable execution for AI agents. Tell us your use case and we’ll follow up with onboarding steps.
        </p>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
          <input required placeholder="Name / team" className="w-full rounded-sm border border-white/10 bg-black/60 p-3 font-mono text-sm text-white placeholder:text-slate-500 focus:border-brand-cyan/40" />
          <input required type="email" placeholder="Email" className="w-full rounded-sm border border-white/10 bg-black/60 p-3 font-mono text-sm text-white placeholder:text-slate-500 focus:border-brand-cyan/40" />
          <input required placeholder="Company or project" className="w-full rounded-sm border border-white/10 bg-black/60 p-3 font-mono text-sm text-white placeholder:text-slate-500 focus:border-brand-cyan/40" />
          <textarea required placeholder="Use case: trading, payments, procurement, something else" className="w-full rounded-sm border border-white/10 bg-black/60 p-3 font-mono text-sm text-white placeholder:text-slate-500 focus:border-brand-cyan/40" />
          <button type="submit" className="rounded-sm border border-brand-cyan/40 bg-brand-cyan/5 px-6 py-3 font-tech text-[10px] tracking-[0.2em] text-brand-cyan transition-all hover:bg-brand-cyan hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
            REQUEST_ACCESS
          </button>
        </form>
      </div>
    </section>
  );
}
