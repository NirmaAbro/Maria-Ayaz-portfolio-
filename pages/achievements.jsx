import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Tabs from "../components/Tabs";
import { conferences, awards } from "../data/profile";

function ConferenceList() {
  return (
    <ul className="divide-y divide-line/70">
      {conferences.map((c, i) => (
        <li key={i} className="flex flex-col gap-1 py-5 first:pt-0 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:max-w-2xl">
            <p className="text-[15px] leading-relaxed text-charcoal">{c.activity}</p>
            <p className="text-sm text-muted">{c.org}</p>
          </div>
          <span className="text-sm text-muted md:text-right">{c.year}</span>
        </li>
      ))}
    </ul>
  );
}

function AwardsList() {
  return (
    <ul className="divide-y divide-line/70">
      {awards.map((a, i) => (
        <li key={i} className="flex flex-col gap-1 py-5 first:pt-0 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="border-l-2 border-gold/70 pl-4 md:max-w-2xl">
            <p className="font-display text-lg leading-snug text-ink">{a.title}</p>
            <p className="mt-1 text-sm text-muted">{a.org}</p>
          </div>
          <span className="pl-4 text-sm text-muted md:pl-0 md:text-right">{a.year}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Achievements() {
  return (
    <Layout>
      <Seo
        title="Achievements"
        description="Conferences, academic activities, scholarships, and awards."
      />
      <PageHeader
        eyebrow="Achievements"
        title="Conferences &amp; awards"
        description="Where the research has been presented, and the recognitions along the way."
      />

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <Tabs
          tabs={[
            { label: "Conferences & activities", content: <ConferenceList /> },
            { label: "Scholarships & awards", content: <AwardsList /> },
          ]}
        />
      </section>
    </Layout>
  );
}
