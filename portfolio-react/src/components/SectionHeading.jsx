export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-baseline gap-3">
        {index && <span className="font-mono text-sm text-text-dim">{index}</span>}
        <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="mt-2 text-text-muted max-w-xl">{subtitle}</p>}
    </div>
  );
}
