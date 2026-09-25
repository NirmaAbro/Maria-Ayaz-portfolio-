import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Timeline from "../components/Timeline";
import { employment } from "../data/profile";

export default function Experience() {
  return (
    <Layout>
      <Seo
        title="Experience"
        description="Employment history: EFL instruction, digital-literacy training, mentorship, and secondary school teaching."
      />
      <PageHeader
        eyebrow="Experience"
        title="Employment history"
        description="Six years teaching and training, before and alongside graduate research."
      />

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <Timeline
          items={employment}
          renderItem={(item) => (
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2 className="font-display text-2xl text-ink">{item.role}</h2>
                <span className="text-sm text-muted">{item.date}</span>
              </div>
              <p className="mt-1 text-base text-charcoal">{item.org}</p>
              <p className="text-sm text-muted">{item.location}</p>

              <ul className="mt-5 max-w-2xl space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
      </section>
    </Layout>
  );
}
