import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Tabs from "../components/Tabs";
import { researchExperience, publicationGroups } from "../data/profile";

function ExperienceList() {
  return (
    <div className="space-y-12">
      {researchExperience.map((item) => (
        <div key={item.role} className="grid gap-2 border-b border-line/70 pb-10 last:border-none md:grid-cols-[1fr_2fr] md:gap-8">
          <div>
            <h3 className="font-display text-xl text-ink">{item.role}</h3>
            <p className="mt-1 text-sm text-charcoal">{item.org}</p>
            <p className="text-sm text-muted">{item.location}</p>
            <p className="mt-1 text-sm text-muted">{item.date}</p>
          </div>
          <ul className="space-y-3">
            {item.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-charcoal">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function PublicationsList() {
  return (
    <div className="space-y-14">
      {publicationGroups.map((group) => (
        <div key={group.label}>
          <h3 className="text-sm font-medium text-muted">
            {group.label}
          </h3>
          <ul className="mt-5 divide-y divide-line/70">
            {group.items.map((pub, i) => (
              <li key={i} className="flex flex-col gap-1 py-5 first:pt-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="rounded-full bg-panel px-2.5 py-0.5 text-xs font-medium text-teal">
                    {pub.year}
                  </span>
                  <p className="font-display text-lg leading-snug text-ink">{pub.title}</p>
                </div>
                <p className="text-sm text-muted">
                  {pub.authors} &middot; <span className="italic">{pub.venue}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Research() {
  return (
    <Layout>
      <Seo
        title="Research"
        description="Research experience and peer-reviewed publications on educational leadership, curriculum policy, and English literature."
      />
      <PageHeader
        eyebrow="Research"
        title="Research work"
        description="Fieldwork, thesis research, and eight peer-reviewed publications across education policy and English literature."
      />

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <Tabs
          tabs={[
            { label: "Research experience", content: <ExperienceList /> },
            { label: "Publications", content: <PublicationsList /> },
          ]}
        />
      </section>
    </Layout>
  );
}
