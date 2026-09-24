import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Phone } from "@/components/icons";
import { ComplianceNavigator } from "@/components/compliance-navigator";
import { buildingTypes, business, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Essential Safety Measures Melbourne | Passive Fire Protection",
  description: "Essential safety measures inspections, AESMR preparation, means of egress inspections and passive fire protection audits across Melbourne and Victoria.",
  keywords: ["essential safety measures Melbourne", "ESM inspections Melbourne", "passive fire protection Melbourne", "AESMR Victoria", "means of egress inspections", "system interface testing Melbourne"],
  alternates: { canonical: "/" },
};

const faqs = [
  { question: "What are essential safety measures in Victoria?", answer: "Essential safety measures are the fire and life-safety systems, features and procedures prescribed for a building. The exact measures and maintenance obligations are set by the building’s occupancy permit, maintenance determination and applicable Victorian regulations." },
  { question: "How often is an AESMR required?", answer: "An Annual Essential Safety Measures Report is prepared every year for buildings subject to essential safety measure maintenance requirements. It is supported by the building’s inspection, testing, maintenance and repair records." },
  { question: "How often should means of egress be inspected?", answer: "Many Victorian buildings require quarterly means of egress inspections. The governing occupancy permit, maintenance schedule or determination must be reviewed to confirm the frequency for a specific building." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return <div className="market-home">
    <section className="market-hero">
      <Image className="market-hero__art" src="/images/esm-organic-hero-v2.png" alt="" fill priority sizes="100vw"/>
      <div className="market-hero__image">
        <Image src="/images/site-inspection.jpg" alt="High-rise residential and commercial buildings requiring essential safety measures inspections in Melbourne" fill priority quality={92} sizes="(max-width: 900px) 100vw, 58vw"/>
      </div>
      <div className="market-hero__shade"/>
      <div className="market-shell market-hero__content">
        <div className="market-hero__copy">
          <p className="market-kicker">Essential safety measures · Melbourne & Victoria</p>
          <h1>Building compliance.<br/><span>Clearly handled.</span></h1>
          <p>Independent essential safety measures inspections, AESMR preparation and passive fire protection audits for Victorian commercial and residential buildings.</p>
          <div className="market-actions">
            <Link className="market-button" href="/get-a-quote">Request an assessment <Arrow/></Link>
            <a className="market-button market-button--outline" href={business.phoneHref}><Phone/> {business.phone}</a>
          </div>
          <div className="market-proof">
            <Image src="/images/fpa-bronze.jpg" alt="FPA Australia Bronze Member" width={650} height={325}/>
            <p><strong>FPA Australia Bronze Member</strong><span>Oakleigh South office · Supporting buildings across Victoria</span></p>
          </div>
        </div>
      </div>
      <aside className="market-hero__panel" aria-label="Key compliance services">
        <p>Specialist support</p>
        <Link href="/services/annual-essential-safety-measures-report">AESMR preparation <Arrow/></Link>
        <Link href="/services/means-of-egress-inspections">Quarterly egress inspections <Arrow/></Link>
        <Link href="/services/passive-fire-protection-audits">Passive fire audits <Arrow/></Link>
      </aside>
    </section>

    <section className="market-intro market-shell">
      <div className="market-intro__heading">
        <p className="market-kicker market-kicker--dark">Victorian building compliance specialists</p>
        <h2>Know what is required.<br/>Know what happens next.</h2>
      </div>
      <div className="market-intro__copy">
        <p>ESM Group helps building owners, owners corporations, property managers and facilities teams meet their essential safety measure obligations.</p>
        <p>We review the documents governing the building, inspect the relevant measures and turn the evidence into clear reporting and practical action.</p>
        <Link className="market-text-link" href="/about">About ESM Group <Arrow/></Link>
      </div>
      <div className="market-facts" aria-label="ESM Group facts">
        <div><strong>8</strong><span>Specialist compliance pathways</span></div>
        <div><strong>VIC</strong><span>Melbourne-based, statewide support</span></div>
        <div><strong>223</strong><span>Building Regulations AESMR requirement</span></div>
      </div>
    </section>

    <ComplianceNavigator/>

    <section className="market-services" id="services">
      <div className="market-shell">
        <div className="market-section-head">
          <div><p className="market-kicker market-kicker--dark">Essential safety measure services</p><h2>Inspection, evidence<br/>and compliance support.</h2></div>
          <p>Every service has its own scope, regulatory context and reporting pathway—so every service has its own dedicated page.</p>
        </div>
        <div className="market-service-grid">
          {services.map((service, index) => <article className="market-service-card" key={service.slug}>
            <div className="market-service-card__top"><span>{String(index + 1).padStart(2,"0")}</span><span>Melbourne · Victoria</span></div>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <ul>{service.who.slice(0,2).map((item) => <li key={item}>{item}</li>)}</ul>
            <Link href={`/services/${service.slug}`}>View service details <Arrow/></Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="market-sectors market-shell">
      <div className="market-sectors__visual">
        <Image src="/images/esm-site-audit.jpg" alt="Essential safety measure plant and fire system equipment inspected in a Victorian building" fill sizes="(max-width: 900px) 100vw, 45vw"/>
        <div><strong>Commercial & residential</strong><span>Building-specific scope, not a generic checklist</span></div>
      </div>
      <div className="market-sectors__content">
        <p className="market-kicker market-kicker--dark">Who we help</p>
        <h2>Compliance across complex Victorian buildings.</h2>
        <p>From high-rise owners corporations to hospitals, schools and industrial sites, we adapt the inspection and reporting scope to the building’s approved documents and operational realities.</p>
        <div className="market-sector-list">{buildingTypes.map((type) => <Link href="/who-we-help" key={type}>{type}<Arrow/></Link>)}</div>
      </div>
    </section>

    <section className="market-process">
      <div className="market-shell">
        <div className="market-section-head market-section-head--light">
          <div><p className="market-kicker">A clear compliance process</p><h2>From building records<br/>to practical action.</h2></div>
          <p>Our process makes responsibilities, evidence gaps and next steps easier to understand.</p>
        </div>
        <ol>
          <li><span>01</span><div><h3>Define the scope</h3><p>Review permits, maintenance schedules, determinations and the building’s current priorities.</p></div></li>
          <li><span>02</span><div><h3>Inspect and verify</h3><p>Assess relevant building elements, records and system outcomes against the agreed scope.</p></div></li>
          <li><span>03</span><div><h3>Report clearly</h3><p>Document findings with evidence, location details and priorities your team can use.</p></div></li>
          <li><span>04</span><div><h3>Support close-out</h3><p>Clarify actions, coordinate relevant parties and support reinspection where required.</p></div></li>
        </ol>
      </div>
    </section>

    <section className="market-resources market-shell">
      <div className="market-section-head">
        <div><p className="market-kicker market-kicker--dark">Compliance resources</p><h2>Direct answers for<br/>building owners.</h2></div>
        <p>Plain-English guidance built around the questions Victorian owners and facilities teams actually ask.</p>
      </div>
      <div className="market-resource-grid">
        <Link href="/resources/what-is-an-aesmr"><span>AESMR guide</span><h3>What is an Annual Essential Safety Measures Report?</h3><p>Owner obligations, annual reporting and the records behind a defensible AESMR.</p><b>Read the guide <Arrow/></b></Link>
        <Link href="/services/means-of-egress-inspections"><span>Inspection frequency</span><h3>How often are means of egress inspections required?</h3><p>Why many buildings inspect quarterly and which documents determine the requirement.</p><b>Get the answer <Arrow/></b></Link>
        <Link href="/services/defect-liability-period-audits"><span>New buildings</span><h3>What is a defect liability period ESM audit?</h3><p>Capture safety measure defects before the contractual rectification window closes.</p><b>Learn more <Arrow/></b></Link>
      </div>
    </section>

    <section className="market-faq market-shell">
      <div><p className="market-kicker market-kicker--dark">Frequently asked questions</p><h2>Essential safety measures,<br/>explained clearly.</h2></div>
      <div className="market-faq__list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div>
    </section>

    <section className="market-final-cta">
      <div className="market-shell"><div><p className="market-kicker">Essential safety measures Melbourne</p><h2>Let’s establish what<br/>your building needs.</h2></div><div><p>Tell us about the building, its use and your current compliance priority.</p><Link className="market-button market-button--light" href="/get-a-quote">Get a quote <Arrow/></Link></div></div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
  </div>;
}
