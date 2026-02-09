export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="muted">© {new Date().getFullYear()} Nehru P</p>
        <p className="muted">Built with Next.js • Corporate-clean • Dark mode</p>
      </div>
    </footer>
  );
}
