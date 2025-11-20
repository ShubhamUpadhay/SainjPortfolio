import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Shield,
  Scale,
  Star,
  CheckCircle,
  Award,
  Zap,
  Target,
  Users,
  ShieldCheck,
} from "lucide-react";
import RealTimeAvailability from "./Availbility";
import ServiceAreasCard from "./ServicesOffered";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sainjali.nayak67@gmail.com",
      link: "mailto:sainjali.nayak67@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7999751073",
      link: "tel:+917999751073",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  const expertiseAreas = [
    { skill: "IT Security Auditing", level: 95, icon: Shield },
    { skill: "Compliance Assessment", level: 92, icon: CheckCircle },
    { skill: "Risk Management", level: 90, icon: Target },
    { skill: "Technology Law", level: 93, icon: Scale },
    { skill: "Incident Response", level: 95, icon: Zap },
    { skill: "Team Leadership", level: 97, icon: Users },
  ];

  const availability = [
    { day: "Monday", status: "available", slots: 3 },
    { day: "Tuesday", status: "limited", slots: 1 },
    { day: "Wednesday", status: "available", slots: 4 },
    { day: "Thursday", status: "busy", slots: 0 },
    { day: "Friday", status: "available", slots: 2 },
  ];

  // const achievements = [
  //   { icon: Award, title: "500+ Audits", subtitle: "Successfully Completed" },
  //   { icon: Star, title: "98% Client", subtitle: "Satisfaction Rate" },
  //   { icon: Shield, title: "Zero Security", subtitle: "Breaches Post-Audit" },
  //   { icon: Scale, title: "50+ Legal", subtitle: "Cases Won" },
  // ];

  const achievements = [
    {
      icon: Award,
      title: "PwC Supernova Award",
      subtitle: "Recognized for audit automation & impact",
    },
    {
      icon: Star,
      title: "HSBC Rising Star",
      subtitle: "Awarded for excellence in privacy governance",
    },
    {
      icon: ShieldCheck,
      title: "Zero Repeat Findings",
      subtitle: "Across IAM, SOX ITGC & Privacy audits",
    },
    {
      icon: CheckCircle,
      title: "Improved Compliance Posture",
      subtitle: "80%+ reduction in risk & privacy gaps",
    },
    {
      icon: Scale,
      title: "Legal & Audit Strength",
      subtitle: "Cyber, IT Law & Regulatory Expertise",
    },
  ];

  return (
    <section
      id="connectInfoCards"
      className="py-16 bg-gradient-to-b from-background via-primary/5 to-secondary/15 dark:via-primary/10 dark:to-secondary/8 transition-all duration-500 relative overflow-hidden"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your organization deserves security, clarity, and confidence — not
            chaos, confusion, or compliance pressure. If you’re looking to
            strengthen cybersecurity, elevate audit readiness, or navigate
            complex privacy and legal requirements, I’m here to support you with
            expertise and empathy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Expertise Showcase */}
          <div className="space-y-8">
            <Card className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Expertise & Skills
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <div className="space-y-6">
                  {expertiseAreas.map((area, index) => {
                    const Icon = area.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-medium">{area.skill}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {area.level}%
                          </span>
                        </div>
                        <Progress value={area.level} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  This Week's Availability
                </CardTitle>
              </CardHeader>

              <RealTimeAvailability />
            </Card>
            <Card className="text-center mt-12">
              <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl mb-4">
                    Confidentiality Guaranteed
                  </CardTitle>
                  <CardContent className="text-muted-foreground max-w-2xl mx-auto">
                    All consultations and communications are strictly
                    confidential. I maintain the highest standards of
                    professional ethics and client confidentiality in accordance
                    with legal and auditing professional standards.
                  </CardContent>
                </CardHeader>
              </div>
            </Card>
          </div>

          {/* Contact Information & Achievements */}
          <div className="space-y-8">
            <Card className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 dark:hover:bg-accent/30 transition-colors duration-300">
                        <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          {info.label === "Email" ? (
                            <a
                              href={`mailto:${
                                info.value
                              }?subject=${encodeURIComponent(
                                "Your Subject Here"
                              )}&body=${encodeURIComponent("Your body here")}`}
                              className="cursor-pointer"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );

                    return info.link ? (
                      <a key={index} href={info.link} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Key Achievements
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 rounded-lg bg-accent/30 dark:bg-accent/20 hover:bg-accent/50 dark:hover:bg-accent/30 transition-colors"
                      >
                        <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="font-medium text-sm">
                          {achievement.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.subtitle}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            <ServiceAreasCard />
          </div>
        </div>
      </div>
    </section>
  );
}
