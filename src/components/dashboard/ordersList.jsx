import React from "react";
import { statusToneClasses } from "../../helpers/tones";

function RecentOrdersList({ recentOrders }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-3">
      {recentOrders.map((order) => {
        const customStatusStyle =
          statusToneClasses[order.status] ||
          "border-slate-200 text-slate-600 bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:bg-slate-900/40";

        return (
          <div
            key={order.id}
            className="
                group
                grid 
                grid-cols-1 
                items-center 
                gap-4 
                rounded-2xl 
                border 
                border-slate-200/60 
                bg-slate-50/70 
                p-4 
                transition-all 
                duration-300 
                ease-out 
                hover:border-slate-300/80
                hover:bg-slate-100
                dark:border-slate-800/60
                dark:bg-slate-900/30
                dark:hover:border-slate-700/80
                dark:hover:bg-slate-900/60
                md:grid-cols-[auto_1fr_auto_auto]
                md:gap-6
              "
          >
            <div className=" h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-xs font-bold tracking-wider text-cyan-600 transition-colors duration-300 group-hover:border-cyan-500/30 flex dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400">
              {getInitials(order.customer)}
            </div>

            <div className="min-w-0 space-y-0.5">
              <p className="truncate text-base font-bold text-slate-950 transition-colors duration-200 group-hover:text-cyan-400 dark:text-slate-100">
                {order.customer}
              </p>
              <p className="truncate text-xs font-medium text-slate-400 tracking-wide">
                <span>{order.product}</span>
                <span className="mx-2 text-slate-400 dark:text-slate-700">·</span>
                <span className="text-slate-500 dark:text-slate-400">{order.date}</span>
              </p>
            </div>

            <div className="md:text-center">
              <span
                className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${customStatusStyle}`}
              >
                {order.status}
              </span>
            </div>

            <div className="text-left md:text-right md:min-w-20">
              <p className="text-base font-semibold tracking-tight text-slate-950 sm:text-lg dark:text-white">
                {'$'+order.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(RecentOrdersList);
