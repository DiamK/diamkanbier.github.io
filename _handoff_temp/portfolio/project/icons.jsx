// icons.jsx — Small inline SVG icons + project tile glyphs.
// Each glyph is a simple geometric placeholder (circles, rects, diamonds).

const ProjectGlyph = ({ kind, accent }) => {
  const stroke = accent || "var(--accent)";
  const common = { width: 64, height: 64, viewBox: "0 0 64 64", fill: "none" };
  switch (kind) {
    case "compass":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="22" stroke={stroke} strokeWidth="2" />
          <path d="M32 14 L36 32 L32 50 L28 32 Z" fill={stroke} opacity="0.9" />
          <circle cx="32" cy="32" r="3" fill="#0b1620" />
        </svg>
      );
    case "silhouette":
      return (
        <svg {...common}>
          <rect x="10" y="10" width="44" height="44" rx="4" stroke={stroke} strokeWidth="2" />
          <circle cx="32" cy="26" r="6" fill={stroke} />
          <path d="M18 50 C20 38 44 38 46 50 Z" fill={stroke} />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="22" stroke={stroke} strokeWidth="2" />
          <ellipse cx="32" cy="32" rx="22" ry="9" stroke={stroke} strokeWidth="2" />
          <line x1="32" y1="10" x2="32" y2="54" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "fade":
      return (
        <svg {...common}>
          <rect x="10" y="20" width="44" height="24" stroke={stroke} strokeWidth="2" />
          <text x="32" y="38" textAnchor="middle" fontFamily="ui-monospace, monospace"
                fontSize="12" fill={stroke} fontWeight="700">FADE</text>
        </svg>
      );
    case "note":
      return (
        <svg {...common}>
          <circle cx="22" cy="44" r="6" stroke={stroke} strokeWidth="2" />
          <circle cx="44" cy="38" r="6" stroke={stroke} strokeWidth="2" />
          <line x1="28" y1="44" x2="50" y2="38" stroke={stroke} strokeWidth="2" />
          <line x1="28" y1="44" x2="28" y2="16" stroke={stroke} strokeWidth="2" />
          <line x1="50" y1="38" x2="50" y2="14" stroke={stroke} strokeWidth="2" />
          <line x1="28" y1="16" x2="50" y2="14" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...common}>
          <path d="M14 14 H30 V20 a4 4 0 0 0 8 0 V14 H50 V30 h-6 a4 4 0 0 0 0 8 h6 V50 H14 Z"
                stroke={stroke} strokeWidth="2" fill="none" />
        </svg>
      );
    case "flame":
      return (
        <svg {...common}>
          <path d="M32 12 C40 22 46 26 44 38 a12 12 0 1 1 -24 0 C18 30 26 28 28 22 C30 28 30 30 32 32 C32 26 28 22 32 12 Z"
                fill={stroke} opacity="0.9" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="12" y="12" width="40" height="40" stroke={stroke} strokeWidth="2" />
        </svg>
      );
  }
};

// Keycap visual used throughout the design — small monospace key glyph.
// If children is a single character/short token (or a `listenKey` prop is
// provided) the keycap animates down when that key is pressed on the keyboard.
const Key = ({ children, size = "md", listenKey }) => {
  const dims = size === "sm"
    ? { px: 6, py: 1, fs: 11, h: 18 }
    : size === "lg"
    ? { px: 10, py: 4, fs: 14, h: 28 }
    : { px: 8, py: 2, fs: 12, h: 22 };

  const watchKey = (listenKey !== undefined)
    ? listenKey
    : (typeof children === "string" ? children : null);

  const [pressed, setPressed] = React.useState(false);

  React.useEffect(() => {
    if (!watchKey) return;
    const norm = (k) => (k || "").toLowerCase();
    const matches = (e) => {
      const target = norm(watchKey);
      if (target === "esc") return e.key === "Escape";
      if (target === "↑") return e.key === "ArrowUp";
      if (target === "↓") return e.key === "ArrowDown";
      if (target === "?") return e.key === "?" || (e.key === "/" && e.shiftKey);
      return norm(e.key) === target;
    };
    const down = (e) => { if (matches(e)) setPressed(true); };
    const up = (e) => { if (matches(e)) setPressed(false); };
    const blur = () => setPressed(false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, [watchKey]);

  return (
    <span className={`keycap ${pressed ? "is-pressed" : ""}`} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      minWidth: dims.h, height: dims.h,
      padding: `${dims.py}px ${dims.px}px`,
      borderRadius: 6,
      background: pressed ? "var(--accent)" : "var(--surface-2)",
      border: "1px solid",
      borderColor: pressed ? "var(--accent)" : "var(--border)",
      borderBottomWidth: pressed ? 1 : 2,
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: dims.fs, fontWeight: 600,
      color: pressed ? "#0A1220" : "var(--text)",
      lineHeight: 1,
      transform: pressed ? "translateY(1px)" : "translateY(0)",
      boxShadow: pressed
        ? "0 0 0 4px color-mix(in oklab, var(--accent) 28%, transparent), inset 0 1px 0 rgba(0,0,0,0.08)"
        : "0 1px 0 rgba(0,0,0,0.3)",
      transition: "transform 80ms ease-out, background 120ms, color 120ms, border-color 120ms, box-shadow 160ms",
    }}>{children}</span>
  );
};

