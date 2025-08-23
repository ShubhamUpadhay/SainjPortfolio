import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Shield, Building2, Heart, DollarSign } from "lucide-react";

export function Portfolio() {
  const caseStudies = [
    {
      icon: Building2,
      title: "Financial Services Compliance Transformation",
      client: "Regional Bank",
      industry: "Financial Services",
      challenge: "Required comprehensive SOX compliance implementation and cybersecurity framework upgrade to meet regulatory requirements.",
      solution: "Developed and implemented enterprise-wide SOX compliance program, conducted security risk assessment, and established ongoing monitoring procedures.",
      results: [
        "Achieved 100% SOX compliance within 6 months",
        "Reduced audit findings by 85%",
        "Saved $2.3M in potential regulatory penalties",
        "Improved security posture rating from 'High Risk' to 'Low Risk'"
      ],
      technologies: ["SOX Framework", "ISO 27001", "NIST Cybersecurity Framework", "Risk Assessment Tools"],
      duration: "8 months"
    },
    {
      icon: Heart,
      title: "Healthcare Data Privacy Implementation",
      client: "Multi-location Medical Group",
      industry: "Healthcare",
      challenge: "Needed HIPAA compliance audit and implementation of comprehensive data privacy controls across 15 locations.",
      solution: "Conducted full HIPAA risk assessment, developed privacy policies, implemented technical safeguards, and provided staff training.",
      results: [
        "Achieved full HIPAA compliance across all locations",
        "Zero data breaches in 18 months post-implementation",
        "Reduced compliance gaps by 95%",
        "Established privacy officer training program"
      ],
      technologies: ["HIPAA Security Rule", "Encryption Technologies", "Access Control Systems", "Audit Logging"],
      duration: "6 months"
    },
    {
      icon: Shield,
      title: "Technology Startup Legal & Security Advisory",
      client: "SaaS Technology Company",
      industry: "Technology",
      challenge: "Rapid growth required establishment of legal compliance framework and security controls for international expansion.",
      solution: "Provided ongoing legal consultation for GDPR compliance, drafted technology contracts, and implemented security controls.",
      results: [
        "Successfully launched in EU markets with full GDPR compliance",
        "Negotiated $50M in technology partnerships",
        "Established comprehensive data protection framework",
        "Reduced legal risk exposure by 70%"
      ],
      technologies: ["GDPR Framework", "Contract Management", "Data Protection Impact Assessments", "Security Controls"],
      duration: "12 months"
    },
    {
      icon: DollarSign,
      title: "Investment Firm Cybersecurity Overhaul",
      client: "Asset Management Firm",
      industry: "Financial Services",
      challenge: "Required SEC cybersecurity compliance and enhancement of information security program managing $2B in assets.",
      solution: "Developed SEC-compliant cybersecurity program, conducted penetration testing, and established incident response procedures.",
      results: [
        "Passed SEC cybersecurity examination with zero findings",
        "Implemented advanced threat detection systems",
        "Reduced security incidents by 90%",
        "Established 24/7 security operations center"
      ],
      technologies: ["SEC Cybersecurity Rules", "SIEM Systems", "Threat Intelligence", "Incident Response"],
      duration: "10 months"
    }
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Portfolio & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of successful IT auditing and legal consultation projects 
            that have helped organizations achieve compliance and enhance their security posture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{study.duration}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{study.client}</p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h5 className="font-medium mb-2">Challenge</h5>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Solution</h5>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Key Results</h5>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-3">Technologies & Frameworks</h5>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
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
          <div className="bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/15 dark:from-secondary/5 dark:via-primary/10 dark:to-accent/8 rounded-2xl p-8 transition-all duration-500 border border-primary/10 dark:border-primary/20">
            <h3 className="text-xl mb-4">Interested in Similar Results?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These case studies represent just a sample of successful engagements. Each project is 
              tailored to the unique needs, challenges, and regulatory requirements of the organization.
            </p>
            <Button variant="outline" className="group">
              View Full Portfolio
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}