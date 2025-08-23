import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Scale,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "IT Security Audits", href: "#services" },
    { label: "Compliance Assessments", href: "#services" },
    { label: "Risk Management", href: "#services" },
    { label: "Legal Consultation", href: "#services" },
    { label: "Incident Response", href: "#services" },
  ];

  const certifications = [
    "CISA Certified",
    "CISM Certified",
    "JD Technology Law",
    "California Bar",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 dark:from-primary dark:via-primary dark:to-primary/95 text-primary-foreground transition-all duration-500 relative overflow-hidden">
      {/* Footer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Sarah Mitchell</h3>
              <p className="text-primary-foreground/80 text-sm">
                IT Auditor & Legal Advisor
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:sarah.mitchell@itauditlaw.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  sarah.mitchell@itauditlaw.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+15551234567"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">
                  San Francisco Bay Area, CA
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://linkedin.com/in/sarahmitchell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn Profile</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-medium mb-4">Credentials</h4>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></div>
                  <span className="text-sm text-primary-foreground/80">
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-3 text-sm">Specializations</h5>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/10 dark:bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 transition-colors duration-300"
                >
                  <Shield className="w-3 h-3 mr-1" />
                  IT Security
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary-foreground/10 dark:bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 transition-colors duration-300"
                >
                  <Scale className="w-3 h-3 mr-1" />
                  Tech Law
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/60">
            © 2025 Sarah Mitchell. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
            <button className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-primary-foreground transition-colors">
              Professional Ethics
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-primary-foreground/50">
            Licensed to practice law in California. IT auditing services
            provided in compliance with professional standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
