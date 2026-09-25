export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="border-b border-line/70 bg-panel">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        {eyebrow && <p className="text-sm text-teal">{eyebrow}</p>}
        <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
