import { reachPlaces, reachStages } from "@/data/portfolio";

/**
 * Pinned zoom-out: Sangamner -> Maharashtra -> India -> earth.
 * This version uses a stylised grid and rings. To use real OpenStreetMap tiles/outlines later,
 * add tile images and an SVG map layer inside #cam and extend updateZoom() in Behaviors.tsx.
 */
export default function Reach() {
  return (
    <section className="reach" id="reach" data-dark>
      <div className="z-pin">
        <div className="cam" id="cam" aria-hidden="true">
          <div className="z-grid" id="zGrid" />
          <div className="z-region mh" id="zMh" />
          <div className="z-region in" id="zIn" />
          <img className="earth" id="zEarth" src="/images/stock/earth.jpg" alt="" loading="lazy" />
          {reachPlaces.map((p) => (
            <div key={p.label} className={`z-place${p.region ? " region" : ""}`} data-x={p.x} data-y={p.y} data-min={p.min} data-max={p.max}>
              {!p.region && <i />}<span>{p.label}</span>
            </div>
          ))}
          <div className="z-core" />
          <div className="z-here" id="zHere">Sangamner</div>
        </div>
        <div className="z-head">
          <span className="kicker">Reach</span>
          <h2 className="h2 lines">Built in Sangamner. Used across India and abroad.</h2>
        </div>
        <div className="z-stages" id="zStages" role="group" aria-label="Jump to a stage">
          {reachStages.map((s) => <button type="button" key={s.name}>{s.name}</button>)}
        </div>
        <div className="z-cap" id="zCap" aria-live="polite">
          <span className="z-name">{reachStages[0].name}</span>
          <strong>{reachStages[0].count}</strong>
          <p>{reachStages[0].text}</p>
        </div>
      </div>
    </section>
  );
}
