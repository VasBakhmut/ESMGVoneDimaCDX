# Design QA

Reference: the supplied organic emergency-service landing page, adapted to ESM Group's golden-yellow identity, real building photography and compliance positioning.

## Static review

- Homepage contains a conversion-led hero, one compact facts strip, an interactive Compliance Navigator, all eight service cards, sectors, process, resources, FAQ and a closing CTA.
- Service cards contain descriptive copy, audience cues and direct links to dedicated service pages.
- The page no longer relies on dark navy section fields: ivory and pale-gold surfaces dominate, with navy reserved for text, selected states and the footer.
- Hero photography uses an organic capsule treatment over a generated project-local golden background asset; supporting sections use asymmetric rounded corners instead of uniform generic cards.
- All four Compliance Navigator panels and their internal links are present in the initial server-rendered HTML; client-side state changes only which panel is visually active.
- `llms.txt` lists all eight services with canonical URLs plus the key discovery pages for AI agents.
- Heading hierarchy is one H1 followed by section H2 headings.
- Primary navigation and CTAs use real routes and click-to-call links.
- Desktop, tablet and mobile rules are present, including reduced-motion support.
- TypeScript/TSX syntax parsing passed.

## Visual comparison

Performed against the user's already-running localhost server in the in-app browser. Desktop and 375px mobile layouts were checked against the supplied reference direction; the organic hero composition, rounded section language and light page balance remain intact at both sizes. All eight service cards render, Navigator tabs remain functional, and no console errors were found.

Final result: passed.
