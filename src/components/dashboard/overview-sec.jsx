import React from "react";

function OverviewSec() {
  return (
    <section className="rounded-3xl border backdrop:blur-2xl border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/90">
      <p className="mb-4 text-[14px] uppercase font-[450] tracking-[4px] text-cyan-300">
        Admin Overview
      </p>
      <h1 className="text-3xl font-bold text-(--text-primary) sm:text-4xl">
        Real-time commerce health
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-(--text-primary)/80">
        Monitor your storefront with AI-style clarity and live API metrics.
      </p>
    </section>
  );
}

export default React.memo(OverviewSec);
