import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white px-6 text-center">
      <span className="text-accent text-sm tracking-[0.25em] uppercase font-semibold mb-3">
        The Lazy Leaf &bull; Kota
      </span>
      <h1 className="text-7xl font-primary font-bold mb-4 text-accent">404</h1>
      <h2 className="text-2xl xl:text-3xl font-primary mb-4">Page Not Found</h2>
      <p className="max-w-md text-secondary mb-8">
        It seems you have wandered off the path. The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className="btn inline-flex items-center justify-center">
        Return Home
      </Link>
    </div>
  );
}
