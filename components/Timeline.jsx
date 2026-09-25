export default function Timeline({ items, renderItem }) {
  return (
    <ol className="relative border-l border-line pl-8 md:pl-10">
      {items.map((item, i) => (
        <li key={i} className="mb-14 last:mb-0">
          <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-paper bg-teal" />
          {renderItem(item, i)}
        </li>
      ))}
    </ol>
  );
}
