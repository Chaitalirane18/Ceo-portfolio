import { stats } from "@/data/portfolio";
export function Story() {
  return (
    <section className="story" id="story">
      <div className="container split">
        <div className="sticky">
          <span className="kicker">My story</span>
          <h2 className="h2 lines">Small-town roots. Global ambition.</h2>
          <div className="frame unveil"><img src="/images/stock/town.jpg" alt="A small town in India surrounded by green fields" loading="lazy" id="storyImg" /></div>
        </div>
        <div className="story-body">
          <p className="reveal">I grew up in Sangamner. I earned my Bachelor&apos;s in Computer Science in 2008 and my Master&apos;s in 2010 at PVP College, Pravaranagar. Like most graduates here, I was expected to leave for Pune or Mumbai.</p>
          <p className="big reveal">I chose to build here instead.</p>
          <p className="reveal">In 2012 I started Soulsoft Infotech with a team of three. The agri dealers, shopkeepers and chemists around me ran their businesses on paper and guesswork. They didn&apos;t need complex &ldquo;enterprise&rdquo; software. They needed something simple that worked and that they could afford.</p>
          <p className="reveal">That idea travelled. Today Soulsoft has 12 products, offices in Sangamner, Pune and Nashik, and customers across India and abroad.</p>
          <p className="proud reveal">What I&apos;m proudest of: young engineers from our region now build world-class software without leaving home.</p>
        </div>
      </div>
    </section>
  );
}

export function Numbers() {
  return (
    <section className="numbers" aria-label="Impact in numbers">
      <div className="container">
        <div className="stat-row">
          {stats.map((s) => (
            <div className="stat reveal" key={s.label}>
              <div className="v">{s.count ? <span data-count={s.count}>{s.value}</span> : <span className="ph">{s.value}</span>}</div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
