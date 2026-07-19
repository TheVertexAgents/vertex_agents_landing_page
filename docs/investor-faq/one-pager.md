# Investor One-Pager — Vertex Sentinel

Elevator pitch
Vertex Sentinel is the fail-closed execution layer for autonomous AI agents. We let agents sign cryptographic intents instead of handing over private keys, then enforce risk policies on-chain so compromised or hallucinating agents cannot drain funds or execute out-of-mandate actions.

Problem
Autonomous agents are about to touch money, data, and systems at scale. Current solutions still require full key delegation, offer no verifiable proof of intent, and provide no automatic circuit breakers when an agent misbehaves. One breach equals total loss.

Solution
A non-custodial pipeline: EIP-712 intent signing → on-chain RiskRouter validation → guarded execution. No private key handoff. No black-box agent behavior. Every decision is auditable.

Why now
- AI agents are moving from copilots to autonomous executors.
- Regulators, insurers, and enterprises need verifiable controls, not just prompt filtering.
- The market is splitting between “more capable agents” and “trust infrastructure.” We build the latter.
- Long-horizon trust is becoming a buying criterion: “verifiable execution today, quantum-safe tomorrow.”

How it works
1. Agent constructs a TradeIntent.
2. Agent signs off-chain via EIP-712; no private key exposure.
3. RiskRouter verifies identity, expiry, and circuit-breaker limits on-chain.
4. ExecutionProxy runs only approved intents; rejects are dropped unconditionally.

 traction
- Lablab.ai AI Trading Agents Hackathon — Special Award: Best Compliance & Risk Guardrails.
- Kraken MCP integration path for secure multi-agent trading execution.
- ERC-8004-aligned agent identity model.

Go to market
1. Audit-first developer content: publish contract proofs, failure-mode analysis, and verified logs.
2. SDK/adapter for MCP-based agent stacks.
3. Early integrations with DeFi and fintech agent platforms.

Ask
We are raising to complete the Security SDK, expand chain coverage, and onboard 3–5 enterprise agent platforms.

Contact
Email / website / demo repo: https://github.com/theVertexAgents/vertex-sentinel
