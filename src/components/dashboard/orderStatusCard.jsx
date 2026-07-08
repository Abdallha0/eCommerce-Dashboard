import React from "react";

function OrderStatusCard({ item }) {
  return (
    <div
      key={item._id}
      className={` group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900/40 dark:hover:bg-slate-900/70 ${item.customToneClass}`}
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 shrink-0 rounded-full border border-current opacity-60 transition-transform duration-300 group-hover:scale-125" />

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] opacity-80">
            {item._id}
          </p>
        </div>

        <p className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 transition-transform duration-300 group-hover:translate-x-0.5 sm:text-5xl dark:text-white">
          {item.count.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default OrderStatusCard;
