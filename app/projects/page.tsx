const caseStudies = [
  {
    title: "Secure Healthcare API Platform",
    context: "Enterprise healthcare workflows requiring secure data exchange and high reliability.",
    problem:
      "Needed scalable APIs with strong authentication/authorization and integration patterns aligned with healthcare standards.",
    solution: [
      "Built RESTful APIs using .NET 8 and ASP.NET Core.",
      "Implemented OAuth2/JWT security and role-based authorization.",
      "Integrated Kafka for asynchronous processing and event-driven workflows.",
      "Enabled FHIR-based data exchange aligned with HL7 standards.",
    ],
    impact: [
      "Improved security posture through standardized auth patterns.",
      "Reduced integration friction using consistent API contracts.",
      "Supported high-throughput workflows with resilient messaging patterns.",
    ],
    tags: [".NET 8", "ASP.NET Core", "OAuth2/JWT", "Kafka", "FHIR/HL7"],
  },
  {
    title: "Cloud Microservices + CI/CD Automation",
    context: "Containerized services requiring consistent deployments and reliable releases.",
    problem:
      "Required stable deployments, automated quality gates, and scalable runtime environments.",
    solution: [
      "Containerized services using Docker and deployed on Kubernetes.",
      "Built CI/CD pipelines to automate build, test, and deploy.",
      "Standardized configuration and secrets patterns for environments.",
      "Improved delivery quality with testing and code review workflows.",
    ],
    impact: [
      "Faster and safer releases through automation.",
      "Improved reliability with consistent deployment patterns.",
      "Higher maintainability via standardized build/test workflows.",
    ],
    tags: ["Docker", "Kubernetes", "CI/CD", "Azure/AWS", "Testing"],
  },
  {
    title: "Legacy Modernization (VB6 / .NET Framework → Modern .NET)",
    context: "Modernizing business-critical legacy systems with minimal disruption.",
    problem:
      "Legacy runtimes limited maintainability, performance, and security improvements.",
    solution: [
      "Migrated components to modern .NET using phased modernization.",
      "Refactored architecture for clearer layering and service boundaries.",
      "Implemented validation/testing to reduce regression risk.",
      "Improved security practices and operational readiness.",
    ],
    impact: [
      "Improved stability and long-term maintainability.",
      "Enabled newer platform capabilities and performance improvements.",
      "Reduced operational risk through structured modernization.",
    ],
    tags: [".NET 6/8", "Refactoring", "Testing", "Security"],
  },
  {
    title: "Applied AI/ML Knowledge Assistant (Enterprise Style)",
    context: "Internal knowledge workflows where speed and accuracy matter.",
    problem:
      "Teams spent time searching documents and repeating answers; needed faster retrieval with traceability.",
    solution: [
      "Designed a RAG-style assistant: chunking + retrieval + grounded responses with citations.",
      "Built an API layer for easy integration with existing apps.",
      "Added evaluation hooks and monitoring-ready logging for production readiness.",
      "Added guardrails to reduce hallucinations and improve reliability.",
    ],
    impact: [
      "Faster knowledge discovery and reduced repetitive support work.",
      "Better trust through citations and traceability.",
      "Production-ready design with monitoring and evaluation support.",
    ],
    tags: ["Applied AI/ML", "RAG", "LLMs", "Observability", "APIs"],
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 muted">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="card p-8">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 max-w-3xl muted">
          Selected case studies across enterprise .NET development, cloud platforms, microservices,
          and applied AI/ML — written in Problem → Solution → Impact format.
        </p>
      </header>

      <div className="space-y-6">
        {caseStudies.map((p) => (
          <article key={p.title} className="card p-6 card-hover">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            <p className="mt-3 muted">
              <span className="font-semibold" style={{ color: "var(--text)" }}>Context:</span>{" "}
              {p.context}
            </p>

            <div className="mt-4 grid gap-6 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold">Problem</h3>
                <p className="mt-2 muted">{p.problem}</p>
              </div>

              <div>
                <h3 className="font-semibold">Solution</h3>
                <BulletList items={p.solution} />
              </div>

              <div>
                <h3 className="font-semibold">Impact</h3>
                <BulletList items={p.impact} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
