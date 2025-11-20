import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  FileCheck,
  FileText,
  Landmark,
  Lock,
  Scale,
  Search,
  Shield,
} from "lucide-react";
import { Button } from "./ui/button";

export function Services() {
  const services = [
    {
      category: "IT Auditing Services",
      description: `Comprehensive cybersecurity, risk, and compliance assessments designed to <b>protect your organization, ensure adherence to global frameworks, and enhance governance effectiveness</b>.`,
      services: [
        {
          icon: Shield,
          title: "Security Risk Assessments",
          description: `Comprehensive evaluation of <b>cybersecurity posture, control maturity, and enterprise risk exposure</b>.`,
          features: [
            "<b>Threat Identification & Quantification (FAIR, NIST RMF)</b>",
            "<b>Control Design & Operating Effectiveness (TOD/TOE)</b>",
            "<b>Risk Prioritization & Remediation Planning</b>",
            "<b>Regulatory Alignment with ISO 27001 / NIST 800-53 / CIS Benchmarks</b>",
          ],
        },
        {
          icon: FileCheck,
          title: "Compliance Audits",
          description: `End-to-end audits validating conformance with <b>SOX, ISO 27001, HIPAA, PCI DSS, GDPR, and CCPA frameworks</b>.`,
          features: [
            "<b>Regulatory & Policy Mapping (COBIT, COSO)</b>",
            "<b>Control Testing & Evidence Review</b>",
            "<b>Gap Identification and Remediation Tracking</b>",
            "<b>Automated Compliance Reporting via GRC tools (MetricStream, NAVEX Global, LogicGate)</b>",
          ],
        },
        {
          icon: Search,
          title: "Vulnerability Assessments",
          description: `Identification, analysis, and prioritization of <b>security weaknesses in IT infrastructure, applications, and endpoints</b>.`,
          features: [
            "<b>Continuous Vulnerability Scanning & Patch Management (Tenable VMP)</b>",
            "<b>Network & Configuration Review</b>",
            "<b>Application Security Testing and Code Integrity Checks</b>",
            "<b>Integration with Endpoint Security Tools (Intune, Defender)</b>",
          ],
        },
        {
          icon: AlertTriangle,
          title: "Incident Response Planning",
          description: `Development and testing of <b>cybersecurity incident response and crisis management playbooks</b>.`,
          features: [
            "<b>Response Strategy & Escalation Workflow Design</b>",
            "<b>Simulation Testing and Table-Top Exercises</b>",
            "<b>Team Training & Crisis Communication Drills</b>",
            "<b>Post-Incident Analysis and Root-Cause Documentation</b>",
          ],
        },
        {
          icon: Landmark,
          title: "Data Privacy & GRC Advisory",
          description: `Strategic guidance to help organizations comply with global privacy laws and strengthen governance, risk, and compliance (GRC) programs.`,
          features: [
            "<b>Privacy Impact Assessments (PIA) & Data Flow Mapping</b>",
            "<b>GDPR, CCPA, HIPAA & IT Act Compliance Implementation</b>",
            "<b>Policy Development & Privacy-by-Design Integration</b>",
            "<b>Enterprise Risk Governance aligned with ISO 27005 & NIST RMF</b>",
            "<b>Third-Party Risk Management (TPRM) & Vendor Compliance Reviews</b>",
          ],
        },
      ],
    },
    {
      category: "Legal & Compliance Advisory",
      description: `Specialized <b>legal and regulatory consulting</b> focused on bridging technology law with cybersecurity and data governance frameworks.`,
      services: [
        {
          icon: Scale,
          title: "Technology Law Consultation",
          description: `Strategic <b>legal guidance</b> for technology contracts, intellectual property, and software licensing under Cyber & IT Law.`,
          features: [
            "<b>Contract Drafting & Review (SaaS, Procurement, IP Licensing)</b>",
            "<b>Technology Risk Clauses & Legal Compliance Audits</b>",
            "<b>Software & IP Protection</b>",
            "<b>Dispute Resolution & Legal Representation</b>",
          ],
        },
        {
          icon: Lock,
          title: "Data Privacy & Protection",
          description: `Implementation of <b>privacy frameworks</b> and controls for global data protection compliance.`,
          features: [
            "<b>GDPR, CCPA, HIPAA, and IT Act Compliance Assessments</b>",
            "<b>Privacy Impact Assessments & Data Mapping</b>",
            "<b>Privacy Policy & Consent Management Design</b>",
            "<b>Breach Response Planning & Reporting Procedures</b>",
          ],
        },
        {
          icon: CheckCircle,
          title: "Regulatory Compliance & GRC",
          description: `Comprehensive <b>regulatory alignment and GRC program setup</b> across sectors.`,
          features: [
            `<b>Regulatory Analysis & Risk Interpretation (ISO 27001, NIST, PCI DSS)</b>}`,
            "<b>Enterprise GRC Implementation & Maturity Evaluation</b>",
            "<b>Third-Party Risk & Vendor Assessment (TPRM)</b>",
            "<b>Compliance Monitoring & Reporting Frameworks</b>",
          ],
        },
        {
          icon: FileText,
          title: "Legal Documentation & Governance",
          description: `Drafting and review of <b>IT governance policies, terms of service, and legal agreements</b>.`,
          features: [
            "<b>Information Security Policies (ISP, DLP, AUP)</b>",
            "<b>Terms of Service & Privacy Notices</b>",
            "<b>Governance Documentation (BCP/DR, Risk Management Charters)</b>",
            "<b>Audit Readiness & Certification Support (ISO, SOC 2)</b>",
          ],
        },
      ],
    },
  ];
  const scrollToContact = () => {
    const element = document.getElementById("connectInfoCards");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-background via-accent/5 to-primary/10 dark:via-accent/10 dark:to-primary/5 transition-all duration-500 relative overflow-hidden"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle connecting lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Delivering a unique combination of{" "}
            <b>IT auditing, risk management, and legal expertise</b> — designed
            to help organizations strengthen cybersecurity, ensure compliance,
            and enhance governance across industries.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            From global banks and healthcare institutions to media and
            government enterprises, my work focuses on{" "}
            <b>
              {" "}
              bridging the gap between regulatory compliance and real-world risk
              mitigation.
            </b>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {" "}
            I specialize in transforming complex frameworks like{" "}
            <b>
              {" "}
              ISO 27001, NIST, COBIT, CIS Controls, SOX, GDPR, HIPAA, and PCI
              DSS{" "}
            </b>{" "}
            into actionable strategies that drive measurable security and
            business outcomes.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, i) => (
            <section key={i} className="py-12">
              <h2 className="text-2xl font-semibold mb-4">
                {category.category}
              </h2>
              <p
                className="text-muted-foreground mb-8"
                dangerouslySetInnerHTML={{ __html: category.description }}
              ></p>

              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 border rounded-xl hover:shadow-lg transition"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-medium">{srv.title}</h3>
                      </div>
                      <p
                        className="text-sm text-muted-foreground mb-4"
                        dangerouslySetInnerHTML={{ __html: srv.description }}
                      ></p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {srv.features.map((feature, fidx) => (
                          <li
                            key={fidx}
                            dangerouslySetInnerHTML={{ __html: feature }}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <h3 className="text-xl mb-4">
              Ready to Strengthen Your Security & Compliance Posture?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Leverage proven expertise across{" "}
              <b>ITGC, SOX, ISO 27001, Data Privacy, and GRC frameworks</b> to
              secure your organization and meet regulatory expectations with
              confidence. Let’s work together to build a resilient, audit-ready,
              and compliant environment.
            </p>
            <Button onClick={scrollToContact} size="lg" className="group">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
