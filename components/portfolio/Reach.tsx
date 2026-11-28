import { reachPlaces, reachStages } from "@/data/portfolio";

const townTiles = Array.from({ length: 25 }, (_, index) => ({
  src: `/images/maps/sangamner/t_${Math.floor(index / 5)}_${index % 5}.png`,
  key: index,
}));

export default function Reach() {
  return (
    <section className="reach" id="reach" data-dark>
      <div className="z-pin">
        <div className="cam" id="cam" aria-hidden="true">
          <div className="z-town" id="zTown">
            {townTiles.map((tile) => (
              <img key={tile.key} src={tile.src} alt="" width={256} height={256} />
            ))}
          </div>
          <svg className="z-map" id="zMap" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid slice">
            <use href="/images/maps/india.svg#india-map" />
          </svg>
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
          {reachStages.map((s, index) => (
            <button type="button" key={s.name} aria-pressed={index === 0}>{s.name}</button>
          ))}
        </div>
        <div className="z-cap" id="zCap" aria-live="polite">
          <span className="z-name">{reachStages[0].name}</span>
          <strong>{reachStages[0].count}</strong>
          <p>{reachStages[0].text}</p>
        </div>
        <div className="z-credit">
          Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors
        </div>
      </div>
    </section>
  );
}
