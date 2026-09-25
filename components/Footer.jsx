import Link from "next/link";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import { profile, navLinks } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-panel">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-lg text-ink">Maria Ayaz</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {profile.location}. Researching school leadership and curriculum
            reform, one classroom at a time.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Navigate</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-teal">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-teal" href={`mailto:${profile.email}`}>
                <FiMail /> {profile.email}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-teal" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <FiPhone /> {profile.phone}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-teal"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-teal"
                href={profile.scholar}
                target="_blank"
                rel="noreferrer"
              >
                <SiGooglescholar /> Google Scholar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>&copy; {new Date().getFullYear()} Maria Ayaz. All rights reserved.</p>
          <a href={profile.cvFile} download className="hover:text-teal">
            Download full CV (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
