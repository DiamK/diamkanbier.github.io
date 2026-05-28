// app.jsx — Root app: routing + tweaks + global keyboard shortcuts

const { useState, useEffect, useRef, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#3D7BFF", "#4FD1E0", "#0A1220"],
  "density": "regular",
  "heroLayout": "split",
  "featuredOn": true,
  "rounded": "soft"
}/*EDITMODE-END*/;

// Palette options:
//   Deep blue (primary)         — #3D7BFF + #4FD1E0
//   Electric blue (analytical)  — #4F6BFF + #7FE5FF
//   Slate steel (subdued)       — #6E94D6 + #9FB8E0
//   Cobalt + amber (warm pop)   — #2E62F4 + #F2B544
const PALETTE_OPTIONS = [
  ["#3D7BFF", "#4FD1E0", "#0A1220"],
  ["#4F6BFF", "#7FE5FF", "#080E1A"],
  ["#6E94D6", "#9FB8E0", "#0B1424"],
  ["#2E62F4", "#F2B544", "#0A1220"],
];

function applyPaletteVars(palette) {
  const [accent, accent2, bg] = palette;
  const root = document.documentElement;
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-2", accent2);
  root.style.setProperty("--bg", bg);
}

function applyRoundedVars(rounded) {
  const map = {
    sharp:  { sm: "2px",  md: "4px",  lg: "6px"  },
    soft:   { sm: "6px",  md: "10px", lg: "16px" },
    pillow: { sm: "10px", md: "16px", lg: "24px" },
  };
  const r = map[rounded] || map.soft;
  const root = document.documentElement;
  root.style.setProperty("--r-sm", r.sm);
  root.style.setProperty("--r-md", r.md);
  root.style.setProperty("--r-lg", r.lg);
}

function useVisitorCounter() {
  const [count, setCount] = useState(1347);
  useEffect(() => {
    const stored = parseInt(localStorage.getItem("dk_visitor") || "0", 10);
    const next = (isFinite(stored) ? stored : 1346) + 1;
    localStorage.setItem("dk_visitor", String(next));
    // Animate up to the count for a "tally" effect
    let cur = Math.max(0, next - 25);
    setCount(cur);
    const id = setInterval(() => {
      cur += 1;
      setCount(cur);
      if (cur >= next) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);
  return count;
}

function CommandHint({ onAction }) {
  return (
    <div className="cmd-hint">
      <Key size="sm">C</Key> contact
      <span className="muted">·</span>
      <Key size="sm">W</Key> work
      <span className="muted">·</span>
      <Key size="sm">A</Key> about
      <span className="muted">·</span>
      <Key size="sm">?</Key> help
    </div>
  );
}

function ContactModal({ open, onClose, contact }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);
  if (!open) return null;
  const copy = async () => {
    try { await navigator.clipboard.writeText(contact.email); setCopied(true); setTimeout(() => setCopied(false), 1600); }
    catch (e) { setCopied(true); setTimeout(() => setCopied(false), 1600); }
  };
  return (
    <div className="modal-veil" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <span className="mono">CONTACT.EXE</span>
          <button className="modal-close" onClick={onClose}>
            <span className="mono">ESC</span>
          </button>
        </div>
        <div className="modal-body">
          <h3>Let's talk.</h3>
          <p className="muted">Drop me a line — I read every message.</p>
          <div className="copy-row" onClick={copy}>
            <span className="mono">{contact.email}</span>
            <span className="copy-btn">{copied ? "COPIED ✓" : "COPY"}</span>
          </div>
          <ul className="modal-socials">
            {contact.socials.map((s) => (
              <li key={s.label}>
                <span>{s.label}</span>
                <span className="mono muted">{s.handle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function HelpOverlay({ open, onClose }) {
  if (!open) return null;
  const items = [
    { k: "C", v: "Open contact" },
    { k: "W", v: "Jump to work" },
    { k: "A", v: "Jump to about" },
    { k: "H", v: "Go home" },
    { k: "ESC", v: "Close overlay" },
    { k: "?", v: "Toggle this menu" },
  ];
  return (
    <div className="modal-veil" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <span className="mono">SHORTCUTS</span>
          <button className="modal-close" onClick={onClose}>
            <span className="mono">ESC</span>
          </button>
        </div>
        <div className="modal-body">
          <ul className="kbd-list">
            {items.map((it) => (
              <li key={it.k}>
                <Key>{it.k}</Key>
                <span>{it.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState({ name: "home", slug: null });
  const [contactOpen, setContactOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const visitorCount = useVisitorCounter();

  useEffect(() => {
    applyPaletteVars(t.palette || TWEAK_DEFAULTS.palette);
  }, [t.palette]);

  useEffect(() => {
    applyRoundedVars(t.rounded || "soft");
  }, [t.rounded]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k === "c") { setContactOpen((v) => !v); e.preventDefault(); }
      else if (k === "?" || (e.key === "/" && e.shiftKey)) { setHelpOpen((v) => !v); e.preventDefault(); }
      else if (k === "w") {
        if (route.name !== "home") setRoute({ name: "home", slug: null });
        setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 50);
      }
      else if (k === "a") {
        if (route.name !== "home") setRoute({ name: "home", slug: null });
        setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 50);
      }
      else if (k === "h") setRoute({ name: "home", slug: null });
      else if (k === "escape") { setContactOpen(false); setHelpOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [route.name]);

  const onNav = (name) => setRoute({ name, slug: null });
  const openProject = (slug) => { setRoute({ name: "project", slug }); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const backToHome = () => { setRoute({ name: "home", slug: null }); setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 50); };

  const { CONTACT } = window.PORTFOLIO_DATA;

  return (
    <div className={`app density-${t.density} hero-${t.heroLayout}`}>
      <TopBar onNav={onNav} visitorCount={visitorCount} />
      <main className="main">
        {route.name === "home" && (
          <HomeView
            onOpen={openProject}
            visitorCount={visitorCount}
            density={t.density}
            featuredOn={t.featuredOn}
          />
        )}
        {route.name === "project" && (
          <ProjectView slug={route.slug} onBack={backToHome} onOpen={openProject} />
        )}
      </main>

      <CommandHint />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} contact={CONTACT} />
      <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor
          label="Palette"
          value={t.palette}
          options={PALETTE_OPTIONS}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakRadio
          label="Corner radius"
          value={t.rounded}
          options={["sharp", "soft", "pillow"]}
          onChange={(v) => setTweak("rounded", v)}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakRadio
          label="Hero"
          value={t.heroLayout}
          options={["split", "stacked"]}
          onChange={(v) => setTweak("heroLayout", v)}
        />
        <TweakToggle
          label="Show featured project"
          value={t.featuredOn}
          onChange={(v) => setTweak("featuredOn", v)}
        />
        <TweakSection label="Demo" />
        <TweakButton onClick={() => { localStorage.removeItem("dk_visitor"); location.reload(); }}>
          Reset visitor counter
        </TweakButton>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
