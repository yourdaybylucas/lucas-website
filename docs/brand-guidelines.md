# LUCAS Brand Guidelines

Internal source of truth for LUCAS : Wedding Filmmaker.

This file is for people and coding agents working inside the repo. It can include private positioning and pricing notes. Do not assume everything here belongs on public pages, public structured data, or `public/llms.txt`.

## Brand

- Brand name: LUCAS : Wedding Filmmaker
- Owner and soloist: Lucas Bulger
- Category: wedding filmmaker, digital creator, super 8mm and digital wedding cinema
- Tagline: the art of noticing.
- Home base: Guelph, Ontario
- Market: Ontario and worldwide destination commissions
- Positioning: an artisan soloist who skips the heavy production footprint and is easy to hang out with.
- Pronouns: always use first person singular for Lucas copy: "I", "my", "me". Never use "we" for the studio.

## Voice

The voice is effortless cool: geometric, precise, inventory-minded, slightly dry, and still warm. Think structured field notes with a human pulse.

Use:

- honest
- nostalgic
- the day
- you both
- bottle
- collect
- notice
- collections
- commissions
- narrative
- inquire
- grounded
- unforced
- easy company
- keen eye

Avoid:

- special day
- bride and groom
- capture
- packages
- cinematic
- storytelling
- book now
- vendor
- luxury language that feels exclusionary
- corporate SaaS language
- anything that sounds like a production company trying too hard

## Formatting

- Casual copy, captions, notes, and softer brand copy can use lowercase for approachability.
- Website headings may use uppercase when the design calls for it.
- Metadata, dates, locations, and tags use uppercase with wide tracking.
- Keep punctuation restrained.
- Prefer clean, literal SEO metadata over overly poetic metadata.

## Manifesto

i don't run a production set, and i don't shoot for the algorithm. my approach is simpler: i'm there to celebrate with you. i blend in like a friend with a camera, bringing easy energy to the room while keeping a keen eye on the honest frames. the sudden laughs, the heavy tears, the in-between magic. the goal isn't to direct a perfect script; it's to hang out, let the day breathe, and bottle exactly how it all felt, entirely unforced and uniquely yours.

## Home Page Distillation

not a production. not content. just easy company and a keen eye.

i'm there to hang out, keep things grounded, and collect the honest frames: the laughs, the tears, and exactly how the day actually felt.

## Vendor Blurb

lucas bulger - honest, nostalgic wedding cinema. blending digital and super 8mm, he skips the heavy production footprint to simply hang out, keep things grounded, and document the day exactly as it feels. built for couples who prioritize presence over perfection.

## Collections

Current public-facing collection entry point:

- Public collections page: commissions begin at $5,800.
- Public collection names: The Essential, The Analog, The Weekend.
- Avoid the word "packages" in public copy. Use "collections" or "commissions".

Current private/internal collection inventory:

- Vol. 00: The Purist, $4,400 + HST. Private collection. Analog heavy. 3-minute super 8mm core film, documentary ceremony edit, documentary reception edit, and a 60-second digital reel delivered in one week.
- Vol. 01: The Essential, $5,800 + HST. Digital only. 5-minute narrative film, documentary ceremony edit, documentary reception edit.
- Vol. 02: The Analog, $6,800 + HST. Hybrid + physical. Includes digital + super 8mm direction, 3-minute super 8mm film, and a short digital reel.
- Vol. 03: The Weekend, $8,200 + HST. Multi-day hybrid. Welcome party + the day, weekend narrative film, and physical artifacts.
- Additions: extra super 8mm roll, additional time.

Private pricing rule:

- The Purist and any private pricing details belong on private/proposal surfaces unless Lucas explicitly asks to publish them.
- Do not add private pricing to public metadata, public schema, public sitemap notes, public marketing copy, or `public/llms.txt` without explicit approval.

## Logistics

- Retainer: 1/3 retainer to lock the date.
- Balance: remaining balance due two weeks before the day.
- Travel: Ontario travel included unless a specific proposal says otherwise. Worldwide destination commissions are available.
- Delivery: average turnaround around 7 weeks, with a safe maximum around 12 weeks.
- Workflow: no outsourcing. Lucas handles the coverage and editing.
- Second shooters: Lucas documents most weddings solo. A trusted peer can be added for complex timelines.
- Inclusivity: absolutely inclusive across religion, gender, race, orientation, and family structure.

## Visual System

The design language is Zissou editorial: nostalgic, geometric, text-heavy, high contrast, lo-fi luxury.

Palette:

- Canvas: French Buttercream, `#F4ECD8`, used as the main background.
- Ink: Midnight Denim, `#182836`, used for primary text and dark UI.
- Accent: Burnt Tangerine, `#D65A31`, used sparingly for energy, dots, lines, active states.
- Texture: Dried Sage, `#94A187`, used for section atmosphere, not body text.
- Structure: Washed Denim / Slate, `#7B8B9A`, used for metadata, secondary text, borders, inactive UI.

Typography:

- Headlines: General Sans, bold, uppercase, normal tracking.
- Sub-headlines and UI: General Sans, medium, lowercase when brand tone calls for it.
- Metadata: General Sans, regular, uppercase, wide tracking.
- Soul copy, body, narrative notes, and quotes: Cormorant Garamond.
- Golden rule: never bold the serif. Never italicize the sans.

Layout:

- Prefer editorial grids, ledgers, inventory rows, thin borders, archival labels, and restrained motion.
- Avoid overly rounded cards, generic SaaS blocks, bubbly gradients, and stock-photo polish.
- Let the work feel designed but not precious.

## Technical Stack

- Framework: Next.js App Router.
- Styling: Tailwind CSS.
- Animation: Framer Motion.
- Icons: Lucide React.
- Fonts: General Sans local files and Cormorant Garamond via Next font.
- Public AI context: `public/llms.txt`.
- Internal brand context: this file.
- AI coding guidance: root `AGENTS.md`.

## SEO And Public Context Rules

- Public pages should use literal, useful metadata even when visible page copy is more poetic.
- Hidden `sr-only` H1s are acceptable when they truthfully describe the page and preserve the design.
- Keep public structured data factual and non-private.
- Private/utility pages should stay noindex where appropriate.
- `public/llms.txt` is public. Keep it accurate, public-safe, and free of private-only offers unless Lucas explicitly wants those visible.

## Copy Check Before Publishing

Before shipping new public copy, ask:

- Does this sound like Lucas speaking as "I", not a studio saying "we"?
- Did I avoid the banned wedding-industry words?
- Is the factual information public-safe?
- Is the SEO metadata clearer than the poetic front-end copy?
- Does the visual treatment respect the existing editorial system?
