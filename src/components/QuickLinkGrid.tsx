import Link from "next/link";
import type { ReactNode } from "react";

export type QuickLink = {
  label: string;
  title: string;
  href: string;
  icon: ReactNode;
};

export default function QuickLinkGrid({ items }: { items: QuickLink[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:p-6"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
            {item.icon}
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-clay-600">
              {item.label}
            </p>
            <p className="mt-1 font-display text-lg leading-snug text-ink-900">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
