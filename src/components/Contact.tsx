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
  Users
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarah.mitchell@itauditlaw.com",
      link: "mailto:sarah.mitchell@itauditlaw.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco Bay Area, CA",
      link: null
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  const expertiseAreas = [
    { skill: "IT Security Auditing", level: 95, icon: Shield },
    { skill: "Compliance Assessment", level: 92, icon: CheckCircle },
    { skill: "Risk Management", level: 90, icon: Target },
    { skill: "Technology Law", level: 88, icon: Scale },
    { skill: "Incident Response", level: 85, icon: Zap },
    { skill: "Team Leadership", level: 87, icon: Users }
  ];

  const availability = [
    { day: "Monday", status: "available", slots: 3 },
    { day: "Tuesday", status: "limited", slots: 1 },
    { day: "Wednesday", status: "available", slots: 4 },
    { day: "Thursday", status: "busy", slots: 0 },
    { day: "Friday", status: "available", slots: 2 }
  ];

  const achievements = [
    { icon: Award, title: "500+ Audits", subtitle: "Successfully Completed" },
    { icon: Star, title: "98% Client", subtitle: "Satisfaction Rate" },
    { icon: Shield, title: "Zero Security", subtitle: "Breaches Post-Audit" },
    { icon: Scale, title: "50+ Legal", subtitle: "Cases Won" }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background via-primary/5 to-secondary/15 dark:via-primary/10 dark:to-secondary/8 transition-all duration-500 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to strengthen your organization's security posture and ensure compliance? 
            Explore my expertise and schedule a consultation to get started.
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
                          <span className="text-sm text-muted-foreground">{area.level}%</span>
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
              
              <CardContent className="p-0">
                <div className="space-y-3">
                  {availability.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/30 dark:bg-accent/20">
                      <span className="font-medium">{day.day}</span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          day.status === 'available' ? 'bg-green-500' :
                          day.status === 'limited' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">
                          {day.status === 'available' && `${day.slots} slots`}
                          {day.status === 'limited' && `${day.slots} slot`}
                          {day.status === 'busy' && 'Fully booked'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Button className="w-full">
                    Book a Consultation Call
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
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
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
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
                      <div key={index} className="text-center p-4 rounded-lg bg-accent/30 dark:bg-accent/20 hover:bg-accent/50 dark:hover:bg-accent/30 transition-colors">
                        <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.subtitle}</div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0 mb-4">
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>IT Security & Risk Assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Scale className="h-5 w-5 text-primary" />
                    <span>Technology Law & Compliance</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="font-medium mb-3">Industries Served</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Financial Services</Badge>
                    <Badge variant="secondary">Healthcare</Badge>
                    <Badge variant="secondary">Technology</Badge>
                    <Badge variant="secondary">Manufacturing</Badge>
                    <Badge variant="secondary">Retail</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl mb-4">Confidentiality Guaranteed</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All consultations and communications are strictly confidential. I maintain the highest 
                standards of professional ethics and client confidentiality in accordance with legal 
                and auditing professional standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}