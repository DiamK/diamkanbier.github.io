// data.jsx — Portfolio data
// Loaded as plain JSX-tolerant script; exposes window.PORTFOLIO_DATA.

const PROJECTS = [
  {
    slug: "employee-journey",
    title: "Employee Journey",
    tagline: "Redesigning how candidates apply at Financieelsysteem B.V.",
    summary:
      "A research-led overhaul of the careers experience, turning a confusing single page with no apply button into a four-step application flow with team-matching.",
    discipline: "UX Design",
    year: "2024",
    role: "UX Designer, researcher",
    tools: ["Figma", "Miro", "User interviews"],
    duration: "12 weeks",
    accent: "primary",
    icon: "compass",
    metrics: [
      { label: "Apply conversion", value: "0 → live" },
      { label: "Steps to apply", value: "4" },
      { label: "Sprint cycles", value: "3" },
    ],
    problem:
      "Financieelsysteem had no real way for candidates to apply. The careers page was confusing, there was no apply button, and applications came in by generic email — resulting in zero clarity or conversion.",
    insights: [
      { k: "Effectiveness", v: "No apply button means candidates can't complete their goal." },
      { k: "Efficiency", v: "Absence of search and filters forces users to scroll every listing." },
      { k: "Aesthetics", v: "Minimal styling gave an unprofessional first impression." },
      { k: "Error tolerance", v: "No validation or confirmation leaves users unsure if they applied." },
      { k: "Ease of learning", v: "Buzzword-heavy listings confuse users." },
    ],
    process: [
      {
        title: "Current state audit",
        body: "Stakeholder interviews and a 5E usability walkthrough exposed a critical gap: vacancies were listed, but candidates had no way to apply online.",
      },
      {
        title: "Journey mapping & competitive scan",
        body: "Translated the internal employee journey into a candidate-centric flow and benchmarked it against other fintech and Dutch corporate career sites to surface best practices and pain points.",
      },
      {
        title: "Iterative prototyping",
        body: "Three sprint cycles evolved low-fi wireframes into a hi-fi prototype with search & filter, a 'Find your team' explorer, and a four-step application timeline.",
      },
    ],
    learnings: [
      "Agree on core requirements up front to avoid scope creep.",
      "Protect dedicated design time so research doesn't overshadow prototyping.",
      "Use more and better expert reviews to catch usability issues early.",
      "Next steps: error states, mobile responsiveness, better interactions.",
    ],
  },
  {
    slug: "girl-in-blue",
    title: "Girl in Blue",
    tagline: "A 2D character living in a 3D world.",
    summary:
      "Animation study blending hand-drawn 2D character work with rendered 3D environments — exploring how flat illustration reads against parallax depth.",
    discipline: "Animation",
    year: "2023",
    role: "Animator, illustrator",
    tools: ["Blender", "After Effects", "Procreate"],
    duration: "6 weeks",
    accent: "cyan",
    icon: "silhouette",
  },
  {
    slug: "recharge-the-world",
    title: "Recharge the World",
    tagline: "Marketing campaign to incentivise battery recycling.",
    summary:
      "Campaign concept and visual system encouraging consumers to return household batteries — print, social, and an in-store activation kit.",
    discipline: "Graphic Design",
    year: "2022",
    role: "Designer",
    tools: ["Illustrator", "InDesign", "Photoshop"],
    duration: "4 weeks",
    accent: "cyan",
    icon: "globe",
  },
  {
    slug: "edge-of-night",
    title: "Edge of Night",
    tagline: "Kinetic typography for a Lord of the Rings song.",
    summary:
      "Kinetic typography animation of 'Edge of Night' from The Lord of the Rings — mapping rhythm, emotion, and pacing to motion.",
    discipline: "Animation",
    year: "2022",
    role: "Animator",
    tools: ["After Effects"],
    duration: "3 weeks",
    accent: "primary",
    icon: "fade",
  },
  {
    slug: "finish-the-jam",
    title: "Finish the Jam",
    tagline: "Sing along until the traffic is gone.",
    summary:
      "A speculative in-car UX concept that turns standstill traffic into a karaoke session — easing frustration through play.",
    discipline: "UX Design",
    year: "2023",
    role: "UX Designer",
    tools: ["Figma", "Principle"],
    duration: "5 weeks",
    accent: "primary",
    icon: "note",
  },
  {
    slug: "puzzlewalk",
    title: "Puzzlewalk",
    tagline: "An app that helps elderly with sPAV walk more.",
    summary:
      "Concept app pairing daily walking goals with bite-sized puzzles — encouraging movement in a population for whom every step matters.",
    discipline: "UX Design",
    year: "2024",
    role: "UX Designer, researcher",
    tools: ["Figma", "Field research"],
    duration: "10 weeks",
    accent: "primary",
    icon: "puzzle",
  },
  {
    slug: "fireball-animation",
    title: "Fireball Animation",
    tagline: "Learning fire and smoke simulation in Blender.",
    summary:
      "A short study in particle and fluid simulation — chasing the precise look of a stylised fireball trailing smoke.",
    discipline: "Animation",
    year: "2023",
    role: "Animator",
    tools: ["Blender"],
    duration: "2 weeks",
    accent: "cyan",
    icon: "flame",
  },
];

const NOW = [
  { title: "Reading", value: "The Design of Everyday Things — re-read" },
  { title: "Playing", value: "Outer Wilds, slowly" },
  { title: "Learning", value: "Motion design w/ Rive" },
  { title: "Listening", value: "Synthwave + ambient" },
];

const ABOUT = {
  intro:
    "Analytical and empathic UX Designer with a bachelor's in Communication & Multimedia Design and a solid foundation in ICT. What drives me is curiosity about human behaviour — why people do what they do.",
  paragraphs: [
    "To me, good design starts with empathy. Seeing people not just as 'users,' but as real human beings with motivations, emotions, and behaviour.",
    "Gaming has been part of my life for as long as I can remember, and it shapes a lot of how I think about design. Every interaction, every friction point, dictates how I feel about a digital experience — and that carries into how I approach UX.",
    "Outside of work I explore animation, game design, and psychology, usually as different ways of understanding the same thing: how people perceive and interact with the world around them.",
  ],
  stats: [
    { k: "Projects shipped", v: "07" },
    { k: "Disciplines", v: "UX · Motion · Graphic" },
    { k: "Based in", v: "Netherlands" },
    { k: "Status", v: "Open to work" },
  ],
};

const CONTACT = {
  email: "hello@example.com",
  linkedin: "linkedin.com/in/placeholder",
  socials: [
    { label: "LinkedIn", handle: "/in/placeholder", url: "#" },
    { label: "Email", handle: "hello@example.com", url: "#" },
    { label: "Read.cv", handle: "/placeholder", url: "#" },
    { label: "Are.na", handle: "/placeholder", url: "#" },
  ],
};

window.PORTFOLIO_DATA = { PROJECTS, NOW, ABOUT, CONTACT };
