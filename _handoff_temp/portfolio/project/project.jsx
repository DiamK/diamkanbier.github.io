// project.jsx — Case study detail view

function CaseStudyHeader({ project, onBack }) {
  return (
    <header className="cs-header">
      <button className="btn btn-ghost back-btn" onClick={onBack}>
        <IconBack />
        <span>Back to work</span>
      </button>
      <div className="cs-meta-row mono">
        <span>{project.year}</span>
        <span className="dot-sep" />
        <span>{(project.discipline || "").toUpperCase()}</span>
        <span className="dot-sep" />
        <span>{(project.duration || "—").toUpperCase()}</span>
      </div>
      <h1 className="cs-title">{project.title}</h1>
      <p className="cs-tagline">{project.tagline}</p>
    </header>
  );
}

function CaseStudyMetaCards({ project }) {
  const items = [
    { k: "Role", v: project.role || "—" },
    { k: "Year", v: project.year || "—" },
    { k: "Duration", v: project.duration || "—" },
    { k: "Tools", v: (project.tools || []).join(", ") || "—" },
  ];
  return (
    <section className="cs-meta-cards">
      {items.map((it, i) => (
        <div key={i} className="meta-card">
          <div className="meta-card-key mono">{it.k.toUpperCase()}</div>
          <div className="meta-card-val">{it.v}</div>
        </div>
      ))}
    </section>
  );
}

function CaseStudyMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;
  return (
    <section className="cs-metrics">
      {metrics.map((m, i) => (
        <div key={i} className="big-metric">
          <div className="big-metric-value">{m.value}</div>
          <div className="big-metric-label mono">{m.label.toUpperCase()}</div>
        </div>
      ))}
    </section>
  );
}

function CaseStudyBlock({ num, title, children }) {
  return (
    <section className="cs-block">
      <div className="cs-block-head">
        <span className="section-num mono">{num}</span>
        <h2>{title}</h2>
      </div>
      <div className="cs-block-body">{children}</div>
    </section>
  );
}

function NextProjectFooter({ next, onOpen }) {
  if (!next) return null;
  return (
    <section className="cs-next" onClick={() => onOpen(next.slug)}>
      <div className="cs-next-label mono">NEXT PROJECT</div>
      <div className="cs-next-title">
        <span>{next.title}</span>
        <IconArrow size={20} />
      </div>
      <div className="cs-next-tagline">{next.tagline}</div>
    </section>
  );
}

function ProjectView({ slug, onBack, onOpen }) {
  const { PROJECTS } = window.PORTFOLIO_DATA;
  const idx = PROJECTS.findIndex(p => p.slug === slug);
  const project = PROJECTS[idx];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  if (!project) return <div className="cs-wrap">Not found.</div>;

  return (
    <div className="cs-wrap">
      <CaseStudyHeader project={project} onBack={onBack} />

      <StripedPlaceholder label={`${project.title.toUpperCase()} · HERO IMAGE`} height={420} />

      <CaseStudyMetaCards project={project} />

      {project.metrics && <CaseStudyMetrics metrics={project.metrics} />}

      {project.problem && (
        <CaseStudyBlock num="01" title="Problem">
          <p className="cs-prose">{project.problem}</p>
        </CaseStudyBlock>
      )}

      {project.insights && (
        <CaseStudyBlock num="02" title="Research & insights">
          <div className="insights">
            {project.insights.map((it, i) => (
              <div key={i} className="insight">
                <div className="insight-key mono">{it.k.toUpperCase()}</div>
                <div className="insight-val">{it.v}</div>
              </div>
            ))}
          </div>
        </CaseStudyBlock>
      )}

      {project.process && (
        <CaseStudyBlock num="03" title="Process highlights">
          <ol className="process">
            {project.process.map((p, i) => (
              <li key={i} className="process-step">
                <div className="step-num mono">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="step-title">{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="cs-figs">
            <StripedPlaceholder label="JOURNEY MAP · SVG" height={240} />
            <StripedPlaceholder label="VACANCY PAGE · WIRE" height={240} />
          </div>
        </CaseStudyBlock>
      )}

      {project.learnings && (
        <CaseStudyBlock num="04" title="What I learned">
          <ul className="learnings">
            {project.learnings.map((l, i) => (
              <li key={i}>
                <IconDot color="var(--accent)" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </CaseStudyBlock>
      )}

      {!project.problem && (
        <CaseStudyBlock num="01" title="Overview">
          <p className="cs-prose">{project.summary}</p>
          <p className="cs-prose muted">
            Full case study coming soon. Tap "Back to work" to keep exploring.
          </p>
        </CaseStudyBlock>
      )}

      <NextProjectFooter next={next} onOpen={onOpen} />
    </div>
  );
}

Object.assign(window, { ProjectView });
