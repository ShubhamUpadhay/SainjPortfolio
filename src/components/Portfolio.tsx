import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Shield,
  Building2,
  Heart,
  DollarSign,
  ArrowRight,
} from "lucide-react";

export function Portfolio() {
  const caseStudies = [
    {
      icon: Shield,
      title: "Enterprise IAM Access Review Transformation",
      client: "Global Media & Publishing Group",
      industry: "Technology / Media",
      challenge:
        "The organization faced fragmented IAM processes, inconsistent access reviews, and audit findings related to excessive permissions and dormant accounts across 6000+ identities.",
      solution:
        "Led full IAM control uplift, established automated quarterly access reviews, implemented RBAC-based access governance, and aligned provisioning workflows with SOX and CIS Controls.",
      results: [
        "Reduced access-related audit exceptions by 90%",
        "Eliminated 70% dormant and orphan accounts",
        "Achieved full SOX & CIS Control 5/6 compliance within two quarters",
        "Established enterprise-wide access governance dashboard",
      ],
      technologies: [
        "Azure AD",
        "Active Directory",
        "Identity Lifecycle Management",
        "CIS Controls v8",
        "SOX ITGC Framework",
      ],
      duration: "10 months",
    },

    {
      icon: Heart,
      title: "Healthcare Privacy & HIPAA Compliance Enhancement",
      client: "University-Based Medical System",
      industry: "Healthcare",
      challenge:
        "The medical system lacked standardized HIPAA safeguards across clinical applications, resulting in risk of PHI exposure and operational inconsistencies.",
      solution:
        "Conducted organization-wide HIPAA risk assessments, mapped PHI data flows, strengthened technical and administrative safeguards, developed training, and formalized breach response procedures.",
      results: [
        "Achieved full HIPAA compliance across multiple clinical units",
        "Reduced HIPAA control gaps by 85%",
        "Achieved zero PHI handling incidents post-implementation",
        "Established standardized privacy training for staff",
      ],
      technologies: [
        "HIPAA Security Rule",
        "Access Control Policies",
        "Audit Logging",
        "PHI Governance",
        "Encryption Standards",
      ],
      duration: "6 months",
    },

    {
      icon: Building2,
      title: "SOX ITGC Audit Optimization & Automation",
      client: "Global Clients (via PwC)",
      industry: "Financial Services / Media / Retail",
      challenge:
        "Manual ITGC testing caused delays, recurring findings, inconsistent evidence, and long audit cycles across 15+ business-critical systems.",
      solution:
        "Designed reusable SOX ITGC accelerators, standardized test scripts, automated evidence templates, and improved walkthrough, design, and operating effectiveness review processes.",
      results: [
        "Reduced SOX ITGC testing cycle time by 35%",
        "Eliminated repeat ITGC findings across user access, logging, and change controls",
        "Increased audit evidence quality and reduced manual effort by 40%",
        "Awarded PwC Supernova Award for audit automation impact",
      ],
      technologies: [
        "SOX Framework",
        "ITGC Controls",
        "NIST 800-53",
        "ISO 27001",
        "Audit Automation Tools",
      ],
      duration: "12 months",
    },

    {
      icon: DollarSign,
      title: "Financial Services Data Privacy & Governance Program",
      client: "Global Banking Organization",
      industry: "Banking & Financial Services",
      challenge:
        "The bank needed a unified privacy and data governance program to meet GDPR, CCPA, PDPL, and RBI regulations while reducing compliance gaps across multiple business units.",
      solution:
        "Led PIAs/DIAs, implemented data classification and retention models, improved consent and breach workflows, and standardized privacy governance in alignment with international regulations.",
      results: [
        "Reduced privacy compliance gaps by 80%",
        "Achieved audit readiness in under 6 months",
        "Standardized data lifecycle governance across 4 major business units",
        "Recognized with HSBC Rising Star Award for governance impact",
      ],
      technologies: [
        "GDPR",
        "CCPA",
        "PDPL",
        "RBI Master Direction",
        "ISO 27701",
        "Data Governance Frameworks",
      ],
      duration: "8 months",
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
      id="portfolio"
      className="py-16 bg-gradient-to-br from-background via-secondary/8 to-accent/12 dark:via-secondary/4 dark:to-accent/6 transition-all duration-500 relative overflow-hidden"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle wave pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 dark:opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="url(#wave-gradient)"
              opacity="0.5"
            />
            <defs>
              <linearGradient
                id="wave-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="0.3"
                />
                <stop
                  offset="50%"
                  stopColor="hsl(var(--secondary))"
                  stopOpacity="0.5"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity="0.3"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Portfolio & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of successful IT auditing and legal consultation
            projects that have helped organizations achieve compliance and
            enhance their security posture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card
                key={index}
                className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300"
              >
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        {study.duration}
                      </p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {study.client}
                  </p>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <div>
                    <h5 className="font-medium mb-2">Challenge</h5>
                    <p className="text-sm text-muted-foreground">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Solution</h5>
                    <p className="text-sm text-muted-foreground">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">Key Results</h5>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">
                      Technologies & Frameworks
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <h3 className="text-xl mb-4">Interested in Similar Results?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These case studies represent just a sample of successful
              engagements. Each project is tailored to the unique needs,
              challenges, and regulatory requirements of the organization.
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
