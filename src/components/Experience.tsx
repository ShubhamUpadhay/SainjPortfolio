import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useState } from "react";
import { CertificationsSection } from "./CertificationGrid";
export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Assistant Manager – Cyber Security & Audit",
      organization: "Sutherland Global",
      period: "2025 - Present",
      description:
        "Leading cybersecurity assessments, IT audits, and governance initiatives across global business units, ensuring alignment with regulatory and security frameworks.",
      highlights: [
        "Managing ITGC, SOX, ISO 27001, and internal audit programs end-to-end",
        "Strengthening IAM/PAM, MFA, AD Security, and Endpoint Security controls",
        "Conducting RCSA, control testing, evidence review, and risk reporting",
        "Driving third-party risk reviews, privacy assessments, and governance improvements",
      ],
    },
    {
      type: "work",
      title: "Senior Associate – IT Auditor",
      organization: "Price Waterhouse Coopers (PwC)",
      period: "2024 - 2025",
      description:
        "Executed end-to-end ITGC, SOX, and cybersecurity audits for global clients across BFSI, Media, Healthcare, Retail, and Government sectors.",
      highlights: [
        "Performed TOD & TOE across IAM, PAM, Change Management, BCP/DR, and IT Operations",
        "Conducted TPRM and vendor risk assessments aligned with GDPR, CCPA, HIPAA, PCI DSS",
        "Enhanced vulnerability management, threat monitoring, and endpoint security compliance",
        "Developed BCP/DR strategies and cyber maturity assessments using NIST RMF & FAIR",
      ],
    },
    {
      type: "work",
      title: "Assistant Manager – Risk & Compliance",
      organization: "HSBC",
      period: "2023 - 2024",
      description:
        "Led enterprise-wide risk and compliance initiatives, focusing on financial crime risk, regulatory audits, and operational risk governance.",
      highlights: [
        "Executed 4+ data protection audits annually, reducing erroneous transactions by 30%",
        "Improved SOC 1 & SOC 2 compliance, product risk validation, and version control testing",
        "Reduced compliance costs by 20%, saving $150,000 annually through automation",
        "Enhanced DR responsiveness by 60% and automated reporting to reduce manual work by 80%",
      ],
    },
    {
      type: "work",
      title: "Compliance Analyst",
      organization: "University of Virginia, USA",
      period: "2020 - 2023",
      description:
        "Supported compliance, risk governance, and internal audit activities across university operations, with a focus on financial and cybersecurity controls.",
      highlights: [
        "Performed 150+ internal control tests, reducing audit findings by 70%",
        "Implemented 25+ security controls including MFA, encryption, and fraud prevention",
        "Conducted AML, SOX, SEC/PCAOB compliance and enhanced due diligence reviews",
        "Optimized workflows to reduce process cycle times by 30% and enhance audit readiness",
      ],
    },
  ];
  const education = [
    {
      degree: "LL.B. (Cyber & IT Law)",
      institution: "Symbiosis Law College, Pune",
      period: "2020 – 2023",
      honors: "CGPA: 8.4",
    },
    {
      degree: "Bachelor of Commerce (Honors in Risk & Auditing)",
      institution: "St. Aloysius' College, Jabalpur",
      period: "2017 – 2020",
      honors: "Percentage: 78.6%",
    },
    {
      degree: "Senior Secondary (Math & Commerce)",
      institution: "St. Joseph's Convent Senior Secondary School, Jabalpur",
      period: "2015 – 2017",
      honors: "Score: 81.4%",
    },
    {
      degree: "Secondary School (Commerce)",
      institution: "St. Joseph's Convent Senior Secondary School, Jabalpur",
      period: "2013 – 2015",
      honors: "CGPA: 9.4",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-accent/5 via-background to-secondary/10 dark:from-accent/10 dark:via-background dark:to-secondary/5 transition-all duration-500 relative overflow-hidden"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle diagonal gradient bands */}
        <div className="absolute top-0 left-0 w-full h-full transform rotate-12">
          <div className="absolute top-1/4 left-0 w-full h-24 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-2xl"></div>
          <div className="absolute top-3/4 left-0 w-full h-16 bg-gradient-to-r from-transparent via-secondary/8 to-transparent blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Experience & Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering exceptional results in{" "}
            <b> IT auditing, cybersecurity, GRC, and data privacy,</b> backed by
            legal expertise in <b>Cyber & IT Law </b> and extensive industry
            exposure across BFSI, Healthcare, Media, Retail, Energy, and
            Government sectors.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl">Professional Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-lg font-medium">{exp.title}</h4>
                      <p className="text-primary">{exp.organization}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="font-medium">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
              >
                <CardContent className="p-0 text-center">
                  <h4 className="font-medium mb-2">{edu.degree}</h4>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.period}
                  </p>
                  {edu.honors && (
                    <Badge variant="outline" className="text-xs">
                      {edu.honors}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl">Certifications & Licenses</h3>
          </div>

          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
              >
                <CardContent className="p-0 text-center">
                  <p className="text-sm font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <CertificationsSection />
        </div>
      </div>
    </section>
  );
}
