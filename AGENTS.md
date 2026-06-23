# Agent Guidelines

This repo is the website for LUCAS : Wedding Filmmaker.

Before making copy, design, SEO, or brand-facing changes, read `docs/brand-guidelines.md` and follow it as the internal source of truth.

## Brand Rules

- Write as Lucas, a soloist. Use "I", "my", and "me". Do not use "we" for the studio.
- Keep the tone honest, nostalgic, precise, lightly dry, and warm.
- Prefer "collections" or "commissions" over "packages".
- Avoid: "special day", "bride and groom", "capture", "packages", "cinematic", "storytelling", and "book now".
- Public-facing copy can be poetic, but metadata and SEO text should stay literal and useful.

## Privacy Rules

- `docs/brand-guidelines.md` may contain internal/private details.
- `public/llms.txt` is public at `/llms.txt`.
- Do not expose private pricing, especially The Purist at $4,400 + HST, in public metadata, public schema, public marketing pages, or `public/llms.txt` unless Lucas explicitly asks for it.

## Implementation Rules

- Use the existing Next.js App Router, Tailwind CSS, Framer Motion, and Lucide React patterns.
- Keep visual changes consistent with the editorial Zissou system: cream canvas, navy ink, orange accents, thin borders, ledger labels, restrained motion.
- Preserve design unless the request is explicitly a redesign.
- For invisible SEO improvements, preserve the front-end appearance and verify rendered output when practical.

## Verification

- Run `npm run build` after meaningful code, routing, metadata, or schema changes.
- For rendered UI changes, verify in the browser at the affected route and check desktop/mobile when layout risk exists.
