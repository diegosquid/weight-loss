import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--gray-100)]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[var(--primary)] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-4">Page Not Found</h2>
        <p className="text-[var(--gray-700)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
