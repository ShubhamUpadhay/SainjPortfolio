import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Shield,
  FileCheck,
  Scale,
  Lock,
  Search,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      category: "IT Auditing Services",
      description:
        "Comprehensive cybersecurity and compliance assessments to protect your organization.",
      services: [
        {
          icon: Shield,
          title: "Security Risk Assessments",
          description:
            "Comprehensive evaluation of cybersecurity posture and risk exposure",
          features: [
            "Threat Analysis",
            "Vulnerability Scanning",
            "Risk Prioritization",
            "Remediation Planning",
          ],
        },
        {
          icon: FileCheck,
          title: "Compliance Audits",
          description:
            "SOX, HIPAA, PCI-DSS, and other regulatory compliance assessments",
          features: [
            "Regulatory Mapping",
            "Gap Analysis",
            "Control Testing",
            "Compliance Reporting",
          ],
        },
        {
          icon: Search,
          title: "Vulnerability Assessments",
          description:
            "Identification and analysis of security vulnerabilities in IT infrastructure",
          features: [
            "Network Scanning",
            "Application Testing",
            "Configuration Review",
            "Patch Management",
          ],
        },
        {
          icon: AlertTriangle,
          title: "Incident Response Planning",
          description:
            "Development and testing of cybersecurity incident response procedures",
          features: [
            "Response Planning",
            "Team Training",
            "Simulation Testing",
            "Documentation",
          ],
        },
      ],
    },
    {
      category: "Legal Services",
      description:
        "Specialized legal expertise in technology law and regulatory compliance.",
      services: [
        {
          icon: Scale,
          title: "Technology Law Consultation",
          description:
            "Legal guidance on technology contracts, licensing, and intellectual property",
          features: [
            "Contract Review",
            "IP Protection",
            "Licensing Agreements",
            "Dispute Resolution",
          ],
        },
        {
          icon: Lock,
          title: "Data Privacy & Protection",
          description: "GDPR, CCPA compliance and privacy policy development",
          features: [
            "Privacy Assessments",
            "Policy Development",
            "Data Mapping",
            "Breach Response",
          ],
        },
        {
          icon: CheckCircle,
          title: "Regulatory Compliance",
          description:
            "Navigation of complex regulatory requirements across industries",
          features: [
            "Regulatory Analysis",
            "Compliance Strategy",
            "Filing Support",
            "Ongoing Monitoring",
          ],
        },
        {
          icon: FileText,
          title: "Legal Documentation",
          description:
            "Drafting and review of technology-related legal documents",
          features: [
            "Contract Drafting",
            "Policy Creation",
            "Terms of Service",
            "Privacy Notices",
          ],
        },
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Delivering a unique combination of{" "}
            <b>IT auditing, risk management, and legal expertise</b> — designed
            to help organizations strengthen cybersecurity, ensure compliance,
            and enhance governance across industries.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            From global banks and healthcare institutions to media and
            government enterprises, my work focuses on{" "}
            <b>
              {" "}
              bridging the gap between regulatory compliance and real-world risk
              mitigation.
            </b>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
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
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-2xl mb-3">{category.category}</h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={serviceIndex}
                      className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300"
                    >
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">
                              {service.title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-3">
                          <h5 className="font-medium">Key Features:</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <Badge
                                key={featureIndex}
                                variant="secondary"
                                className="text-xs justify-start"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <h3 className="text-xl mb-4">Ready to Secure Your Organization?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get started with a comprehensive assessment tailored to your
              specific needs and industry requirements. Contact me today to
              discuss your compliance and security objectives.
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
