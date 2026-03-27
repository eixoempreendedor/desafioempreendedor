export default function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-4xl tracking-wide text-gold uppercase md:text-5xl">
        {children}
      </h2>
      <div className="mt-3 h-[3px] w-16 bg-gold" />
      {subtitle && (
        <p className="mt-4 text-lg text-gray-text">{subtitle}</p>
      )}
    </div>
  );
}
