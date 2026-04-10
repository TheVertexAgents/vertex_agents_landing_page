export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "rise-of-the-rogue-agent",
    title: "Rise of the Rogue Agent: Why AI Trading Needs Verifiable Guardrails",
    excerpt: "Exploring the critical failure modes for autonomous trading agents: AI hallucinations, model compromise, and the advisory gap in crypto risk management.",
    date: "April 9, 2026",
    author: "Vertex Sentinel Team",
    tags: ["AI Trading Security", "DeFi Safety", "Agentic AI", "On-Chain Guardrails"],
    readTime: "5 min read",
    content: `
      <p>As autonomous AI agents now manage over $1 billion in on-chain assets (with projections exceeding $100 billion by 2028), the surface area for catastrophic failure has shifted from human error to algorithmic instability. The “Rogue Agent” problem isn’t science fiction—it’s a documented, multi-vector security challenge that current DeFi infrastructure remains ill-equipped to handle. Real-world incidents in 2025–2026 have already produced $45 million+ breaches tied directly to AI trading agent vulnerabilities, alongside high-profile cases of agents depositing into honeypots, misrouting funds due to state misinterpretation, or spiraling into costly recursive loops.</p>
      
      <div class="my-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
        <img src="/rogue-agent-bridge.png" alt="Vertex Sentinel Guardrails" class="w-full h-auto" />
        <p class="text-center text-xs text-slate-500 mt-4 italic font-tech uppercase tracking-widest">Fig 1.0: Vertex Sentinel Guardrails</p>
      </div>

      <h2 class="text-white text-2xl font-bold mt-12 mb-6 uppercase tracking-tight">The Three Pillars of Agent Failure</h2>

      <h3 class="text-brand-purple text-lg font-tech mt-8 mb-4 uppercase tracking-widest">01_AI Hallucinations</h3>
      <p>Even when logic is sound, LLMs can fabricate non-existent liquidity pools, misread complex smart contract ABIs, or generate plausible but false market data. The result? “Correctly executed” trades that trigger massive economic loss—exactly what happened when agents hallucinated safe counterparties or misjudged on-chain state.</p>

      <h3 class="text-brand-purple text-lg font-tech mt-8 mb-4 uppercase tracking-widest">02_Model Compromise</h3>
      <p>Prompt injection, context manipulation, or malicious fine-tuning can turn a trusted agent against its own treasury. Princeton researchers demonstrated persistent memory-injection attacks that bypass even state-of-the-art safeguards, enabling agents to drain wallets or approve unauthorized transfers. Real deployments have seen agents socially engineered or tricked into self-sabotage.</p>

      <h3 class="text-brand-purple text-lg font-tech mt-8 mb-4 uppercase tracking-widest">03_The Advisory Gap</h3>
      <p>Traditional risk systems are reactive and human-scale. AI agents operate at millisecond speeds across fragmented chains, executing before any off-chain monitor can intervene. Most current setups lack proactive, external verification—leaving agents to self-police their own logic.</p>

      <h2 class="text-white text-2xl font-bold mt-12 mb-6 uppercase tracking-tight">Enter The Sentinel Layer</h2>
      <p>Research across DeFi exploits, agentic security audits, and on-chain telemetry confirms the only scalable path to safe autonomous deployment is a decoupled verification layer that lives outside the model’s own reasoning. Vertex Sentinel implements this as a cryptographically enforced guardrail: it intercepts every trade intent (via EIP-712 signed messages), enforces predefined economic safety parameters on-chain, and produces verifiable validation artifacts before execution.</p>

      <p class="mt-6">Even if the upstream AI hallucinates, gets prompt-injected, or is fully compromised, the Sentinel Layer blocks violations of core risk rules—position limits, slippage thresholds, allowed counterparties, circuit breakers, and more. This isn’t another advisory dashboard; it’s a trust-minimized, on-chain policy engine purpose-built for the agentic era.</p>

      <p class="mt-8 p-6 bg-brand-purple/10 border border-brand-purple/20 rounded-lg text-brand-purple font-tech text-sm uppercase tracking-wider text-center">
        The age of blind AI trading is over. Verifiable guardrails aren’t optional—they’re the new minimum for any agent managing real capital.
      </p>
    `
  },
  {
    id: 2,
    slug: "deep-dive-into-erc-8004",
    title: "Deep Dive into ERC-8004: Standardizing Verifiable AI Intent on Ethereum",
    excerpt: "Standardization is the bedrock of interoperability. ERC-8004 provides the framework for Verifiable Intent, allowing AI agents to move seamlessly across the Ethereum ecosystem.",
    date: "April 10, 2026",
    author: "Vertex Sentinel Team",
    tags: ["ERC-8004", "Ethereum Protocol", "Standardization"],
    readTime: "4 min read",
    content: `
      <p>Standardization is the bedrock of interoperability. For AI agents to move seamlessly across the Ethereum ecosystem, we need a universal way to define what an agent is and what it is allowed to do. ERC-8004 provides the framework for this "Verifiable Intent."</p>

      <div class="my-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
        <img src="/EIP-712.png" alt="EIP-712 Typed Signature Verification" class="w-full h-auto" />
        <p class="text-center text-xs text-slate-500 mt-4 italic font-tech uppercase tracking-widest">Fig 2.0: EIP-712 Typed Signature Verification Flow</p>
      </div>

      <h2 class="text-white text-2xl font-bold mt-12 mb-6 uppercase tracking-tight">Identity Meets Intent</h2>
      <p>ERC-8004 introduces a standard for signing agent actions. Using EIP-712 typed data, an agent can present a cryptographically signed "Intent" that specifies exactly which assets it wants to move and under what conditions. This signature is then verified against a registered Agent Profile on the Sentinel Layer.</p>

      <h2 class="text-white text-2xl font-bold mt-12 mb-6 uppercase tracking-tight">Why It Matters for Institutions</h2>
      <p>Institutional liquidity requires absolute certainty. By adopting ERC-8004, Vertex Sentinel allows institutions to set granular permissions—such as "Max Slippage 0.5%" or "Only Trade WBTC/ETH"—that are enforced at the protocol level, not just the application level.</p>
    `
  },
  {
    id: 3,
    slug: "ai-execution-security-kraken-updated",
    title: "AI Execution Security: Bridging LLMs to Kraken via Native MCP and Sentinel-Protected CLI",
    excerpt: "Exploring Kraken's native MCP support and how Vertex Sentinel provides a production-grade, zero-trust execution layer for institutional trading.",
    date: "April 12, 2026",
    author: "Vertex Product Team",
    tags: ["MCP Security", "Kraken CLI", "AI Agent Execution", "Zero-Trust Trading"],
    readTime: "7 min read",
    content: `
      <p>Connecting a Large Language Model directly to an exchange API is like handing a blank check to a genius toddler. It’s powerful—but dangerously exposed. With Kraken’s official CLI now shipping native Model Context Protocol (MCP) support (launched March 11, 2026), the barrier to AI-native trading has dropped dramatically. Yet raw MCP access still carries multi-vector risks: prompt-injected order manipulation, credential leakage, and unverified execution paths that have already led to documented agent exploits across CEX integrations.</p>

      <div class="my-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <img src="/kraken.jpeg" alt="Kraken MCP Integration" class="w-full h-auto" />
        <p class="text-center text-xs text-slate-500 mt-4 italic font-tech uppercase tracking-widest">Fig 3.0: Vertex Sentinel + Kraken Native MCP Architecture</p>
      </div>

      <p>At Vertex, we’ve solved this with the <strong>Sentinel Bridge</strong>—a production-grade, zero-trust execution layer that turns Kraken’s native MCP server into a fully guarded, institution-ready trading gateway.</p>

      <h2 class="text-white text-2xl font-bold mt-12 mb-6 uppercase tracking-tight">The MCP Advantage</h2>
      <p>MCP (open-sourced by Anthropic in November 2024 and now the de-facto “USB-C for AI agents”) standardizes how LLMs request actions from external tools without ever touching credentials or raw APIs. Kraken’s CLI includes a built-in MCP server that exposes 150+ self-describing commands (spot, futures, staking, paper trading, market data) over stdio—no custom wrappers, nonce management, or HMAC signing required.</p>

      <p class="mt-4">The LLM simply requests an action; the MCP server translates it into a signed Kraken transaction. Vertex Sentinel takes this further: every MCP tool call is intercepted <em>before</em> execution. The request is validated against the agent’s ERC-8004 on-chain profile, real-time risk parameters (max slippage, position limits, allowed pairs, circuit breakers), and Sentinel Layer guardrails. Only then is the transaction signed and submitted.</p>

      <p class="mt-4">This creates a clean separation: the LLM reasons, the MCP server proposes, and Sentinel enforces—eliminating the “blank check” problem entirely.</p>

      <h2 class="text-white text-2xl font-bold mt-12 mb-6 uppercase tracking-tight">Hardware-Level Isolation</h2>
      <p>The actual execution keys never touch the environment where the AI model runs. Vertex deploys isolated key management via cloud KMS (AWS KMS, Google Cloud KMS) or hardware-backed HSM/TEE environments. The MCP server and Sentinel Bridge operate in a hardened, network-isolated execution zone. Even if the upstream LLM is fully compromised via prompt injection or model poisoning, the keys remain cryptographically unreachable. This physical and logical barrier between the “intelligence layer” and the “value-transfer layer” is now table stakes for any agent handling live capital on Kraken.</p>

      <p class="mt-8 p-6 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-brand-cyan font-tech text-sm uppercase tracking-wider text-center">
        The result? AI agents gain lightning-fast, native Kraken access while institutions and high-net-worth users get verifiable, auditable, and economically safe execution.
      </p>
    `
  }
];
