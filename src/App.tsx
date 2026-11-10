import { useEffect, useState } from "react";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const projects = [
  {
    index: "01",
    title: "Spandana",
    category: "Product design · Development",
    description:
      "A dedicated place to store all medical records, appointments, and health information for families in India.",
    tone: "coral",
    label: "EDITORIAL WORKSPACE",
    year: "2026",
  },
  {
    index: "02",
    title: "Upadhyay",
    category: "Student Monitor Application · Product design · Development",
    description: "An application that will take care of learning and student monitoring.",
    tone: "lime",
    label: "STUDENT MONITORING",
    year: "2023-2024",
  },
  {
    index: "03",
    title: "PulmoPath",
    category: "Product strategy · Engineering",
    description: "Breathe into clarity with a digital solution for lung cancer monitoring and management.",
    tone: "blue",
    label: "LUNG CANCER MONITORING",
    year: "2023",
  },
];

const experience = [
  {
    years: "2026 — Now",
    role: "Freelancer",
    company: "Jayanth Raj Studio",
    additionalRole: "Product Designer & Front-end Developer",
    detail:
      "Leading product strategy, interface design, and front-end delivery for early-stage teams and established brands.",
  },
  {
    years: "2024 - Now",
    role: "Software Engineer",
    additionalRole: "Full Stack Developer",
    company: "CleanHarbors India LLP",
    detail:
      "Shaped multi-platform products, built a shared design system, and partnered with engineering from discovery to launch.",
  },
  // {
  //   years: "2020 — 2023",
  //   role: "Senior Product Designer",
  //   company: "Northstar Digital",
  //   detail:
  //     "Shaped multi-platform products, built a shared design system, and partnered with engineering from discovery to launch.",
  // },
  // {
  //   years: "2017 — 2020",
  //   role: "Designer & Front-end Developer",
  //   company: "Fieldwork Studio",
  //   detail:
  //     "Created identities and digital experiences for culture, technology, and climate-focused organizations.",
  // },
];

const skills = [
  {
    group: "Design",
    items: ["Product strategy", "UX / UI design", "Visual identity", "Prototyping"],
  },
  {
    group: "Development",
    items: ["React & TypeScript", "Design systems", "Creative front-end", "Python", "Django", "Dotnet"],
  },
  { group: "Tools", items: ["Figma", "Framer", "Webflow", "Git & GitHub"] },
];

function ProjectVisual({ tone, label, year }: { tone: string; label: string; year: string }) {
  if (tone === "coral") {
    return (
      <div className="visual visual-coral">
        <div className="visual-top">
          <span>{label}</span>
          <span>{year}</span>
        </div>
        <div className="coral-orbit">
          <div className="coral-core">S</div>
        </div>
        <div className="visual-caption">Ideas, connected.</div>
      </div>
    );
  }
  if (tone === "lime") {
    return (
      <div className="visual visual-lime">
        <div className="visual-top">
          <span>{label}</span>
          <span>{year}</span>
        </div>
        <div className="morrow-word">
          <span className="U">U</span>PADHYAY
        </div>
        <div className="lime-shape" />
        <div className="visual-caption">Space for better living.</div>
      </div>
    );
  }
  return (
    <div className="visual visual-blue">
      <div className="visual-top">
        <span>{label}</span>
        <span>{year}</span>
      </div>
      <div className="data-rings">
        {[0, 1, 2, 3].map((ring) => (
          <span key={ring} style={{ inset: `${ring * 11}%` }} />
        ))}
        <b>P<b className = "p_square">2</b></b>
      </div>
      <div className="visual-caption">See the change.</div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a href="#top" className="logo" aria-label="Jayanth Raj, home">
          J<span>/</span>R
          <span className="logo-text">STUD<span className="io">IO</span></span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i className={menuOpen ? "menu-icon open" : "menu-icon"}>
            <b />
            <b />
          </i>
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="availability">
          <span /> Available for select projects — 2026
        </div>
        <h1>
          I design &amp; build
          <br />
          <em>digital experiences</em>
          <br />
          with character.
        </h1>
        <div className="hero-bottom">
          <p>
            Independent designer and creative developer helping ambitious teams turn complex ideas
            into memorable digital products.
          </p>
          <a className="circle-link" href="#work" aria-label="View selected work">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>
        </div>
        <div className="hero-mark" aria-hidden="true">
          ✳
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <p className="section-count">(03)</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <ProjectVisual tone={project.tone} label={project.label} year={project.year} />
              <div className="project-info">
                <span className="project-index">{project.index}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p className="project-category">{project.category}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <a
                  href={`mailto:jayanth.prata@gmail.com?subject=${encodeURIComponent(`I'd like to discuss ${project.title}`)}`}
                  className="project-link"
                  aria-label={`Ask about ${project.title}`}
                >
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-head light">
          <p className="eyebrow">A little about me</p>
          <p className="section-count">(04)</p>
        </div>
        <div className="about-grid">
          <h2>
            Strategy in the head.
            <br />
            <em>Craft in the hands.</em>
          </h2>
          <div className="about-copy">
            <p>
              I’m Jayanth Raj, a designer-developer working where visual systems, product thinking,
              and front-end engineering overlap.
            </p>
            <p>
              For the past 2 years, I’ve partnered with founders and teams to shape useful,
              expressive products from first sketch through final build.
            </p>
          </div>
        </div>
        <div className="services">
          {[
            ["01", "Direction", "Product strategy, art direction, creative systems"],
            ["02", "Design", "Identity, UX/UI, interaction, prototyping"],
            ["03", "Development", "Creative front-end, design engineering, motion"],
          ].map(([number, title, text]) => (
            <div className="service" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-head">
          <p className="eyebrow">Career journey</p>
          <p className="section-count">8+ years</p>
        </div>
        <div className="experience-intro">
          <h2>
            From idea to interface,
            <br />
            <em>I stay close to the work.</em>
          </h2>
          <p>
            My career has moved between studios, product teams, and independent practice—always
            centered on making ambitious ideas clear, useful, and beautifully built.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-row" key={item.role}>
              <span className="timeline-number">0{index + 1}</span>
              <p className="timeline-years">{item.years}</p>
              <div className="timeline-role">
                <h3>{item.role}</h3>
                <span>{item.additionalRole}</span>
                <p>{item.company}</p>
              </div>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="career-note">
          <span>Also along the way</span>
          <p>12 launches · 6 design systems · teams across 4 time zones</p>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-head">
          <p className="eyebrow">Capabilities &amp; tools</p>
          <p className="section-count">(12)</p>
        </div>
        <div className="skills-title">
          <h2>
            One practice,
            <br />
            <em>many ways to make.</em>
          </h2>
          <div className="skill-orbit" aria-hidden="true">
            <span>DESIGN</span>
            <b>+</b>
            <span>CODE</span>
          </div>
        </div>
        <div className="skill-groups">
          {skills.map((skill, groupIndex) => (
            <article className="skill-group" key={skill.group}>
              <div className="skill-heading">
                <span>0{groupIndex + 1}</span>
                <h3>{skill.group}</h3>
              </div>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="skills-footnote">
          I choose tools to fit the problem—not the other way around. Always curious, always
          learning.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>
          Let’s make something
          <br />
          <em>worth remembering.</em>
        </h2>
        <a href="mailto:jayanth.prata@gmail.com" className="email-link">
          <span>jayanth.prata@gmail.com</span>
          <ArrowUpRight size={28} />
        </a>
        <footer>
          <p>© {new Date().getFullYear()} Jayanth Raj</p>
          <div>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com/PVN-JayanthRaj" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
