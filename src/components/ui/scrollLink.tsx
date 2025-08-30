// src/components/ui/ScrollLink.tsx
import * as React from "react";
import { Button } from "./button";

// Define ButtonProps here if not exported from './button'
export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

type Props = Omit<ButtonProps, "asChild"> & {
  /** The id of the section you want to scroll to */
  targetId: string;
  /** If true, prevents updating the URL hash */
  replaceHash?: boolean;
};

export function ScrollLink({ targetId, replaceHash, ...btn }: Props) {
  const onClick = React.useCallback(
    (e: React.MouseEvent) => {
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (!replaceHash) {
          history.pushState(null, "", `#${targetId}`);
        }
      }
    },
    [targetId, replaceHash]
  );

  // `href` makes it work even before React hydrates
  return (
    <Button asChild {...btn}>
      <a href={`#${targetId}`} onClick={onClick}>
        {btn.children}
      </a>
    </Button>
  );
}
