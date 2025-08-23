import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Senior IT Auditor & Legal Consultant",
      organization: "Independent Practice",
      period: "2020 - Present",
      description: "Providing comprehensive IT auditing and legal consultation services to Fortune 500 companies and mid-market organizations across various industries.",
      highlights: [
        "Led 100+ security assessments and compliance audits",
        "Advised on GDPR, CCPA, and industry-specific regulations",
        "Developed incident response plans for 50+ organizations",
        "Saved clients over $10M in potential compliance penalties"
      ]
    },
    {
      type: "work",
      title: "IT Risk Manager",
      organization: "TechSecure Financial Services",
      period: "2017 - 2020",
      description: "Managed enterprise-wide IT risk assessment programs and regulatory compliance initiatives for a leading financial services firm.",
      highlights: [
        "Implemented SOX compliance framework across 15 business units",
        "Reduced security incidents by 60% through proactive risk management",
        "Led cross-functional teams in regulatory examination preparations",
        "Established IT governance policies and procedures"
      ]
    },
    {
      type: "work",
      title: "Cybersecurity Analyst",
      organization: "CyberGuard Solutions",
      period: "2014 - 2017",
      description: "Conducted security assessments, vulnerability testing, and compliance audits for healthcare and technology sector clients.",
      highlights: [
        "Performed HIPAA compliance audits for 25+ healthcare organizations",
        "Conducted penetration testing and vulnerability assessments",
        "Developed security awareness training programs",
        "Achieved 98% client satisfaction rating"
      ]
    }
  ];

  const education = [
    {
      degree: "Juris Doctor (JD) - Technology Law",
      institution: "Stanford Law School",
      year: "2014",
      honors: "Magna Cum Laude"
    },
    {
      degree: "Master of Science - Computer Science",
      institution: "MIT",
      year: "2011",
      focus: "Cybersecurity & Information Systems"
    },
    {
      degree: "Bachelor of Science - Information Technology",
      institution: "UC Berkeley",
      year: "2009",
      honors: "Summa Cum Laude"
    }
  ];

  const certifications = [
    "Certified Information Systems Auditor (CISA)",
    "Certified Information Security Manager (CISM)",
    "Certified Data Privacy Solutions Engineer (CDPSE)",
    "PMI Risk Management Professional (PMI-RMP)",
    "ISO 27001 Lead Auditor",
    "Bar Admission - California State Bar"
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-accent/5 via-background to-secondary/10 dark:from-accent/10 dark:via-background dark:to-secondary/5 transition-all duration-500 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Experience & Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering exceptional results in IT auditing, 
            cybersecurity, and technology law across diverse industries and regulatory environments.
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
              <Card key={index} className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
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
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
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
              <Card key={index} className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <h4 className="font-medium mb-2">{edu.degree}</h4>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  {(edu.honors || edu.focus) && (
                    <Badge variant="outline" className="text-xs">
                      {edu.honors || edu.focus}
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <p className="text-sm font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}