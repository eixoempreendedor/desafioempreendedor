export default function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-16 md:py-24 ${dark ? "bg-black-soft" : ""} ${className}`}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}
