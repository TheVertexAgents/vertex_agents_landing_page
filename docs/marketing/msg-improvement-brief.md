# Vertex Marketing: Messaging Improvement Brief
**Audience:** Investor one-pager + Landing page  
**Scope:** messenger gaps extracted from `vertex-sentinel`, `vertex-marketing/campaign`, `vertex-marketing/landing-page` README/docs.

---

## 1) Current Positioning

- **What we say:** "The Sentinel Layer" — a trustless, fail-closed, EIP-712 signed guardrail for autonomous AI trading agents, with ERC-8004 identity and live trade proof.
- **Where it lands best:** docs/README (developer/institutional) and hackathon artifacts (award credibility).
- **Where it loses people:** landing-page hero is visually strong but semantically vague; campaign README is operational, not narrative.

---

## 2) Strengths (keep them, make them earlier)

- Verified live execution proof with on-chain contract address.
- ERC-8004 + EIP-712 + fail-closed architecture is differentiated and defensible.
- Clear feature-level alternative to "black-box key delegation."
- Real hackathon recognition (LabLab.ai Special Award) adds third-party validation.

---

## 3) Weak Spots

- **No target/pain front-loaded:** investors often read the hero first; current copy describes a "layer," not the risk it removes.
- **CTAs oriented to explorers, not buyers/investors:** `INITIATE_GITHUB` / `EXPLORE_ECOSYSTEM` are developer conveniences, not investor/customer next steps.
- **Tokenization/campaign noise:** campaign docs inject $SENTINEL / airdrop language ahead of any hardened tokenomics document, which creates unforced credibility risk.
- **Missing economic framing:** no clear statement of who pays, for how much, and why incumbents will adopt/partner.

---

## 4) Recommended Changes

### Landing Page – Hero
- **Headline:** "Stop letting AI agents hold your keys." or "The fail-closed security layer for AI trading agents."
- **Subhead:** "Authorize every trade with EIP-712 signatures. Enforce on-chain circuit breakers. Keep keys private." Add one metric/claim: "Verified on Sepolia with live execution proof."
- **CTAs:** add investor/client actions.
  - Primary: `REQUEST BRIEF` (link to deck/typeform)
  - Secondary: `VIEW LIVE EXECUTION` (keep GitHub/trade proof), `TALK WITH US`

### Landing Page – Above-the-Fold additions
- Add a 1-line business model + traction line: e.g., "Built for exchanges, brokerages, and agent networks; SDK + per-trade authorization model."
- Place award badge near headline but decouple it from token/campaign language.

### Investor One-Pager
- Lead with problem → solution → proof unit economics hint.
- Section order: Pain, Promise, Proof, Market, Model, Ask.
- Keep 3 bullets max under each; remove operational campaign details.
- Add a "Why Now" bullet: non-custodial agents + regulatory focus on key delegation.

---

## 5) Recommended Copy Blocks

### Headline (Hero)
> "Fail-closed execution for autonomous AI trading."

### Subhead
> "EIP-712 signed intents, on-chain circuit breakers, zero private-key delegation."

### CTA Suite
> `REQUEST BRIEF` · `VIEW LIVE TRADES` · `READ SDK`

### One-Paragraph Investor Hook
> Vertex Sentinel is replacing black-box key delegation with the first auditable, non-custodial authorization layer for autonomous trading agents. Verified with live execution on Sepolia and recognized by LabLab.ai for best compliance/risk guardrails, it combines EIP-712 intent signing with on-chain RiskRouter enforcement — turning “trust the company” into “trust the contract.” We are positioning for integration with exchange infrastructure, brokerages, and agent SDK stacks, bringing a per-trade authorization and identity layer into a market where key compromise and hallucinated orders alone are multi-billion-dollar failure modes.

---

## 6) Delivery
- `docs/msg-improvement-brief.md`