// Flip-style digit tile (gamified visitor counter)
const DigitTile = ({ d }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 28, height: 36,
    background: "#0a1018",
    border: "1px solid var(--border)",
    borderRadius: 6,
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    fontSize: 22, fontWeight: 700,
    color: "var(--text)",
    boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04), 0 1px 0 rgba(0,0,0,0.4)",
  }}>{d}</span>
);

const DigitGroup = ({ value, pad = 4 }) => {
  const s = String(value).padStart(pad, "0");
  return (
    <span style={{ display: "inline-flex", gap: 4 }}>
      {s.split("").map((d, i) => <DigitTile key={i} d={d} />)}
    </span>
  );
};

// Avatar placeholder — initials in a circle with orbiting ring text.
const Avatar = ({ size = 220, ringText = "DIGITAL DESIGNER · UX RESEARCHER · " }) => {
  const r = size / 2;
  const inner = size - 30;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
           style={{ position: "absolute", inset: 0, animation: "spinSlow 30s linear infinite" }}>
        <defs>
          <path id="ringPath" d={`M ${r}, ${r} m -${r - 8}, 0 a ${r - 8},${r - 8} 0 1,1 ${2*(r-8)},0 a ${r - 8},${r - 8} 0 1,1 -${2*(r-8)},0`} />
        </defs>
        <text fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="11" letterSpacing="2.4" fill="var(--muted)" fontWeight="600">
          <textPath href="#ringPath" startOffset="0">
            {(ringText + ringText).slice(0, 80)}
          </textPath>
        </text>
      </svg>
      <div style={{
        position: "absolute", inset: 18,
        borderRadius: "50%",
        background: "linear-gradient(160deg, var(--surface-2), var(--surface))",
        border: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Stylized portrait placeholder */}
        <svg viewBox="0 0 100 100" width={inner - 8} height={inner - 8}>
          <defs>
            <linearGradient id="avBg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="var(--accent-soft)" />
              <stop offset="1" stopColor="var(--surface)" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#avBg)" />
          {/* shoulders */}
          <path d="M10 100 C 18 78 32 70 50 70 C 68 70 82 78 90 100 Z" fill="var(--surface-2)" />
          {/* neck */}
          <rect x="42" y="58" width="16" height="16" fill="var(--surface-2)" />
          {/* head */}
          <circle cx="50" cy="44" r="18" fill="var(--surface-2)" />
          {/* hair */}
          <path d="M32 40 C 32 28 42 22 52 24 C 60 25 66 30 66 38 C 60 34 54 34 48 36 C 42 38 36 42 32 42 Z" fill="var(--accent)" opacity="0.85" />
          {/* face accent */}
          <circle cx="44" cy="46" r="1.5" fill="var(--text)" />
          <circle cx="56" cy="46" r="1.5" fill="var(--text)" />
          <path d="M46 54 Q 50 56 54 54" stroke="var(--text)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <style>{`
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

// Striped placeholder rectangle for case study imagery
const StripedPlaceholder = ({ label = "PROJECT IMAGE", height = 300 }) => (
  <div style={{
    position: "relative",
    width: "100%", height,
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: `
      repeating-linear-gradient(135deg,
        rgba(255,255,255,0.02) 0 12px,
        rgba(255,255,255,0.04) 12px 24px),
      var(--surface)
    `,
    overflow: "hidden",
    display: "flex", alignItems: "center", justifyContent: "center",
  }}>
    <span style={{
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: 11, letterSpacing: 2.4,
      color: "var(--muted)",
      padding: "6px 10px",
      border: "1px dashed var(--border)",
      borderRadius: 4,
      background: "var(--bg)",
    }}>{label}</span>
  </div>
);

// Simple linear icons used in UI chrome
const IconArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBack = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ transform: "scaleX(-1)" }}>
    <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDot = ({ size = 8, color = "var(--accent)" }) => (
  <svg width={size} height={size} viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

Object.assign(window, {
  ProjectGlyph, Key, DigitTile, DigitGroup, Avatar,
  StripedPlaceholder, IconArrow, IconBack, IconDot,
});
