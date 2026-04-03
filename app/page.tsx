import Image from "next/image";
import type { ReactNode } from "react";
import FocusPanel from "./focus-panel";

type IconName =
  | "briefcase"
  | "target"
  | "layers"
  | "users"
  | "spark"
  | "check"
  | "calendar"
  | "message"
  | "compass"
  | "map"
  | "rocket"
  | "bar"
  | "mail"
  | "phone"
  | "linkedin"
  | "arrow";

function Icon({
  name,
  className = "icon",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    briefcase: (
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Zm3 0V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 8h10" />
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.3" />
      </>
    ),
    layers: (
      <>
        <path d="m12 4 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </>
    ),
    users: (
      <>
        <path d="M16 19v-1a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1" />
        <circle cx="10.5" cy="9" r="3" />
        <path d="M18 12a2.8 2.8 0 0 1 2.5 2.7V19" />
      </>
    ),
    spark: (
      <path d="m12 3 2.1 4.9L19 10l-4.9 2.1L12 17l-2.1-4.9L5 10l4.9-2.1L12 3Z" />
    ),
    check: <path d="m5 12 4 4 10-10" />,
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    message: (
      <>
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6Z" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m15.5 8.5-2.2 5.2-5.2 2.2 2.2-5.2 5.2-2.2Z" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
        <path d="M9 4v14M15 6v14" />
      </>
    ),
    rocket: (
      <path d="M6 14c2-5 5-8 10-10 2 5 1 9-3 13-3 2-6 2-7 1 0-1 0-2 0-4Z" />
    ),
    bar: <path d="M5 19V9m7 10V5m7 14v-7" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M6 5h4l2 4-2 2c1.2 2.2 2.8 3.8 5 5l2-2 4 2v4c0 1-1 2-2 2A15 15 0 0 1 4 7c0-1 1-2 2-2Z" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M8 10v7M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
      {paths[name]}
    </svg>
  );
}

const featuredProjects = [
  {
    icon: "target" as const,
    title: "Cross-Functional Initiative Planning",
    summary:
      "Structured project plans that align team priorities, milestones, and expected outcomes.",
    details: [
      "Defines clear scope and ownership before execution begins.",
      "Creates delivery timelines with practical checkpoints.",
      "Keeps communication consistent across all stakeholders.",
    ],
  },
  {
    icon: "layers" as const,
    title: "Process Improvement Mindset",
    summary:
      "Focuses on simplifying workflows and improving team coordination through structured methods.",
    details: [
      "Maps existing workflows to identify bottlenecks.",
      "Proposes practical improvements for handoffs and approvals.",
      "Supports teams in adopting repeatable working practices.",
    ],
  },
  {
    icon: "users" as const,
    title: "Stakeholder Communication",
    summary:
      "Builds alignment between contributors by turning goals into shared action plans.",
    details: [
      "Sets clear communication rhythms for updates and decisions.",
      "Tracks dependencies to reduce delivery risk.",
      "Maintains transparency from planning through execution.",
    ],
  },
];

const workflow = [
  {
    step: "01",
    icon: "compass" as const,
    title: "Discover",
    text: "Clarify business goals, constraints, and success metrics with stakeholders.",
  },
  {
    step: "02",
    icon: "map" as const,
    title: "Plan",
    text: "Build phased roadmaps, assign owners, and define execution checkpoints.",
  },
  {
    step: "03",
    icon: "rocket" as const,
    title: "Deliver",
    text: "Coordinate implementation, remove blockers early, and keep teams aligned.",
  },
  {
    step: "04",
    icon: "spark" as const,
    title: "Scale",
    text: "Capture lessons learned, improve playbooks, and stabilize performance outcomes.",
  },
];

export default function Home() {
  return (
    <main className="portfolio-page">
      <div className="ambient ambient-a" aria-hidden />
      <div className="ambient ambient-b" aria-hidden />
      <div className="ambient ambient-c" aria-hidden />

      <header className="section-shell top-nav">
        <a href="#" className="brand">
          <Image src="/logo.png" alt="Gor Hunanyan logo" width={120} height={34} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">
            <Icon name="target" className="icon icon-nav" />
            Projects
          </a>
          <a href="#focus">
            <Icon name="layers" className="icon icon-nav" />
            Focus
          </a>
          <a href="#approach">
            <Icon name="compass" className="icon icon-nav" />
            Approach
          </a>
          <a href="#contact">
            <Icon name="mail" className="icon icon-nav" />
            Contact
          </a>
        </nav>
      </header>

      <section className="hero section-shell fade-in">
        <div className="hero-layout">
          <div>
            <p className="eyebrow-tag">
              <Icon name="briefcase" className="icon icon-chip" />
              Project Manager Portfolio
            </p>
            <h1>
              Gor Hunanyan
              <span>
                Turning complex initiatives into structured delivery systems.
              </span>
            </h1>
            <p className="lead">
              I help teams move from ambiguity to execution through clear
              planning, practical collaboration, and outcome-driven delivery.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <Icon name="target" className="icon icon-btn" />
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Icon name="mail" className="icon icon-btn" />
                Contact
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <Image
                src="/profile.png"
                alt="Portrait of Gor Hunanyan"
                width={340}
                height={420}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell section-space fade-in">
        <div className="section-head">
          <p className="eyebrow">
            <Icon name="spark" className="icon icon-eyebrow" />
            Portfolio Highlights
          </p>
          <h2>Project Management Focus</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="card project-card stagger-item"
            >
              <div className="card-icon-wrap">
                <Icon name={project.icon} className="icon icon-card" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.details.map((item) => (
                  <li key={item}>
                    <Icon name="check" className="icon icon-list" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="focus" className="section-shell section-space fade-in">
        <FocusPanel />
      </section>

      <section id="approach" className="section-shell section-space fade-in">
        <div className="section-head">
          <p className="eyebrow">
            <Icon name="map" className="icon icon-eyebrow" />
            Approach
          </p>
          <h2>Delivery Framework</h2>
        </div>

        <div className="workflow-grid">
          {workflow.map((item) => (
            <article
              key={item.step}
              className="card workflow-card stagger-item"
            >
              <span>
                <Icon name={item.icon} className="icon icon-step" />
                {item.step}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell section-space fade-in">
        <article className="card cta stagger-item">
          <p className="eyebrow">
            <Icon name="message" className="icon icon-eyebrow" />
            Let&apos;s Collaborate
          </p>
          <h2>Open to Project and Operations Roles</h2>
          <p>
            If you are looking for a project manager with a clear, organized,
            and people-focused working style, let&apos;s connect.
          </p>
          <div className="contact-grid">
            <a href="tel:+48507237576" className="contact-item">
              <Icon name="phone" className="icon icon-contact" />
              +48 507 237 576
            </a>
            <a href="mailto:info@ghunanyan.com" className="contact-item">
              <Icon name="mail" className="icon icon-contact" />
              info@ghunanyan.com
            </a>
            <a
              href="https://www.linkedin.com/in/ghunanyan/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <Icon name="linkedin" className="icon icon-contact" />
              LinkedIn Profile
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
