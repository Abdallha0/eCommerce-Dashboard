import React, { useContext } from "react";
import { breakdownToneClasses } from "../../helpers/tones";
import { PanelDataContext } from "../../pages/DashboardPage";
import OrderStatusCard from "./orderStatusCard";

function createTone(status) {
  switch (status) {
    case "processing":
      return "sky";

    case "shipped":
      return "violet";

    case "cancelled":
      return "rose";

    case "delivered":
      return "emerald";

    case "confirmed":
      return "cyan";

    case "returned":
      return "amber";
    default:
      break;
  }
}

function OrderStatusPanel() {
  const { ordersStatus } = useContext(PanelDataContext);
  return (
    <article
      className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/90"
    >
      <div className="absolute -left-16 -top-16 -z-10 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
            Order Status
          </p>
          <h2 className="text-2xl font-black tracking-wide text-(--text-primary) sm:text-3xl">
            Live fulfillment breakdown
          </h2>
        </div>

        <span className="flex w-fit text-nowrap items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-400 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ordersStatus.map((item) => {
          const tone = createTone(item._id);
          const customToneClass =
            breakdownToneClasses[tone] || "border-slate-800 text-slate-300";

          return (
            <OrderStatusCard key={item._id} item={{...item, customToneClass}} />
          );
        })}
      </div>
    </article>
  );
}

export default React.memo(OrderStatusPanel);
