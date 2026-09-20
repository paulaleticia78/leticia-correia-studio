import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export default function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
        {icon}
      </div>
      <h3 className="font-display text-lg text-ink-900">{title}</h3>
      <div className="text-sm leading-relaxed text-ink-700">{children}</div>
    </div>
  );
}
