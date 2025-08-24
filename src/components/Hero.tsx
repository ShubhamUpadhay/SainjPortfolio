import { Button } from "./ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const credentials = [
    {
      icon: Shield,
      title: "CISA Certified",
      subtitle: "IT Auditor"
    },
    {
      icon: Award,
      title: "Juris Doctor",
      subtitle: "Technology Law"
    },
    {
      icon: Users,
      title: "10+ Years",
      subtitle: "Experience"
    }
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-transparent via-primary/5 to-secondary/20 dark:via-primary/10 dark:to-secondary/5 transition-all duration-500 relative overflow-hidden">
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/6 dark:from-primary/6 dark:to-secondary/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl tracking-tight">
                Expert IT Auditing & Legal Consultation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bridging the gap between technology and compliance with comprehensive 
                IT auditing services and specialized legal expertise in cybersecurity, 
                data protection, and regulatory compliance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                className="w-full sm:w-auto"
              >
                View Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>

            {/* Professional Credentials */}
            <div className="grid grid-cols-3 gap-4">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-card via-card to-primary/5 dark:to-primary/10 rounded-xl p-4 border border-primary/10 dark:border-primary/20 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 text-center">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-medium text-sm">{credential.title}</div>
                    <div className="text-xs text-muted-foreground">{credential.subtitle}</div>
                  </div>
                );
              })}
            </div>

            {/* Key Statistics */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-medium">500+</div>
                <div className="text-sm text-muted-foreground">Audits Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium">50+</div>
                <div className="text-sm text-muted-foreground">Legal Cases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image Side */}
          <div className="lg:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NTc5MjgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sarah Mitchell - IT Auditor and Legal Advisor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg dark:shadow-primary/20 transition-shadow duration-300">
                <div className="text-sm">Certified</div>
                <div className="font-medium">CISA & JD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}