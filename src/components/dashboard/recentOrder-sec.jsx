import React from "react";
import { dashboardAlerts } from "../../helpers/alerts";
import RecentOrdersList from "./ordersList";
import DashboardNotice from "./DashboardNotice";
function RecentOrderSec({ recentOrders }) {
  const hasOrders = recentOrders.length > 0;

  return (
    <section
      className="
        relative 
        overflow-hidden 
        rounded-4xl 
        border 
        border-slate-200/80 
        bg-white/90 
        p-6 
        backdrop-blur-xl 
        shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] 
        dark:border-slate-800/80 
        dark:bg-slate-950/80 
        dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] 
        sm:p-8
      "
    >
      <div className="absolute -left-16 -bottom-16 -z-10 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
            Recent Orders
          </p>
          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-slate-100">
            Latest customer activity
          </h2>
        </div>

        <span className="w-fit rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-500 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
          {recentOrders.length} total entries
        </span>
      </div>

      {hasOrders ? (
        <RecentOrdersList recentOrders={recentOrders} />
      ) : (
        <DashboardNotice state={dashboardAlerts.empty} />
      )}
    </section>
  );
}

export default RecentOrderSec;
