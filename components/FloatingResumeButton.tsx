import Link from "next/link";

export default function FloatingResumeButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/Nehru-Resume.pdf"
        download
        className="btn-primary shadow-xl transition hover:scale-105 no-underline"
        >
        ⬇ Resume
      </Link>
    </div>
  );
}
