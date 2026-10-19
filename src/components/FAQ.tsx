import { faq } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
          Common questions
        </h2>
        <div className="mt-8 divide-y divide-ink/10">
          {faq.map(({ q, a }) => (
            <div key={q} className="py-6 first:pt-0">
              <h3 className="font-heading text-lg font-semibold text-ink">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
