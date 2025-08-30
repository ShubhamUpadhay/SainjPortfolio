import React from "react";
type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  highPriority?: boolean;
};
export function Img({
  highPriority,
  loading,
  decoding,
  fetchpriority,
  ...rest
}: Props) {
  return (
    <img
      loading={highPriority ? undefined : loading ?? "lazy"}
      decoding={decoding ?? "async"}
      fetchPriority={highPriority ? "high" : (fetchpriority as any)}
      {...rest}
    />
  );
}
