import { Shield, Lock, FileSearch, Workflow, LineChart, GitBranch } from "lucide-react";

const FEATURES = [
  {
    title: "EIP-712 Intent Signing",
    description: "Agents cryptographically sign every intent off-chain. No private key handoff, no custodial trust required.",
    icon: Lock
  },
  {
    title: "On-Chain RiskRouter",
    description: "Smart contract policy enforcement for deadlines, volume caps, and identity checks before execution.",
    icon: Shield
  },
  {
    title: "Audit-Ready Trail",
    description: "Every intent, signature, validation result, and execution outcome is independently verifiable.",
    icon: FileSearch
  },
  {
    title: "Fail-Closed Execution",
    description: "Any validation failure halts execution. Rejected intents are dropped unconditionally.",
    icon: Workflow
  },
  {
    title: "MCP Integration Path",
    description: "Compatible with Model Context Protocol stacks, including Kraken-native execution adapters.",
    icon: GitBranch
  },
  {
    title: "Operator Dashboard",
    description: "Real-time audit feed, signature verification, and explainability for every agent decision.",
    icon: LineChart
  }
];

export default function Features() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-tech tracking-tight text-white mb-4">Features</h1>
          <p className="font-mono text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Execution controls for autonomous agents: cryptographic authorization, on-chain policy, and full verifiability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((item) => (
            <div key={item.title} className="p-8 rounded-sm bg-black/60 border border-white/5 hover:border-white/10 transition-colors">
              <item.icon className="w-6 h-6 text-brand-cyan mb-4" />
              <h3 className="text-sm font-tech tracking-wider text-white mb-2 uppercase">{item.title}</h3>
              <p className="font-mono text-xs text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
