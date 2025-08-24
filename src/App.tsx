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
        {/* Subtle background ambiance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/8 to-secondary/12 dark:from-primary/4 dark:to-secondary/8 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/8 to-accent/12 dark:from-secondary/4 dark:to-accent/8 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-tl from-accent/8 to-primary/8 dark:from-accent/4 dark:to-primary/4 rounded-full blur-3xl opacity-60"></div>
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
