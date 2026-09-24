import type { Metadata } from "next";
import { CTA, Eyebrow, ServiceGrid } from "@/components/sections";
export const metadata: Metadata = { title: "Essential Safety Measures Services Melbourne", description: "AESMR preparation, egress inspections, passive fire audits, system interface testing and ESM consultancy across Melbourne and Victoria." };
export default function ServicesPage(){ return <><section className="page-hero"><div className="shell"><Eyebrow>Services</Eyebrow><h1>Safety obligations,<br/><em>made actionable.</em></h1><p>Independent inspections, evidence-led reporting and practical advice for Victorian building owners and property teams.</p></div></section><section className="section shell"><ServiceGrid/></section><CTA/></> }
