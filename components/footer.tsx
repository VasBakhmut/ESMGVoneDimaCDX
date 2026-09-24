import Image from "next/image";
import Link from "next/link";
import { business, services } from "@/data/site";
export function Footer() { return <footer className="footer"><div className="shell footer-grid">
  <div><Image className="footer-logo" src="/images/esm-logo.png" alt="Essential Safety Measures Group" width={230} height={135}/><p>Independent essential safety measures and passive fire protection support for Victorian buildings.</p><p className="fine">ABN {business.abn} · ACN {business.acn}</p></div>
  <div><h2>Services</h2>{services.slice(0,5).map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}<Link href="/services">View all services</Link></div>
  <div><h2>Contact</h2><a href={business.phoneHref}>{business.phone}</a><a href={`mailto:${business.email}`}>{business.email}</a><address>{business.address}</address><p>{business.hours}</p></div>
  <div><h2>Navigate</h2><Link href="/about">About us</Link><Link href="/who-we-help">Who we help</Link><Link href="/resources">Resources</Link><Link href="/get-a-quote">Get a quote</Link><Link href="/privacy">Privacy</Link></div>
  </div><div className="shell legal">© {new Date().getFullYear()} Essential Safety Measures Group <span>Built for safer, more accountable buildings.</span></div></footer> }
