"use client";

export default function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group border border-gray-border bg-black-soft"
        >
          <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-lg font-medium transition-colors group-open:text-gold">
            {item.question}
            <svg
              className="faq-chevron ml-4 h-5 w-5 shrink-0 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="border-t border-gray-border px-6 py-5 text-gray-text leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
