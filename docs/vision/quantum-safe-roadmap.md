# Quantum-Safe Roadmap

Purpose
This document describes how Vertex Sentinel evolves from current EIP-712 / ECDSA execution to a quantum-resistant agent execution layer, without breaking the existing fail-closed architecture.

Why this matters
- Autonomous agents accumulate durable authorization rights on-chain.
- Those authorizations, signatures, and audit receipts must remain unforgeable long after issuance.
- Post-quantum safety is therefore a trust requirement, not just a crypto upgrade.

What stays the same
- RiskRouter enforcement model
- Circuit breakers and deadline validation
- Fail-closed execution guarantee
- On-chain auditability and verifiable outcomes

What changes
- intent signing: migrate from ECDSA to a post-quantum signature scheme within the EIP-712 / typed-data model
- agent identity: support quantum-safe credentials in the ERC-8004 registry path
- receipts/audit logs: introduce quantum-resistant receipt chains for long-term verification
- key management: remove single-pass private-key delegation assumptions entirely

Milestones
- evaluate: select quantum-safe signature candidates compatible with intent authorization models
- pilot: run one chain/testnet deployment alongside current ECDSA flow
- integrate: support dual-mode signing and gradual migration
- harden: deprecate pure-ECDSA paths once production PQ primitives are audited and standardized

Marketing position
- current: "fail-closed execution for autonomous AI agents"
- near-term: "verifiable execution today, quantum-safe by design"
- long-term: "post-quantum verifiable agent execution"
