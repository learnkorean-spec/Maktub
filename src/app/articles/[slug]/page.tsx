import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { articles, getArticle } from "@/lib/articles";
import { TRIAL_BOOKING_URL } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      images: [article.image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "en",
    author: { "@type": "Organization", name: "maktub" },
    publisher: { "@type": "Organization", name: "maktub" },
    mainEntityOfPage: `https://mkatub.kloversegy.com/articles/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <article className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <Link href="/articles" className="text-sm font-semibold text-ink/60 hover:text-ink">
              ← All articles
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/40">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
              {article.title}
            </h1>
            <div className="relative mt-8 h-56 w-full overflow-hidden rounded-card sm:h-80">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(min-width: 672px) 672px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="prose-ink mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              {article.body.map((paragraph, i) =>
                paragraph.startsWith("## ") ? (
                  <h2 key={i} className="pt-4 font-heading text-xl font-bold text-ink">
                    {paragraph.slice(3)}
                  </h2>
                ) : (
                  <p key={i}>{paragraph}</p>
                ),
              )}
            </div>

            <div className="mt-12 rounded-card border border-ink/10 bg-sand/30 p-8 text-center">
              <h2 className="font-heading text-lg font-bold text-ink">
                Want help figuring out your own starting point?
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                A free intro call with Reham sorts out Fusha vs. dialect for
                your specific goal.
              </p>
              <div className="mt-5">
                <PrimaryCTA href={TRIAL_BOOKING_URL}>Book a trial class</PrimaryCTA>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
