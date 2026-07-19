export default function Investors() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h1 className="text-3xl md:text-5xl font-tech tracking-tight text-white mb-6">Investors</h1>
        <p className="font-mono text-sm text-gray-400 mb-12 max-w-3xl leading-relaxed">
          Vertex Sentinel is building the execution-risk layer for autonomous AI agents. We’re looking for operators and backers who want verifiable, fail-closed execution at protocol level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-sm bg-black/60 border border-white/5">
            <h3 className="text-sm font-tech tracking-wider text-white mb-3 uppercase">Why now</h3>
            <p className="font-mono text-xs text-gray-400 leading-relaxed">
              AI agents are moving from copilots to autonomous executors. Trust infrastructure is the bottleneck; existing solutions are advisory-only.
            </p>
          </div>
          <div className="p-8 rounded-sm bg-black/60 border border-white/5">
            <h3 className="text-sm font-tech tracking-wider text-white mb-3 uppercase">Our edge</h3>
            <p className="font-mono text-xs text-gray-400 leading-relaxed">
              EIP-712 intents, on-chain circuit breakers, ERC-8004 identity, live verified execution on Sepolia, and an MCP integration path.
            </p>
          </div>
          <div className="p-8 rounded-sm bg-black/60 border border-white/5">
            <h3 className="text-sm font-tech tracking-wider text-white mb-3 uppercase">Use cases</h3>
            <p className="font-mono text-xs text-gray-400 leading-relaxed">
              Agentic trading, payments/sub-agents, enterprise procurement bots, and any workflow where an AI action must be authorized and auditable.
            </p>
          </div>
          <div className="p-8 rounded-sm bg-black/60 border border-white/5">
            <h3 className="text-sm font-tech tracking-wider text-white mb-3 uppercase">Long-term vision</h3>
            <p className="font-mono text-xs text-gray-400 leading-relaxed">
              We’re designing for a post-quantum future: quantum-safe execution verification, hardened identity, and long-horizon auditability—without breaking today’s fail-closed guarantees.
            </p>
          </div>
          <div className="p-8 rounded-sm bg-black/60 border border-white/5">
            <h3 className="text-sm font-tech tracking-wider text-white mb-3 uppercase">Request</h3>
            <p className="font-mono text-xs text-gray-400 leading-relaxed mb-4">
              Use the form below or email us. We prioritize integrators over passive investors.
            </p>
            <a href="/early-access" className="rounded-sm border border-brand-cyan/40 bg-brand-cyan/5 px-5 py-2.5 font-tech text-[10px] tracking-[0.2em] text-brand-cyan transition-all hover:bg-brand-cyan hover:text-black">
              REQUEST_EARLY_ACCESS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
