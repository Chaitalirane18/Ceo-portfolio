import { Fragment } from "react";

/** Renders text, highlighting any [bracketed] part as a fact still to confirm. */
export default function Ph({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        /^\[[^\]]+\]$/.test(p) ? <span key={i} className="ph">{p}</span> : <Fragment key={i}>{p}</Fragment>
      )}
    </>
  );
}

export const stock = (name: string) => `/images/stock/${name}.jpg`;
