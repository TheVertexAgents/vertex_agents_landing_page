<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Landing Page — Agent Memory

> Load `vertex-marketing/AGENTS.md` first, then this file for landing page work.

---

## What This Is

The **Vertex Sentinel public landing page** — a Next.js 15 (App Router) application. This is the primary conversion surface for:
- Developers evaluating the Sentinel SDK
- Investors and partners researching Vertex Agents
- Community members interested in the $SENTINEL token

---

## Dev Setup

```bash
cd vertex-marketing/landing-page
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (CI only)
npm run lint         # ESLint check
```

---

## Directory Structure

```
landing-page/
├── app/             ← Next.js App Router pages and layouts
├── public/          ← static assets (images, fonts, favicons)
├── docs/            ← landing page specific documentation
└── blog_posts.md    ← blog content drafts
```

---

## Messaging Pillars

When writing or editing copy, anchor to these three messages (in priority order):

1. **"Trust the contract, not the company"** — verifiable on-chain guardrails vs. black-box backends
2. **"Fail-closed execution"** — any failure halts, no silent fund movements
3. **"EIP-712 signed intents"** — cryptographic proof for every trade decision

Reference `../../docs/landing-page-messaging-brief.md` and `../../docs/msg-improvement-brief.md` for full messaging guidance.

---

## Agent Rules for Landing Page Work

1. **Read the Next.js docs first.** App Router conventions (layouts, server components, `use client`) differ significantly from Pages Router. Check `node_modules/next/dist/docs/` before creating new routes.
2. **No inline styles.** Use CSS modules or the existing styling approach already in the codebase.
3. **Copy changes require human review** before deploying — all claims must match `vertex-sentinel/README.md`.
4. **Images:** generate with AI tooling if placeholders are needed; do not use external hotlinks.
5. **SEO:** every page needs a unique `<title>` and `<meta name="description">` via the Next.js `metadata` export.

---

## After Making Changes

```bash
npm run build        # verify no build errors
npm run lint         # verify no lint errors
git add -A && git commit -m "marketing(<slug>): <description>"
git push
```

Then call:
```python
kanban_complete(
    summary="<what was changed on the landing page>",
    metadata={
        "changed_files": ["app/page.tsx", "..."],
        "verification": "npm run build passed, no lint errors",
        "residual_risk": "none"
    }
)
```
