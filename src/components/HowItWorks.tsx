import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-ink/10 bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
          How classes work
        </h2>
        <ol className="mt-10 grid gap-10 sm:grid-cols-3">
          {howItWorks.map((step, i) => (
            <li key={step.title}>
              <span className="font-heading text-4xl font-extrabold text-lime/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
