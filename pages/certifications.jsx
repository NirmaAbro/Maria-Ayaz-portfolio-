import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import { certifications } from "../data/profile";

export default function Certifications() {
  return (
    <Layout>
      <Seo
        title="Certifications"
        description="Professional certifications in TESOL, TEFL, teacher training, and digital literacy."
      />
      <PageHeader
        eyebrow="Certifications"
        title="Professional certifications"
        description="Formal training that sits alongside the research mostly in language teaching and teacher development."
      />

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <ul className="divide-y divide-line/70">
          {certifications.map((cert, i) => (
            <li key={i} className="flex flex-col gap-2 py-6 first:pt-0 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <div className="border-l-2 border-gold/70 pl-4 md:max-w-2xl">
                <p className="font-display text-lg leading-snug text-ink">{cert.title}</p>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </div>
              <span className="pl-4 text-sm text-muted md:pl-0 md:text-right">{cert.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
