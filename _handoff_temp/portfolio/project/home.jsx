// home.jsx — Home view for the portfolio
// Sections: topbar, hero, featured project, project grid, now, about, contact

const { useState, useEffect, useRef } = React;

function TopBar({ onNav, visitorCount }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); onNav("home"); }}>
          <span className="brand-mark">◆</span>
          <span className="brand-name">diam.</span>
        </a>
        <nav className="topnav">
          <a href="#work" onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Work</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>About</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Contact</a>
        </nav>
        <div className="status-pill">
          <span className="dot-live" />
          <span>Open to work</span>
          <span className="divider" />
          <span className="muted">Press</span>
          <Key size="sm">C</Key>
          <span className="muted pill-cta">to get in contact with me</span>
        </div>
      </div>
    </header>
  );
}

function Hero({ visitorCount }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="eyebrow">
          <IconDot color="var(--accent)" />
          <span>Portfolio · v3.0 · 2026</span>
        </div>
        <h1 className="display">
          Designing for<br />
          <span className="accent-text">human behaviour.</span>
        </h1>
        <p className="lede">
          I'm <strong>Diam Kanbier</strong> — a digital designer and UX researcher
          working at the intersection of empathy, psychology, and play.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-label">Welcome, visitor</div>
            <DigitGroup value={visitorCount} pad={4} />
          </div>
          <div className="stat">
            <div className="stat-label">Projects shipped</div>
            <DigitGroup value={7} pad={2} />
          </div>
          <div className="stat">
            <div className="stat-label">Discipline</div>
            <div className="stat-value mono">UX · MOTION · GRAPHIC</div>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            <span>Contact me</span>
            <IconArrow />
          </button>
          <button className="btn btn-ghost" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
            Browse projects
          </button>
          <div className="kbd-hint">
            <Key size="sm">↓</Key> <Key size="sm">↑</Key>
            <span>to navigate</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <Avatar size={280} />
        <div className="avatar-tag">
          <IconDot color="var(--accent)" />
          <span className="mono">PLAYER_01</span>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project, onOpen }) {
  return (
    <article className="featured">
      <div className="featured-meta">
        <span className="chip chip-accent">Featured project</span>
        <span className="meta-row">
          <span className="mono">{project.year}</span>
          <span className="dot-sep" />
          <span className="mono">{project.discipline.toUpperCase()}</span>
          <span className="dot-sep" />
          <span className="mono">{project.duration?.toUpperCase()}</span>
        </span>
      </div>
      <div className="featured-grid">
        <div className="featured-text">
          <h2 className="featured-title">{project.title}</h2>
          <p className="featured-tagline">{project.tagline}</p>
          <p className="featured-summary">{project.summary}</p>
          <div className="featured-metrics">
            {(project.metrics || []).map((m, i) => (
              <div key={i} className="metric">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => onOpen(project.slug)}>
            <span>View case study</span>
            <IconArrow />
          </button>
        </div>
        <div className="featured-visual">
          <StripedPlaceholder label="HERO SHOT · 1600×1000" height={360} />
          <div className="visual-caption">
            <span className="mono">FIG. 01</span>
            <span>· Careers landing with apply CTA</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectTile({ project, onOpen, density }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`tile ${hovered ? "is-hovered" : ""} density-${density}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project.slug)}
    >
      <div className="tile-thumb">
        <div className="tile-glyph">
          <ProjectGlyph kind={project.icon}
            accent={project.accent === "cyan" ? "var(--accent-2)" : "var(--accent)"} />
        </div>
        <div className="tile-thumb-stripes" />
      </div>
      <div className="tile-body">
        <div className="tile-headerline">
          <h3 className="tile-title">{project.title}</h3>
          <span className={`chip chip-${project.accent}`}>{project.discipline}</span>
        </div>
        <p className="tile-tagline">{project.tagline}</p>
        <div className="tile-foot">
          <span className="mono muted">{project.year}</span>
          <span className="open-cue">
            <span>Open</span>
            <IconArrow />
          </span>
        </div>
      </div>
      <div className="tile-hover-overlay">
        <div className="overlay-row">
          <span className="mono">CLICK</span>
          <span>to open case study</span>
        </div>
      </div>
    </article>
  );
}

function ProjectGrid({ projects, onOpen, density }) {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <div className="section-title">
          <span className="section-num mono">02</span>
          <h2>All projects</h2>
        </div>
        <div className="section-meta mono">{projects.length} TILES · CLICK TO OPEN</div>
      </div>
      <div className={`grid grid-${density}`}>
        {projects.map((p) => (
          <ProjectTile key={p.slug} project={p} onOpen={onOpen} density={density} />
        ))}
      </div>
    </section>
  );
}

function NowSection({ now }) {
  return (
    <section className="section" id="now">
      <div className="section-head">
        <div className="section-title">
          <span className="section-num mono">03</span>
          <h2>Currently</h2>
        </div>
        <div className="section-meta mono">UPDATED · 28 MAY 2026</div>
      </div>
      <div className="now-grid">
        {now.map((item, i) => (
          <div key={i} className="now-card">
            <div className="now-key mono">{item.title.toUpperCase()}</div>
            <div className="now-val">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ about }) {
  return (
    <section className="section about" id="about">
      <div className="section-head">
        <div className="section-title">
          <span className="section-num mono">04</span>
          <h2>About</h2>
        </div>
        <div className="section-meta mono">/ABOUT.MD</div>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p className="about-intro">{about.intro}</p>
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <aside className="about-side">
          <div className="about-card">
            <div className="card-head mono">STATS</div>
            {about.stats.map((s, i) => (
              <div key={i} className="stat-row">
                <span className="mono muted">{s.k}</span>
                <span>{s.v}</span>
              </div>
            ))}
          </div>
          <div className="about-card">
            <div className="card-head mono">INVENTORY</div>
            <div className="chip-cloud">
              {["Figma","Miro","After Effects","Blender","Principle","Notion","Illustrator","Photoshop"].map(t => (
                <span key={t} className="chip chip-muted">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ContactSection({ contact }) {
  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <div className="section-title">
          <span className="section-num mono">05</span>
          <h2>Let's connect</h2>
        </div>
        <div className="section-meta mono">PRESS <Key size="sm">C</Key></div>
      </div>
      <div className="contact-grid">
        <div className="contact-lead">
          <h3 className="contact-headline">
            Got a problem worth solving?<br />
            <span className="accent-text">I'd love to hear about it.</span>
          </h3>
          <p>
            Available for freelance, contract, or full-time UX/digital design roles
            starting mid-2026.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              <span>{contact.email}</span>
              <IconArrow />
            </a>
            <span className="kbd-hint">
              <Key size="sm">C</Key>
              <span>copy to clipboard</span>
            </span>
          </div>
        </div>
        <ul className="socials">
          {contact.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url}>
                <span className="social-label">{s.label}</span>
                <span className="social-handle mono">{s.handle}</span>
                <IconArrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <span className="mono">© 2026 DIAM KANBIER</span>
      <span className="muted mono">DESIGNED IN HTML · MADE WITH CARE</span>
      <span className="mono">v3.0</span>
    </footer>
  );
}

function HomeView({ onOpen, visitorCount, density, featuredOn }) {
  const { PROJECTS, NOW, ABOUT, CONTACT } = window.PORTFOLIO_DATA;
  const featured = PROJECTS.find(p => p.slug === "employee-journey");
  const others = featuredOn ? PROJECTS.filter(p => p.slug !== featured.slug) : PROJECTS;

  return (
    <div className="home">
      <Hero visitorCount={visitorCount} />
      {featuredOn && (
        <section className="section featured-wrap" id="featured">
          <div className="section-head">
            <div className="section-title">
              <span className="section-num mono">01</span>
              <h2>Selected work</h2>
            </div>
            <div className="section-meta mono">CASE STUDY</div>
          </div>
          <FeaturedCard project={featured} onOpen={onOpen} />
        </section>
      )}
      <ProjectGrid projects={others} onOpen={onOpen} density={density} />
      <NowSection now={NOW} />
      <AboutSection about={ABOUT} />
      <ContactSection contact={CONTACT} />
      <Footer />
    </div>
  );
}

Object.assign(window, { HomeView, TopBar });
