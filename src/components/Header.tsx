import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary text-white p-2 rounded"
      >
        Skip to main content
      </a>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-medium text-foreground">
              Sainjali Nayak
            </span>
            <span className="ml-2 text-sm text-muted-foreground">
              IT Auditor & Legal Advisor
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              onClick={() => scrollToSection("about")}
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Button>
            <Button
              onClick={() => scrollToSection("experience")}
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Button>
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-40">
            <div className="flex flex-col space-y-2 p-4">
              <Button
                onClick={() => scrollToSection("about")}
                variant="ghost"
                className="text-left text-foreground hover:text-primary transition-colors w-full"
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="ghost"
                className="text-left text-foreground hover:text-primary transition-colors w-full"
              >
                Services
              </Button>
              <Button
                onClick={() => scrollToSection("experience")}
                variant="ghost"
                className="text-left text-foreground hover:text-primary transition-colors w-full"
              >
                Experience
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="ghost"
                className="text-left text-foreground hover:text-primary transition-colors w-full"
              >
                Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="default"
                className="w-full"
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
