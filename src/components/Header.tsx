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
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-medium text-foreground">Sarah Mitchell</span>
            <span className="ml-2 text-sm text-muted-foreground">IT Auditor & Legal Advisor</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('contact')}
              variant="default"
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
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
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