import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-transparent via-primary/5 to-secondary/20 dark:via-primary/10 dark:to-secondary/5 transition-all duration-500 relative overflow-hidden">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/10 dark:from-primary/10 dark:to-secondary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
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

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="font-medium">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-medium">500+</div>
                <div className="text-sm text-muted-foreground">Audits Completed</div>
              </div>
              <div className="text-center">
                <div className="font-medium">50+</div>
                <div className="text-sm text-muted-foreground">Legal Cases</div>
              </div>
            </div>
          </div>

          <div className="lg:order-2">
            <div className="relative">
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