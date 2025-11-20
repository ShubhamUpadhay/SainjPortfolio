import { useState } from "react";
import { CardContent } from "./ui/card";
import {
  ShieldCheck,
  ClipboardList,
  AlertTriangle,
  Shield,
  Briefcase,
  Cpu,
} from "lucide-react";
const certificationsByCategory = {
  cybersecurity: [
    "Cybersecurity’s Frontier: Emerging Trends & Technology",
    "System Security Plan (SSP) for NIST 800-171 Compliance",
    "ISC2 CISSP – Domains 1 & 2 (Practice Exam Certification)",
    "Identify and Prevent Phishing Attacks",
    "Linux Fundamentals",
  ],
  audit_and_compliance: [
    "Mastering ISO 27001: Crafting Policies for the ISO Framework",
    "Quality Management System (QMS) Certification",
    "Auditing Financial Statements",
    "Regulatory Reporting & Reporting Controls",
    "Anti-Money Laundering Controls Over Tax Evasion",
    "Financial Crime Certificate",
  ],
  risk_management: [
    "Project Risk Management (PMBOK – Sixth Edition Aligned)",
    "Introduction to Risk Management for Decision Makers & Leaders",
    "Operational Risk Certificate",
    "Risk Insider Certificate",
    "ISO 31000:2018 Enterprise Risk Management Awareness",
  ],
  privacy_and_governance: [
    "Reputation Management: Corporate Image & Governance",
    "Sustainability & the Changing Global Context Certificate",
    "Advanced Diploma in Innovation & Digital Transformation",
  ],
  finance_and_business: [
    "Executive Diploma in Finance",
    "Corporate Finance: Financial Analysis & Decision Making",
    "Real Estate Investment & Finance",
  ],
  technology_and_tools: [
    "Diploma in Microsoft Dynamics 365 CRM Business Architect",
  ],
};
const categoryIcons = {
  cybersecurity: ShieldCheck,
  audit_and_compliance: ClipboardList,
  risk_management: AlertTriangle,
  privacy_and_governance: Shield,
  finance_and_business: Briefcase,
  technology_and_tools: Cpu,
};
export function CertificationsSection() {
  return (
    <section id="certifications" className="sainj-section">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(
          Object.entries(certificationsByCategory) as [
            keyof typeof certificationsByCategory,
            string[]
          ][]
        ).map(([category, list]) => {
          const Iconia = categoryIcons[category];
          return (
            <div
              key={category}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 "
            >
              <h3 className="cert-heading">
                <b>
                  <div className="flex items-center gap-3 mb-3">
                    <Iconia className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-medium">
                      {category.replace(/_/g, " ").toLocaleUpperCase()}
                    </h3>
                  </div>
                </b>
              </h3>
              <div className="cert-list">
                {list.map((cert) => (
                  <CardContent className="p-0 text-left" key={cert}>
                    <li className="text-sm text-muted-foreground mb-2">
                      {cert}
                    </li>
                  </CardContent>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
