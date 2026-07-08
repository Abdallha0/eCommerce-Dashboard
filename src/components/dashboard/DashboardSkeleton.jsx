import React from "react";

function DashboardSkeleton({ summaryData, ordersStatus }) {
  return (
    <div className="space-y-7">
      <section className="rounded-[28px] border border-slate-200/70 bg-slate-100/80 p-8 dark:border-slate-700/70 dark:bg-slate-900/80">
        <div className="h-4 w-52 animate-pulse rounded bg-cyan-300/20" />
        <div className="mt-6 h-9 w-full max-w-xl animate-pulse rounded bg-slate-700/60" />
        <div className="mt-5 h-5 w-full max-w-2xl animate-pulse rounded bg-slate-700/40" />
      </section>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {summaryData.map((card, i) => (
          <div
            key={i}
            className="min-h-52 animate-pulse rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80"
          />
        ))}
      </section>
      <section className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
        <div className="min-h-140 rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80">
          <div className="px-4 py-8 relative space-y-6">
            <div className="h-6 w-52 animate-pulse rounded-full bg-cyan-300/20" />
            <div className="h-6 w-72 animate-pulse rounded-full bg-cyan-300/20" />
            <div className="h-8 w-26 absolute top-8 right-4 animate-pulse rounded-full bg-cyan-300/20" />
          </div>
          <div className="px-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ordersStatus.map((card,i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80"
              />
            ))}
          </div>
        </div>
        <div className="min-h-104 animate-pulse rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80"></div>
      </section>
    </div>
  );
}

export default React.memo(DashboardSkeleton);
