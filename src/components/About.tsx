import { Card, CardContent } from "./ui/card";
import { Shield, Scale, Award, Users } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: Shield,
      title: "Cybersecurity & Risk Expert",
      description:
        "Specialized in ITGC, SOX, Vulnerability Management, Incident Response, and Threat Intelligence.",
    },
    {
      icon: Scale,
      title: "Legal & Privacy Expertise",
      description:
        "LL.B. in Cyber & IT Law | Skilled in Data Privacy, GDPR, CCPA, HIPAA & Regulatory Compliance.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "🏆 PwC Supernova Award | 🏆 HSBC Rising Star Award for Risk & Compliance Excellence.",
    },
    {
      icon: Users,
      title: "Global Client Engagement",
      description:
        "Audited and advised BFSI, Healthcare, Media, Retail & Govt. organizations across the US & India.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-secondary/10 via-background to-accent/5 dark:from-secondary/5 dark:via-background dark:to-accent/10 transition-all duration-500 relative overflow-hidden"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient accent */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">About Sainjali Nayak</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unique blend of IT auditing expertise and legal acumen in Cyber &
            IT Law, dedicated to helping organizations strengthen cybersecurity,
            achieve compliance, and manage risk effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-3">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With experience spanning PwC, HSBC, and University of Virginia,
                I’ve led ITGC, SOX, GRC, and data privacy audits across
                industries such as Banking & Finance, Healthcare, Media, Retail,
                and Government.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                • Recognized with PwC Supernova Award and HSBC Rising Star Award
                for innovation in risk management and compliance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                • Expertise in Identity & Access Management (IAM/PAM),
                Vulnerability Management, Threat Monitoring, Risk Governance,
                and Incident Response.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                • Strong foundation in Cyber & IT Law (LL.B.), enabling me to
                connect technical audits with regulatory compliance.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Approach</h3>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontStyle: "italic" }}
              >
                <strong>
                  I believe in proactive risk management — not just checking
                  compliance boxes, but driving real value by:{" "}
                </strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                • Performing end-to-end audits (planning, walkthroughs, control
                design reviews, testing, and reporting).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {" "}
                • Aligning solutions with global frameworks (ISO 27001, NIST,
                PCI DSS, GDPR, HIPAA, COBIT, CIS Controls).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {" "}
                • Delivering practical, business-aligned strategies that reduce
                risks, enhance resilience, and optimize compliance costs.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="space-y-3 p-0">
                    <div className="mx-auto w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-medium mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">
                • LL.B. (Cyber & IT Law) <br />• B.Com (Honors in Risk &
                Auditing)
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Specializations</h4>
              <p className="text-sm text-muted-foreground">
                • ITGC, SOX, and Compliance Audits <br />• Identity & Access
                Management (IAM/PAM) <br />• Risk Assessment & GRC Frameworks
                (ISO 27001, NIST, COBIT, CIS, PCI DSS, GDPR, HIPAA, CCPA) <br />
                • Data Privacy & Regulatory Compliance <br />• Business
                Continuity (BCP) & Disaster Recovery (DR) Strategies
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Industries</h4>
              <p className="text-sm text-muted-foreground">
                • Banking & Financial Services (BFSI) <br />• Healthcare &
                Pharmaceuticals <br />• Media & Entertainment <br />• Retail &
                E-Commerce <br />• Energy & Utility <br />• Government & Public
                Sector
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
