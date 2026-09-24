"use client";

import { useState } from "react";
import Link from "next/link";
import { Arrow } from "@/components/icons";

const pathways = [
  {
    label: "Owners corporation",
    eyebrow: "Existing residential buildings",
    title: "Start with the building records, then verify what is happening on site.",
    copy: "For an established apartment building, the most useful first step is usually an AESMR record review supported by egress and passive fire inspections.",
    services: [
      ["AESMR preparation", "/services/annual-essential-safety-measures-report"],
      ["Means of egress inspections", "/services/means-of-egress-inspections"],
      ["Passive fire protection audits", "/services/passive-fire-protection-audits"],
    ],
  },
  {
    label: "Commercial property",
    eyebrow: "Offices, retail and industrial sites",
    title: "Match the inspection program to the occupancy permit and operating environment.",
    copy: "Commercial portfolios need a clear evidence trail across maintenance records, exit routes and building-specific fire safety measures.",
    services: [
      ["AESMR preparation", "/services/annual-essential-safety-measures-report"],
      ["System interface testing", "/services/system-interface-testing"],
      ["Tailored compliance support", "/services/tailored-esm-compliance-support"],
    ],
  },
  {
    label: "New development",
    eyebrow: "Handover and defect period",
    title: "Capture essential safety measure defects before the rectification window closes.",
    copy: "A focused handover pathway helps asset owners establish the building baseline, document defects and support close-out before the DLP expires.",
    services: [
      ["Defect liability period audits", "/services/defect-liability-period-audits"],
      ["System interface testing", "/services/system-interface-testing"],
      ["Regulatory training", "/services/esm-regulatory-training"],
    ],
  },
  {
    label: "Complex facility",
    eyebrow: "Hospitals, airports and major sites",
    title: "Coordinate systems, contractors and evidence around one agreed fire matrix.",
    copy: "Complex facilities benefit from independent witnessing, clearly defined responsibilities and building-specific training for operational teams.",
    services: [
      ["System interface testing", "/services/system-interface-testing"],
      ["Building notice advice", "/services/building-notice-advice"],
      ["Tailored compliance support", "/services/tailored-esm-compliance-support"],
    ],
  },
] as const;

export function ComplianceNavigator() {
  const [active, setActive] = useState(0);

  return <section className="market-navigator" aria-labelledby="navigator-title">
    <div className="market-shell market-navigator__shell">
      <div className="market-navigator__intro">
        <p className="market-kicker">Compliance navigator</p>
        <h2 id="navigator-title">Where should your<br/>building start?</h2>
        <p>Choose the closest building situation. This is a practical starting point—not a substitute for reviewing the building’s approved documents.</p>
      </div>
      <div className="market-navigator__workspace">
        <div className="market-navigator__tabs" role="tablist" aria-label="Choose a building situation">
          {pathways.map((item, index) => <button
            key={item.label}
            id={`compliance-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls={`compliance-pathway-${index}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
          ><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</button>)}
        </div>
        {pathways.map((pathway, index) => <div
          className="market-navigator__result"
          id={`compliance-pathway-${index}`}
          role="tabpanel"
          aria-labelledby={`compliance-tab-${index}`}
          hidden={active !== index}
          key={pathway.label}
        >
            <p>{pathway.eyebrow}</p>
            <h3>{pathway.title}</h3>
            <div className="market-navigator__result-grid">
              <p>{pathway.copy}</p>
              <div>{pathway.services.map(([name, href]) => <Link href={href} key={href}>{name}<Arrow/></Link>)}</div>
            </div>
          </div>)}
      </div>
    </div>
  </section>;
}
