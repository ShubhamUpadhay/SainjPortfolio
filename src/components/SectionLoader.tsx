import React, { useEffect, useRef, useState } from "react";

export default function SectionLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current!;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            obs.disconnect(); // load once
          }
        });
      },
      { rootMargin: "400px" } // start loading a bit before visible
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // reserve some height before it loads so layout doesn't jump
  return (
    <div ref={ref}>{show ? children : <div style={{ minHeight: 240 }} />}</div>
  );
}
