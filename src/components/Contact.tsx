import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  Shield,
  Scale
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I will get back to you within 24 hours.');
  };

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

  const serviceTypes = [
    { value: "it-audit", label: "IT Security Audit" },
    { value: "compliance", label: "Compliance Assessment" },
    { value: "legal-consultation", label: "Legal Consultation" },
    { value: "risk-assessment", label: "Risk Assessment" },
    { value: "incident-response", label: "Incident Response" },
    { value: "other", label: "Other Services" }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background via-primary/5 to-secondary/15 dark:via-primary/10 dark:to-secondary/8 transition-all duration-500 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to strengthen your organization's security posture and ensure compliance? 
            Let's discuss how I can help protect your business and navigate complex regulatory requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 mr-2 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm mb-2">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-sm mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
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

            <Card className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Schedule a Consultation
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">
                  Prefer to speak directly? Schedule a free 30-minute consultation to discuss 
                  your specific needs and how I can help your organization.
                </p>
                <Button variant="outline" className="w-full">
                  Book Consultation Call
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300">
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
          <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/15 dark:from-accent/5 dark:via-primary/10 dark:to-secondary/8 rounded-2xl p-8 transition-all duration-500 border border-primary/10 dark:border-primary/20">
            <h3 className="text-xl mb-4">Confidentiality Guaranteed</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All consultations and communications are strictly confidential. I maintain the highest 
              standards of professional ethics and client confidentiality in accordance with legal 
              and auditing professional standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}