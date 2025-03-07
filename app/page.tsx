import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex-center min-h-screen">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="btn-primary"
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login →
          </Link>
          <Link
            className="btn-default"
            href="/signup"
            rel="noopener noreferrer"
          >
            Sign Up →
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        @2025
      </footer>
    </>
  );
}
