import { Sparkles } from "lucide-react";

export default function BrandTagline() {
  return (
    <>
      {/* Tagline Section */}
      <section className="py-8 flex justify-center select-none">
        <div
          className="
            flex items-center justify-center gap-5 px-10 py-5 
            rounded-2xl w-fit
            bg-zinc-900/60 
            backdrop-blur-xl 
            shadow-[0_0_35px_-4px_rgba(0,0,0,0.55)]
          "
        >
          {/* Left accent */}
          <div className="w-2 h-12 rounded-full bg-zinc-600/40"></div>

          <Sparkles className="h-6 w-6 text-zinc-300" />

          <p
            className="
              text-lg md:text-xl font-bold italic
              tracking-wide text-zinc-100 text-center
            "
          >
            Security with clarity. Compliance with confidence.
          </p>

          <Sparkles className="h-6 w-6 text-zinc-300" />
        </div>
      </section>
      <div
        style={{
          height: "1px",
          borderBottom: "1px solid #E5DCC5",
        }}
      />
    </>
  );
}
