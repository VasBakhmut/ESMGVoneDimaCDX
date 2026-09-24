import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { business } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL(business.url), title: { default: "Essential Safety Measures & Passive Fire Protection Melbourne | ESM Group", template: "%s | ESM Group" }, description: "Essential safety measures inspections, AESMR preparation and passive fire protection audits for commercial and residential buildings across Melbourne and Victoria.", openGraph: { type: "website", locale: "en_AU", siteName: "ESM Group", images: ["/images/hero-building.jpg"] }, alternates: { canonical: "/" } };
const schema = { "@context": "https://schema.org", "@type": ["Organization","ProfessionalService"], "@id": `${business.url}/#organisation`, name: business.name, alternateName: business.shortName, url: business.url, logo: `${business.url}/images/esm-logo.png`, telephone: business.phone, email: business.email, address: { "@type": "PostalAddress", streetAddress: "Unit 22, 23–25 Bunney Road", addressLocality: "Oakleigh South", addressRegion: "VIC", postalCode: "3167", addressCountry: "AU" }, areaServed: [{ "@type": "City", name: "Melbourne" }, { "@type": "State", name: "Victoria" }], openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" }] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-AU"><body><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/></body></html> }
