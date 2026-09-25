import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import { about } from "../data/profile";

function ChipList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-panel px-3 py-1.5 text-sm text-charcoal"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <Layout>
      <Seo
        title="About"
        description="Background, research interests, methods, and languages for Maria Ayaz, education researcher and PhD applicant."
      />
      <PageHeader
        eyebrow="About"
        title="From the classroom to the case study"
        description="A brief version of how six years of teaching turned into a research agenda."
      />

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-prose space-y-6">
            {about.bio.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-charcoal md:text-[17px]">
                {para}
              </p>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl text-ink">Research interests</h2>
              <div className="mt-4">
                <ChipList items={about.researchInterests} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Research methods</h2>
              <div className="mt-4">
                <ChipList items={about.researchMethods} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Teaching &amp; training</h2>
              <div className="mt-4">
                <ChipList items={about.teachingSkills} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Languages</h2>
              <ul className="mt-4 space-y-2">
                {about.languages.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-line/70 py-2 text-sm">
                    <span className="font-medium text-ink">{l.name}</span>
                    <span className="text-right text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
