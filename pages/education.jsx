import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Timeline from "../components/Timeline";
import { education } from "../data/profile";
import { FiArrowUpRight } from "react-icons/fi";

export default function Education() {
  return (
    <Layout>
      <Seo
        title="Education"
        description="Academic background: MA in Education (UIII, Indonesia) and BS in English, Gold Medalist (AWKUM, Pakistan)."
      />
      <PageHeader
        eyebrow="Education"
        title="Academic background"
        description="Two degrees, two countries, one throughline: understanding how policy meets the classroom."
      />

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <Timeline
          items={education}
          renderItem={(item) => (
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2 className="font-display text-2xl text-ink">{item.degree}</h2>
                <span className="text-sm text-muted">{item.date}</span>
              </div>
              <p className="mt-1 text-base text-charcoal">{item.institution}</p>
              <p className="text-sm text-muted">
                {item.location} &middot; {item.detail}
              </p>

              <ul className="mt-5 max-w-2xl space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal underline-grow"
                >
                  {item.link.label} <FiArrowUpRight />
                </a>
              )}
            </div>
          )}
        />
      </section>
    </Layout>
  );
}
