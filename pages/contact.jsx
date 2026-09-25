import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import { profile, referees } from "../data/profile";
import { FiMail, FiPhone, FiLinkedin, FiDownload } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

const methods = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/maria-ayaz",
    href: profile.linkedin,
  },
  {
    icon: SiGooglescholar,
    label: "Google Scholar",
    value: "View publications",
    href: profile.scholar,
  },
];

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Get in touch with Maria Ayaz, or reach her academic referees."
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Happy to hear from admissions committees, collaborators, or fellow researchers working on curriculum and leadership."
      />

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-ink">Direct contact</h2>
            <ul className="mt-6 space-y-5">
              {methods.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-sm border border-line bg-panel px-5 py-4 transition-colors hover:border-teal"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-colors group-hover:bg-teal">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">{label}</span>
                      <span className="block text-[15px] font-medium text-ink">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={profile.cvFile}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-teal"
            >
              Download full CV (PDF) <FiDownload />
            </a>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Academic referees</h2>
            <p className="mt-2 text-sm text-muted">Available on request for admissions and collaboration enquiries.</p>
            <ul className="mt-6 divide-y divide-line/70">
              {referees.map((r) => (
                <li key={r.name} className="py-5 first:pt-0">
                  <p className="font-display text-lg text-ink">{r.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">{r.title}</p>
                  <p className="text-sm text-muted">{r.location}</p>
                  {r.relationship && (
                    <p className="mt-1 text-sm text-muted">{r.relationship}</p>
                  )}
                  <a href={`mailto:${r.email}`} className="mt-1 inline-block text-sm text-teal underline-grow">
                    {r.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
