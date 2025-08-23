import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Shield, 
  FileCheck, 
  Scale, 
  Lock, 
  Search, 
  AlertTriangle,
  CheckCircle,
  FileText
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      category: "IT Auditing Services",
      image: "https://images.unsplash.com/photo-1606606767399-01e271823a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTU4MDA2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        {
          icon: Shield,
          title: "Security Risk Assessments",
          description: "Comprehensive evaluation of cybersecurity posture and risk exposure"
        },
        {
          icon: FileCheck,
          title: "Compliance Audits",
          description: "SOX, HIPAA, PCI-DSS, and other regulatory compliance assessments"
        },
        {
          icon: Search,
          title: "Vulnerability Assessments",
          description: "Identification and analysis of security vulnerabilities in IT infrastructure"
        },
        {
          icon: AlertTriangle,
          title: "Incident Response Planning",
          description: "Development and testing of cybersecurity incident response procedures"
        }
      ]
    },
    {
      category: "Legal Services",
      image: "https://images.unsplash.com/photo-1731074803846-ac506947040d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGdhdmVsfGVufDF8fHx8MTc1NTg3ODEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        {
          icon: Scale,
          title: "Technology Law Consultation",
          description: "Legal guidance on technology contracts, licensing, and intellectual property"
        },
        {
          icon: Lock,
          title: "Data Privacy & Protection",
          description: "GDPR, CCPA compliance and privacy policy development"
        },
        {
          icon: CheckCircle,
          title: "Regulatory Compliance",
          description: "Navigation of complex regulatory requirements across industries"
        },
        {
          icon: FileText,
          title: "Legal Documentation",
          description: "Drafting and review of technology-related legal documents"
        }
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT auditing and legal services designed to protect your organization 
            and ensure compliance with industry standards and regulations.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl mb-4">{category.category}</h3>
                </div>
                
                <div className="grid gap-6">
                  {category.services.map((service, serviceIndex) => {
                    const Icon = service.icon;
                    return (
                      <Card key={serviceIndex} className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{service.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div className={`${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/15 dark:from-primary/10 dark:via-accent/5 dark:to-secondary/8 rounded-2xl p-8 transition-all duration-500 border border-primary/10 dark:border-primary/20">
            <h3 className="text-xl mb-4">Ready to Secure Your Organization?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get started with a comprehensive assessment tailored to your specific needs and 
              industry requirements. Contact me today to discuss your compliance and security objectives.
            </p>
            <Button onClick={scrollToContact} size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}