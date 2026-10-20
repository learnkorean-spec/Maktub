import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Practical, honest guidance on learning Arabic — no invented statistics, just what actually helps.",
};

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="border-b border-ink/10 bg-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Articles
            </h1>
            <p className="mt-4 text-lg text-ink/70">
              Practical guidance on learning Arabic, written honestly — no
              invented statistics or results, just what actually helps.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl divide-y divide-ink/10 px-4 sm:px-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block py-8 first:pt-0"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-2 font-heading text-xl font-bold text-ink transition group-hover:text-ink">
                  {article.title}
                </h2>
                <p className="mt-2 text-ink/70">{article.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-ink/70">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
