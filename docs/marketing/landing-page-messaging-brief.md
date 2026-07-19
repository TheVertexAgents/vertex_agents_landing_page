# Landing-Page Messaging Brief

## Current state
- `vertex-marketing/landing-page/README.md` is still default Next.js boilerplate.
- Public `vertex-sentinel/README.md` is strong technically, but still framed as an AI Trading Agents hackathon project.
- `vertex-marketing/campaign/README.md` is built around token-gated ignition perks / $SENTINEL airdrop narratives.

## Recommended positioning
**Vertex Sentinel — the fail-closed execution layer for autonomous AI agents.**

### Headline / hero
Vertex Sentinel
The fail-closed execution layer for autonomous AI agents.

### Subhead
Cryptographic intents, on-chain guardrails, and verifiable execution — so agents can act without exposing private keys or bypassing policy.

### Value bullets
- Non-custodial by design: agents sign intents, never keys
- On-chain enforcement: RiskRouter blocks violations before execution
- Audit-ready: every intent, signature, and decision is verifiable
- Integration-ready: MCP-native path, Kraken adapter, ERC-8004 identity

### Proof badges
- Lablab.ai Special Award — Best Compliance & Risk Guardrails
- Live Sepolia contract: RiskRouter + AgentRegistry + ValidationRegistry
- Verified execution logs + EIP-712 proof trail

### CTAs
- Build with Sentinel → SDK / docs / GitHub
- Request access → early integrator form
- Review security model → whitepaper + audit artifacts

### Developer vs investor split
Keep the existing trading dashboard / execution proof content in the public repo. Use this landing-page repo for the broader vendor/integrator narrative: SDK, compliance, and enterprise adoption.

## Landing page folder plan
- add `app/page.tsx` hero copy update
- add `app/features/page.tsx`
- add `app/investors/page.tsx`
- add `app/docs/page.tsx`
- add `public/assets/` logos/badges

## Investor docs to create
- `docs/investor-faq/one-pager.md` — already created
- `docs/investor-faq/competitive-positioning.md` — execution-layer wedge vs app-level security vendors
- `docs/investor-faq/early-customers.md` — MCP agent platforms, DeFi ops, fintech bots, Kraken ecosystem

## Campaign repo note
Move away from token-perk/galxe mechanics for investor-facing positioning. Treat that repo as community growth only, not primary investor narrative.
