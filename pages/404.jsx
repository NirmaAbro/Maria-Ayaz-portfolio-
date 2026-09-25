import Link from "next/link";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" />
      <section className="mx-auto flex max-w-content flex-col items-start px-6 py-28 md:px-10">
        <p className="text-sm text-teal">404</p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          This page hasn&rsquo;t been written yet.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Head back home, or
          browse the research.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/" className="rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-teal">
            Back home
          </Link>
          <Link href="/research" className="rounded-sm border border-ink/25 px-5 py-3 text-sm font-medium text-ink hover:border-teal hover:text-teal">
            View research
          </Link>
        </div>
      </section>
    </Layout>
  );
}
