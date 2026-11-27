import { chapters } from "@/data/portfolio";
import Ph, { stock } from "./Ph";

// Material Icons (Apache 2.0), 24x24, centred on the marker.
const VEH: Record<string, { d: string; rotate?: boolean }> = {
  walk: { d: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" },
  bike: { d: "M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" },
  car: { d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" },
  van: { d: "M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM13 11H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z" },
  plane: { d: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z", rotate: true },
};

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="container">
        <span className="kicker">Journey</span>
        <h2 className="h2 lines">Fourteen years, one step at a time.</h2>
        <div className="road-wrap" id="roadWrap">
          <svg className="road" id="road" aria-hidden="true">
            <path className="base" id="roadBase" />
            <path className="draw" id="roadDraw" />
            <g id="marker" transform="translate(-100 -100)">
              <circle className="badge-dot" r="25" />
              <g className="veh" id="veh">
                <g transform="translate(-14.4 -14.4) scale(1.2)">
                  {Object.entries(VEH).map(([k, v]) => (
                    <path key={k} data-v={k} className={k === "walk" ? "on" : undefined} d={v.d} transform={v.rotate ? "rotate(90 12 12)" : undefined} />
                  ))}
                </g>
              </g>
            </g>
          </svg>
          <div id="roadRows">
            {chapters.map((c) => (
              <div className="r-row" key={c.title}>
                <article className={`r-card${c.next ? " r-next" : ""}`}>
                  <div className="frame">
                    {!c.next && <img src={stock(c.img)} alt={c.alt} loading="lazy" />}
                    {c.next && <strong>Next →</strong>}
                  </div>
                  <div className="txt">
                    <span className="j-year"><Ph>{c.year}</Ph></span>
                    <h3>{c.title}</h3>
                    <p><Ph>{c.text}</Ph></p>
                    <span className="j-place">{c.place}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
