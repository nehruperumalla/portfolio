export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="card p-8">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 muted">
          For full-time roles, consulting, or collaborations — feel free to reach out.
        </p>
      </header>

      <section className="card p-6 space-y-2">
        <p className="muted">
          <span style={{ color: "var(--text)", fontWeight: 600 }}>Email:</span>{" "}
          nehrup1997@gmail.com
        </p>
        <p className="muted">
          <span style={{ color: "var(--text)", fontWeight: 600 }}>LinkedIn:</span>{" "}
          linkedin.com/in/pnehru/
        </p>
        <p className="muted">
          <span style={{ color: "var(--text)", fontWeight: 600 }}>GitHub:</span>{" "}
          github.com/nehrup
        </p>
      </section>
    </div>
  );
}
