import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 transition-all duration-500 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/30 dark:from-primary/10 dark:to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-accent/30 dark:from-secondary/10 dark:to-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-tl from-accent/20 to-primary/20 dark:from-accent/10 dark:to-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Experience />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
