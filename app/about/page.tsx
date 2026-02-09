export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="card p-8">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mt-2 max-w-3xl muted">
          I’m a Senior Full Stack .NET Developer with 8+ years of experience building secure and scalable enterprise systems.
          My work spans microservices, API security (OAuth2/JWT), cloud deployments (Azure/AWS), CI/CD, and event-driven messaging
          using Kafka/RabbitMQ.
        </p>
      </header>

      <section className="card p-6">
        <h2 className="text-xl font-semibold">Applied AI/ML (practical engineering)</h2>
        <p className="mt-2 muted">
          I focus on applied AI/ML that improves real workflows — for example, building knowledge assistants (RAG-style retrieval + citations),
          automation, and monitoring-ready pipelines that can be supported in production.
        </p>
      </section>
    </div>
  );
}
