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
              {/* Brand rule: no neon (lime) text on a white surface — lime is a
                  fill/background only here, with dark ink text on top of it. */}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime font-heading text-base font-extrabold text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
