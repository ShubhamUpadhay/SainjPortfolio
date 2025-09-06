import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollLink } from "./ui/scrollLink";
import { ScrollSpan } from "./ui/ScrollSpan";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 glass-header z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <ScrollSpan
              targetId="hero"
              className="text-xl font-medium text-foreground"
            >
              Sainjali Nayak
            </ScrollSpan>
            <span className="ml-2 text-sm text-muted-foreground">
              IT Auditor & Legal Advisor
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
            >
              Portfolio
            </button>
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="glass hover:scale-105 transition-all duration-300"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="glass hover:scale-105 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/20 mt-4 pt-4 glass-card rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2"
              >
                Portfolio
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="default"
                className="w-full glass hover:scale-105 transition-all duration-300"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
