function Chip({ children }: { children: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-sm"
      style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--muted)" }}
    >
      {children}

      
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Role({
  title,
  company,
  location,
  dates,
  bullets,
  stack,
}: {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  stack?: string[];
}) {
  return (
    <div className="card p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">
          {title} — <span className="muted">{company}</span>
        </h3>
        <p className="text-sm muted">{dates}</p>
      </div>
      <p className="text-sm muted">{location}</p>

      <ul className="mt-3 list-disc space-y-1 pl-5 muted">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {stack?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <header className="card p-8">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <div className="mt-5 flex flex-wrap gap-3">
  <a className="btn-primary no-underline hover:no-underline" href="/Nehru-Resume.pdf" download>
    Download PDF
  </a>

  <a
    className="btn-outline no-underline hover:no-underline"
    href="/Nehru-Resume.pdf"
    target="_blank"
    rel="noreferrer"
  >
    Open PDF
  </a>
</div>
        <p className="mt-2 max-w-3xl muted">
          Senior Full Stack .NET Developer (8+ years) delivering secure, scalable enterprise applications
          across microservices, cloud (Azure/AWS), Kubernetes, messaging (Kafka/RabbitMQ), and applied AI/ML.
        </p>

        <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <div className="muted"><span style={{ color: "var(--text)", fontWeight: 600 }}>Name:</span> Nehru P</div>
          <div className="muted"><span style={{ color: "var(--text)", fontWeight: 600 }}>Email:</span> nehrup1997@gmail.com</div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {[".NET 8", "ASP.NET Core", "Microservices", "OAuth2/JWT", "Kafka", "Azure", "AWS", "Docker", "Kubernetes", "React", "Angular", "Applied AI/ML"].map(
            (x) => <Chip key={x}>{x}</Chip>
          )}
        </div>
      </header>

      <Section title="Professional Summary">
        <div className="card p-6">
          <p className="muted">
            Around 8+ years of experience in software design and development using C#, .NET / .NET Core / .NET 6/7/8,
            building enterprise-grade REST APIs and microservices. Strong in API security (OAuth2, OpenID Connect, JWT, SSO),
            cloud deployments (Azure/AWS), containerization (Docker/Kubernetes), and messaging systems (Kafka/RabbitMQ).
            Interested in applied AI/ML for enterprise workflows (RAG-style assistants, automation, monitoring-ready design).
          </p>
        </div>
      </Section>

      <Section title="Core Skills">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-semibold">Backend & APIs</h3>
            <p className="mt-2 muted">
              C#, .NET 6/7/8, ASP.NET Core, Web API, MVC, EF Core, LINQ, Microservices, REST
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold">Security</h3>
            <p className="mt-2 muted">
              OAuth2, JWT, OpenID Connect, SSO, token-based authorization
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold">Cloud & DevOps</h3>
            <p className="mt-2 muted">
              Azure (App Services, Functions, Key Vault, APIM, Azure AD), AWS (Lambda, API Gateway, EKS, CloudWatch),
              CI/CD (Azure DevOps, GitHub Actions, Jenkins), Docker, Kubernetes
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold">Data, Messaging & Frontend</h3>
            <p className="mt-2 muted">
              Kafka, RabbitMQ, SQL Server (T-SQL), Oracle/PLSQL, React, Angular, TypeScript, HTML/CSS
            </p>
          </div>

          <div className="card p-6 lg:col-span-2">
            <h3 className="font-semibold">Applied AI/ML</h3>
            <p className="mt-2 muted">
              RAG-style assistants, enterprise automation workflows, evaluation hooks, monitoring-ready logging and reliability mindset.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Professional Experience">
        <div className="space-y-4">
          <Role
            title="Sr Full Stack .NET Developer"
            company="Johnson & Johnson"
            location="New Brunswick, NJ"
            dates="Jun 2024 – Present"
            bullets={[
              "Designed and delivered enterprise .NET services and APIs using C#, .NET Core/.NET 8, and ASP.NET Core within Agile/Scrum execution.",
              "Implemented secure API access using OAuth2/JWT with consistent authorization patterns to protect sensitive healthcare workflows.",
              "Built and supported Kafka producer/consumer workflows for event-driven processing, validation, and integration reliability.",
              "Implemented healthcare interoperability patterns using FHIR aligned with HL7 standards to standardize data exchange.",
              "Supported UAT and production releases, troubleshooting, and performance improvements with an operational reliability mindset.",
            ]}
            stack={[".NET 8", "ASP.NET Core", "OAuth2/JWT", "Kafka", "FHIR/HL7", "SQL Server"]}
          />

          <Role
            title="Sr .NET Developer"
            company="State of Arkansas"
            location="Little Rock, AR"
            dates="Jan 2023 – May 2024"
            bullets={[
              "Built and enhanced .NET 6 Web APIs with OAuth2-based security, focusing on correctness, performance, and maintainability.",
              "Supported cloud runtime and operations on AWS (Lambda, API Gateway, CloudWatch, EKS) to enable stable deployments and monitoring.",
              "Improved delivery confidence by strengthening CI/CD workflows and adding test coverage using NUnit and structured code reviews.",
              "Monitored and supported messaging workflows using RabbitMQ tooling to diagnose queue/backlog issues and improve reliability.",
            ]}
            stack={[".NET 6", "AWS", "Lambda", "API Gateway", "CloudWatch", "EKS", "RabbitMQ"]}
          />

          <Role
            title=".NET Developer"
            company="ValueMomentum"
            location="India"
            dates="Oct 2020 – Jul 2022"
            bullets={[
              "Delivered full-stack features using React/Angular on the frontend and .NET Core APIs on the backend with clean integration contracts.",
              "Developed microservices and cloud-function style components (Azure Functions patterns) to support scalable business workflows.",
              "Contributed to CI/CD delivery pipelines and supported production deployments, issue triage, and bug fixes.",
            ]}
            stack={[".NET Core", "Microservices", "React", "Angular", "Azure Functions", "CI/CD"]}
          />

          <Role
            title=".NET Developer"
            company="Tech Mahindra"
            location="India"
            dates="Jun 2018 – Sep 2020"
            bullets={[
              "Developed enterprise web applications and services using .NET Framework with WCF-based integrations where required.",
              "Supported end-to-end SDLC delivery: implementation, bug fixes, and coordination across testing and release cycles.",
            ]}
            stack={[".NET Framework", "WCF", "SQL"]}
          />
        </div>
      </Section>

      <Section title="Freelancing / Independent Projects">
        <div className="card p-6">
          <p className="muted">
            Delivered multiple freelance projects end-to-end: requirement gathering → architecture → development →
            deployment → production support. Focus areas include .NET APIs, web applications, integrations, and automation.
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-5 muted">
            <li>Built and deployed secure APIs and web apps with authentication, role-based access, and clean API contracts.</li>
            <li>Implemented integrations with third-party systems and data stores; improved reliability with validation and logging.</li>
            <li>Optimized performance through query tuning and API response improvements where applicable.</li>
          </ul>
        </div>
      </Section>

      <Section title="Education">
        <div className="card p-6">
          <ul className="list-disc space-y-1 pl-5 muted">
            <li>Bachelor’s in Computer Science — Lovely Professional University (2014 – 2018)</li>
            <li>Master’s in Computer Science — Wichita State University (2022 – 2023)</li>
          </ul>
        </div>
      </Section>

      <p className="text-sm muted">
        This page is intentionally ATS-friendly: clean headings, consistent keywords, and readable structure.
      </p>
    </div>
  );
}
