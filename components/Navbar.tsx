import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <div
      className="border-b backdrop-blur"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--card) 85%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Nehru P
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex gap-5 text-sm muted">
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
