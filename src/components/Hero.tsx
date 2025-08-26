import { Button } from "./ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedParticles } from "./AnimatedParticles";
import { useTheme } from "./ThemeProvider";

export function Hero() {
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const credentials = [
    {
      icon: Shield,
      title: "CISA Certified",
      subtitle: "IT Auditor",
    },
    {
      icon: Award,
      title: "Juris Doctor",
      subtitle: "Technology Law",
    },
    {
      icon: Users,
      title: "10+ Years",
      subtitle: "Experience",
    },
  ];
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-transparent via-primary/5 to-secondary/20 dark:via-primary/10 dark:to-secondary/5 transition-all duration-500 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated particles background */}
      <AnimatedParticles isDark={theme === "dark"} />

      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/6 dark:from-primary/6 dark:to-secondary/3"></div>

      {/* Additional atmospheric effects for hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/15 dark:from-primary/5 dark:to-secondary/8 rounded-full blur-3xl opacity-30 animate-subtle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-secondary/10 to-accent/15 dark:from-secondary/5 dark:to-accent/8 rounded-full blur-3xl opacity-40 animate-gentle-fade"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl tracking-tight">
                Expert IT Auditing & Legal Consultation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bridging the gap between technology and compliance with
                comprehensive IT auditing services and specialized legal
                expertise in cybersecurity, data protection, and regulatory
                compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="w-full sm:w-auto glass hover:scale-105 transition-all duration-300"
              >
                View Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto glass hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            {/* Professional Credentials */}
            <div className="grid grid-cols-3 gap-4">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300 text-center group"
                  >
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-medium text-sm">
                      {credential.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {credential.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Statistics */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-around">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-medium">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Audits Completed
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-medium">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Legal Cases
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-medium">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image Side */}
          <div className="lg:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="glass-card aspect-square rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`$main-640.avif 640w, main-1024.avif 1024w, main-1600.avif 1600w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`main-640.webp 640w, main-1024.webp 1024w, main-1600.webp 1600w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  />
                  <img
                    src={`main-1024.jpg`} // fallback
                    srcSet={`main-640.jpg 640w, main-1024.jpg 1024w, main-1600.jpg 1600w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    alt="Sarah Mitchell - IT Auditor and Legal Advisor"
                    width={1200}
                    height={700} // <-- set to your real aspect ratio (see script output)
                    className="w-full h-auto object-cover rounded-xl"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-lg hover:scale-110 transition-all duration-300 group">
                <div className="text-sm group-hover:text-primary transition-colors duration-300">
                  Certified
                </div>
                <div className="font-medium group-hover:text-primary transition-colors duration-300">
                  CISA & JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
