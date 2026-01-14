import { Award, Shield, Users } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { Img } from "./ui/img";
import { ScrollLink } from "./ui/scrollLink";
import styles from "./stars.module.css";
import { useEffect, useState } from "react";

export function Hero() {
  const credentials = [
    {
      icon: Shield,
      title: "CISA Trained",
      subtitle: "IT Audit & Risk Professional",
    },
    {
      icon: Award,
      title: "LL.B. in Cyber & IT Law",
      subtitle: "Symbiosis Law College, Pune",
    },
    {
      icon: Users,
      title: "Global Experience",
      subtitle: "PwC, HSBC, University of Virginia",
    },
  ];

  let theme = useTheme().theme;

  const [starTheme, setStarTheme] = useState(theme);
  useEffect(() => {
    setStarTheme(theme);
  }, [theme]);
  return (
    <section
      id="hero"
      className="pt-20 pb-16 bg-gradient-to-br from-transparent via-primary/5 to-secondary/20 dark:via-primary/10 dark:to-secondary/5 transition-colors duration-300 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className={styles.wrapper} data-theme={starTheme}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/6 dark:from-primary/6 dark:to-secondary/3 pointer-events-none z-0"></div>

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
                IT Auditor, Risk & Compliance Specialist with a Legal Edge
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I bridge the worlds of technology, risk, and law to help
                organizations stay secure, compliant, and resilient. With
                expertise in ITGC, SOX, ISO 27001, Data Privacy, GRC frameworks,
                and Cyber & IT Law, I’ve led high-impact audits and risk
                programs across industries — from global banks and healthcare
                leaders to media, retail, and government enterprises.{" "}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-start gap-3">
              <ScrollLink targetId="contact" variant="default" size="lg">
                Get in touch
              </ScrollLink>
              <ScrollLink
                targetId="services"
                variant="outline"
                size="lg"
                replaceHash
              >
                View services
              </ScrollLink>
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
                  <div className="text-xl font-medium">25+</div>
                  <div className="text-sm text-muted-foreground">
                    Certifications
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-xl font-medium">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Controls Tested
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-xl font-medium">100+</div>
                  <div className="text-sm text-muted-foreground">
                    Risk Assessments
                    <br /> & Audits
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
                  <Img
                    highPriority
                    src={`main-1024.jpg`} // fallback
                    srcSet={`main-640.jpg 640w, main-1024.jpg 1024w, main-1600.jpg 1600w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    alt="Sainjali Nayak – IT Audit & Risk Professional"
                    className="mx-auto max-w-lg rounded-2xl shadow-lg"
                    decoding
                  />
                </picture>
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-lg hover:scale-110 transition-all duration-300 group">
                <div className="text-sm group-hover:text-primary transition-colors duration-300">
                  Winning Auditor
                </div>
                <div className="font-medium group-hover:text-primary transition-colors duration-300">
                  PwC & HSBC Award
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
