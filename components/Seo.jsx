import Head from "next/head";

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} \u2014 Maria Ayaz` : "Maria Ayaz \u2014 Education Researcher";
  const desc =
    description ||
    "Maria Ayaz is an education researcher and PhD applicant studying school leadership and curriculum reform in Pakistan and Indonesia.";
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
