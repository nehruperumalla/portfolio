import Link from "next/link";
// import "./globals.css";

const strengths = [
  {
    title: "Backend & APIs",
    desc: "ASP.NET Core / .NET 6–8, REST APIs, microservices, EF Core, performance tuning.",
  },
  {
    title: "Security & Compliance",
    desc: "OAuth2, JWT, OpenID Connect, SSO; healthcare-ready integrations (FHIR/HL7).",
  },
  {
    title: "Cloud & DevOps",
    desc: "Azure + AWS deployments, Docker/Kubernetes, CI/CD pipelines, monitoring-minded delivery.",
  },
  {
    title: "Messaging & Integration",
    desc: "Kafka and RabbitMQ for event-driven workflows and reliable async processing.",
  },
  {
    title: "Frontend",
    desc: "React / Angular SPAs integrated with secure .NET APIs; responsive UI and clean UX.",
  },
  {
    title: "Applied AI/ML",
    desc: "RAG-style assistants, automation workflows, evaluation hooks, production-ready observability mindset.",
  },
];

const featured = [
  {
    title: "Secure Healthcare API Platform",
    desc: ".NET 8 APIs with OAuth2/JWT, Kafka workflows, and FHIR/HL7 exchange patterns.",
    tags: [".NET 8", "OAuth2/JWT", "Kafka", "FHIR/HL7"],
  },
  {
    title: "Cloud Microservices + CI/CD",
    desc: "Dockerized services on Kubernetes with automated pipelines and reliable releases.",
    tags: ["Docker", "Kubernetes", "CI/CD", "Azure/AWS"],
  },
  {
    title: "Applied AI/ML Knowledge Assistant",
    desc: "Retrieval + citations with monitoring-ready logging and evaluation hooks.",
    tags: ["RAG", "LLMs", "APIs", "Observability"],
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-sm"
      style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--muted)" }}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <header className="card p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="space-y-5">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
              style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--muted)" }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Senior Full Stack .NET • Microservices • Cloud (Azure/AWS) • Applied AI/ML
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Nehru P
            </h1>

            <p className="max-w-2xl text-lg muted">
              Senior Full Stack .NET Developer (8+ years) building secure, scalable enterprise platforms
              with .NET 6/7/8, microservices, API security, cloud deployments, and applied AI/ML.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>

              <Link href="/resume" className="btn-outline">
                Resume (ATS)
              </Link>

              <Link href="/contact" className="btn-outline">
                Contact
              </Link>
            </div>
          </div>

          {/* AVATAR */}
          <div className="flex justify-center md:justify-end">
            <div className="h-52 w-52 overflow-hidden rounded-3xl border shadow-sm"
                 style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <img
                src="/Nehru.png"
                alt="Nehru Perumalla"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {[".NET 8", "ASP.NET Core", "Microservices", "OAuth2/JWT", "Kafka", "Azure", "AWS", "Docker", "Kubernetes", "React", "Angular", "Applied AI/ML"].map(
            (x) => <Tag key={x}>{x}</Tag>
          )}
        </div>
      </header>

      {/* METRICS */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { k: "8+ Years", v: "Enterprise .NET & Full Stack delivery" },
          { k: "Cloud", v: "Azure + AWS deployments, CI/CD automation" },
          { k: "Architecture", v: "Microservices, secure APIs, messaging" },
        ].map((m) => (
          <div key={m.k} className="card p-6">
            <div className="text-2xl font-semibold">{m.k}</div>
            <div className="mt-1 muted">{m.v}</div>
          </div>
        ))}
      </section>

      {/* CORE STRENGTHS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Core Strengths</h2>
        <p className="max-w-3xl muted">
          The areas I deliver end-to-end: architecture → implementation → testing → deployment → support.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <div key={s.title} className="card p-6 card-hover">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p className="mt-1 muted">
              Recent roles and domains — healthcare, government, insurance.
            </p>
          </div>
          <Link className="text-sm font-semibold hover:opacity-80" href="/resume">
            View full resume →
          </Link>
        </div>

        <div className="space-y-4">
          {[
            {
              role: "Sr Full Stack .NET Developer",
              company: "Johnson & Johnson",
              dates: "Jun 2024 – Present",
              points: [
                ".NET 8 APIs, OAuth2/JWT security, Kafka workflows",
                "FHIR/HL7 healthcare integration patterns",
              ],
            },
            {
              role: "Sr .NET Developer",
              company: "State of Arkansas",
              dates: "Jan 2023 – May 2024",
              points: [
                ".NET APIs with OAuth2 security + AWS services",
                "CI/CD, NUnit testing, RabbitMQ operations support",
              ],
            },
            {
              role: ".NET Developer",
              company: "ValueMomentum",
              dates: "Oct 2020 – Jul 2022",
              points: [
                "React/Angular + .NET APIs",
                "Microservices + cloud functions patterns",
              ],
            },
          ].map((x) => (
            <div key={x.company} className="card p-6 card-hover">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {x.role} — <span className="muted">{x.company}</span>
                </h3>
                <p className="text-sm muted">{x.dates}</p>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 muted">
                {x.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <p className="mt-1 muted">
              Case studies in secure APIs, cloud delivery, and applied AI/ML.
            </p>
          </div>
          <Link className="text-sm font-semibold hover:opacity-80" href="/projects">
            View all projects →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <div key={p.title} className="card p-6 card-hover">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 muted">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <div className="mt-5">
                <Link className="text-sm font-semibold hover:opacity-80" href="/projects">
                  Read case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Let’s build something reliable.</h2>
            <p className="mt-1 max-w-2xl muted">
              Open to senior full stack roles (enterprise .NET + cloud) and applied AI/ML integrations.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-primary">
              Contact Me
            </Link>
            <Link href="/resume" className="btn-outline">
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
