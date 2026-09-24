"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Close, MenuIcon, Phone } from "./icons";
import { business, services } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="shell nav-row">
      <Link className="brand" href="/" aria-label="ESM Group home"><Image src="/images/esm-logo.png" alt="Essential Safety Measures Group" width={225} height={132} priority /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <Close/> : <MenuIcon/>}</button>
      <nav id="main-navigation" className={open ? "nav open" : "nav"} aria-label="Main navigation">
        <Link href="/services">Services</Link><Link href="/who-we-help">Sectors</Link><Link href="/about">About</Link><Link href="/resources">Insights</Link><Link href="/contact">Contact</Link><a className="header-phone" href={business.phoneHref}><Phone/> Call {business.phone}</a><Link className="button small" href="/get-a-quote">Get a quote</Link>
        <div className="mobile-services">{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div>
      </nav>
    </div>
  </header>;
}
