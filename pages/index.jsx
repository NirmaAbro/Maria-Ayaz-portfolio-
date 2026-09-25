// import Link from "next/link";
// import { FiArrowUpRight, FiDownload } from "react-icons/fi";
// import Layout from "../components/Layout";
// import Seo from "../components/Seo";
// import ParticlesBackground from "../components/ParticlesBackground";
// import { profile, stats, publicationGroups } from "../data/profile";
// import Img from "next/image";

// const pillars = [
//   {
//     title: "Educational leadership",
//     body: "How school principals interpret and enact reform mandates under pressure, and what support they actually need to lead well.",
//   },
//   {
//     title: "Curriculum & policy",
//     body: "The distance between what a national curriculum document says and what happens once it reaches a classroom.",
//   },
//   {
//     title: "Teacher & student voice",
//     body: "Centring the people implementing reform \u2014 not just the policy that describes it \u2014 in qualitative, language-sensitive research.",
//   },
// ];

// const latestPub = publicationGroups[0].items[0];

// export default function Home() {
//   return (
//     <Layout>
//       <Seo />

//       {/* Hero */}
//       <section className="mx-auto max-w-content px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
//         <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10">
//           <div>
//             <p className="text-sm text-teal">Education researcher &amp; PhD applicant</p>
//             <h1 className="mt-4 font-display text-[2.75rem] leading-[1.08] text-ink md:text-6xl">
//               {profile.name}
//             </h1>
//             <p className="mt-3 font-display text-xl italic text-ink/70 md:text-2xl">
//               {profile.role} &middot; {profile.institution}
//             </p>
//             <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal md:text-lg">
//               {profile.intro}
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/research"
//                 className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-teal"
//               >
//                 Read my research <FiArrowUpRight />
//               </Link>
//               <a
//                 href={profile.cvFile}
//                 download
//                 className="inline-flex items-center gap-2 rounded-sm border border-ink/25 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
//               >
//                 Download CV <FiDownload />
//               </a>
//             </div>
//           </div>

//           {/* Thematic network panel */}
//           <div>
//             <div className="">
//               {/* <ParticlesBackground /> */}
//               <Img src="/mariaProfile.jpeg" alt="maria pic" width={360} height={440}/>
//             </div>
//             {/* <p className="mt-3 text-xs leading-relaxed text-muted">
//               Coding an interview transcript into linked themes &mdash; the method
//               (Braun &amp; Clarke thematic analysis) behind the MA thesis below.
//             </p> */}
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="border-y border-line/70 bg-panel">
//         <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-10">
//           {stats.map((s) => (
//             <div key={s.label}>
//               <p className="font-display text-3xl text-ink md:text-4xl">{s.value}</p>
//               <p className="mt-1 text-sm text-muted">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* What I study */}
//       <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
//         <h2 className="font-display text-3xl text-ink md:text-4xl">What I study</h2>
//         <div className="mt-10 grid gap-10 border-line md:grid-cols-3 md:divide-x md:divide-line">
//           {pillars.map((p) => (
//             <div key={p.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
//               <h3 className="font-display text-xl text-ink">{p.title}</h3>
//               <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Publication highlight */}
//       <section className="border-t border-line/70 bg-panel">
//         <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
//           <p className="text-sm text-teal">Latest publication</p>
//           <blockquote className="mt-4 max-w-2xl font-display text-2xl leading-snug text-ink md:text-3xl">
//             &ldquo;{latestPub.title}&rdquo;
//           </blockquote>
//           <p className="mt-4 text-sm text-muted">
//             {latestPub.authors} ({latestPub.year}). {latestPub.venue}
//           </p>
//           <Link
//             href="/research"
//             className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline-grow"
//           >
//             View all publications <FiArrowUpRight />
//           </Link>
//         </div>
//       </section>
//     </Layout>
//   );
// }


import Link from "next/link";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ParticlesBackground from "../components/ParticlesBackground";
import { profile, stats, publicationGroups } from "../data/profile";
import Img from "next/image";

const pillars = [
  {
    title: "Educational leadership",
    body: "How school principals interpret and enact reform mandates under pressure, and what support they actually need to lead well.",
  },
  {
    title: "Curriculum & policy",
    body: "The distance between what a national curriculum document says and what happens once it reaches a classroom.",
  },
  {
    title: "Teacher & student voice",
    body: "Centring the people implementing reform \u2014 not just the policy that describes it \u2014 in qualitative, language-sensitive research.",
  },
];

const latestPub = publicationGroups[0].items[0];

export default function Home() {
  return (
    <Layout>
      <Seo />

      {/* Hero */}
      ```jsx
      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">

          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-teal">
              Education Researcher &amp; PhD Applicant
            </p>

            <h1 className="mt-4 font-display text-[2.8rem] leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-4 font-display text-xl italic leading-relaxed text-ink/70 md:text-2xl">
              {profile.role} <span className="not-italic text-teal">·</span>{" "}
              {profile.institution}
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-charcoal md:text-lg">
              {profile.intro}
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal"
              >
                Read my research
                <FiArrowUpRight className="text-base" />
              </Link>

              <a
                href={profile.cvFile}
                download
                className="inline-flex items-center gap-2 rounded-sm border border-ink/25 px-6 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                Download CV
                <FiDownload className="text-base" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Decorative background frame */}
              <div className="absolute -right-4 -top-4 h-full w-full rounded-sm " />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-sm bg-panel shadow-sm">
                <Img
                  src="/mariaProfile.jpeg"
                  alt={`${profile.name} profile`}
                  width={460}
                  height={560}
                  priority
                  className="h-[430px] w-[350px] object-cover md:h-[520px] md:w-[400px]"
                />
              </div>

              {/* Small academic label */}
              <div className="absolute -bottom-5 -left-5 border border-line bg-paper px-5 py-3 shadow-sm">
                <p className="text-xs uppercase tracking-[0.15em] text-muted">
                  Research · Education · Policy
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line/70 bg-panel">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-ink md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I study */}
      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-3xl text-ink md:text-4xl">What I study</h2>
        <div className="mt-10 grid gap-10 border-line md:grid-cols-3 md:divide-x md:divide-line">
          {pillars.map((p) => (
            <div key={p.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <h3 className="font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publication highlight */}
      <section className="border-t border-line/70 bg-panel">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm text-teal">Latest publication</p>
          <blockquote className="mt-4 max-w-2xl font-display text-2xl leading-snug text-ink md:text-3xl">
            &ldquo;{latestPub.title}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted">
            {latestPub.authors} ({latestPub.year}). {latestPub.venue}
          </p>
          <Link
            href="/research"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline-grow"
          >
            View all publications <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

