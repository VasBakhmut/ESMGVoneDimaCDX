# ESM Group website redesign

A content-rich Next.js App Router frontend for Essential Safety Measures Group.

The visual direction is architectural editorial: a spacious split hero, typographic service stories and one photographic process section. It deliberately avoids dashboard-style stat strips, generic SaaS cards and unverified claims. The small interface icons are local SVG components, so no icon-library dependency is required.

## Local setup

```bash
pnpm install
pnpm dev
```

## Production check

```bash
pnpm build
pnpm start
```

## Before launch

- Connect the quote form to the client’s email/CRM and add success/error states.
- Confirm all regulatory wording with the client’s qualified practitioner.
- Replace the privacy placeholder with an approved policy.
- Confirm FPA badge linking/usage and add the live member-directory URL.
- Add verified team bios, reviews, case studies and Google Maps embed.
- Confirm production domain, Search Console, analytics, consent and security headers.
- Convert supplied photography to final AVIF/WebP variants if the hosting pipeline does not do so.

The implementation includes route-level metadata, Organization + ProfessionalService schema, Service and FAQ schema, sitemap.xml, robots.txt, llms.txt, semantic headings and crawlable internal links.
