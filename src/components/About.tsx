import { Card, CardContent } from "./ui/card";
import { Shield, Scale, Award, Users } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: Shield,
      title: "Cybersecurity Expert",
      description: "Specialized in security audits and compliance frameworks"
    },
    {
      icon: Scale,
      title: "Legal Expertise",
      description: "Technology law, data privacy, and regulatory compliance"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "CISA certified with JD in Technology Law"
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Dedicated to protecting organizations and their stakeholders"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-secondary/10 via-background to-accent/5 dark:from-secondary/5 dark:via-background dark:to-accent/10 transition-all duration-500 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient accent */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">About Sarah Mitchell</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unique blend of technical expertise and legal acumen, dedicated to helping 
            organizations navigate the complex intersection of technology and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-3">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over a decade of experience in IT auditing and a Juris Doctor in Technology Law, 
                I bring a comprehensive understanding of both the technical and legal challenges 
                facing modern organizations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My practice focuses on helping businesses achieve and maintain compliance while 
                implementing robust cybersecurity measures that protect against evolving threats 
                and regulatory requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in proactive risk management through thorough auditing, clear legal 
                guidance, and practical solutions that align with business objectives. Every 
                engagement is tailored to the specific needs and risk profile of the organization.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
                  <CardContent className="space-y-3 p-0">
                    <div className="mx-auto w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
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
                Juris Doctor, Technology Law<br />
                MS Computer Science<br />
                CISA Certification
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Specializations</h4>
              <p className="text-sm text-muted-foreground">
                IT Risk Assessment<br />
                Data Privacy Law<br />
                Compliance Frameworks
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Industries</h4>
              <p className="text-sm text-muted-foreground">
                Financial Services<br />
                Healthcare<br />
                Technology Sector
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}