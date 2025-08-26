import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import SectionLoader from "./components/SectionLoader";

// lazy-split sections (loaded on demand)
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Experience = lazy(() => import("./components/Experience"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const Fallback = <div className="p-8 text-muted-foreground">Loading…</div>;

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 transition-all duration-500 relative overflow-hidden">
        {/* Subtle background ambiance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/8 to-secondary/12 dark:from-primary/4 dark:to-secondary/8 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/8 to-accent/12 dark:from-secondary/4 dark:to-accent/8 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-tl from-accent/8 to-primary/8 dark:from-accent/4 dark:to-primary/4 rounded-full blur-3xl opacity-60" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />

          <main>
            {/* Above-the-fold loads immediately */}
            <Suspense fallback={Fallback}>
              <Hero />
            </Suspense>

            {/* Below-the-fold sections load when near viewport */}
            <SectionLoader>
              <Suspense fallback={Fallback}>
                <About />
              </Suspense>
            </SectionLoader>

            <SectionLoader>
              <Suspense fallback={Fallback}>
                <Services />
              </Suspense>
            </SectionLoader>

            <SectionLoader>
              <Suspense fallback={Fallback}>
                <Experience />
              </Suspense>
            </SectionLoader>

            <SectionLoader>
              <Suspense fallback={Fallback}>
                <Portfolio />
              </Suspense>
            </SectionLoader>

            <SectionLoader>
              <Suspense fallback={Fallback}>
                <Contact />
              </Suspense>
            </SectionLoader>
          </main>

          <SectionLoader>
            <Suspense fallback={Fallback}>
              <Footer />
            </Suspense>
          </SectionLoader>
        </div>
      </div>
    </ThemeProvider>
  );
}
