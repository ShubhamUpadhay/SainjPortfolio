import * as React from "react";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  /** The id of the section you want to scroll to */
  targetId: string;
  /** If true, prevents updating the URL hash */
  replaceHash?: boolean;
};

export function ScrollSpan({
  targetId,
  replaceHash,
  children,
  ...rest
}: Props) {
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

  return (
    <span
      {...rest}
      role="link"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(e as any);
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
    </span>
  );
}

export default ScrollSpan;
