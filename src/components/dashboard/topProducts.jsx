import React, { useContext } from "react";
import { PanelDataContext } from "../../pages/DashboardPage";

function TopProductsPanel() {
  const { topProducts } = useContext(PanelDataContext);

  return (
    <article 
      className="
        relative 
        overflow-hidden 
        rounded-[32px] 
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
      <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="mb-6 space-y-1.5">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
          Top Products
        </p>
        <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-slate-100">
          Best sellers
        </h2>
      </div>

      <div className="space-y-3.5">
        {topProducts.map((product, index) => {
          // Highlight colors for podium ranks (1st, 2nd, 3rd)
          const rankColors = [
            'text-amber-400 bg-amber-400/10 border-amber-400/20', // 1st Place Gold
            'text-slate-300 bg-slate-300/10 border-slate-300/20', // 2nd Place Silver
            'text-amber-600 bg-amber-600/10 border-amber-600/20', // 3rd Place Bronze
          ];
          const rankStyle = rankColors[index] || 'text-slate-500 bg-slate-800/40 border-slate-700/30';

          return (
            <div
              key={product._id}
              className="
                group
                relative
                flex 
                items-center 
                gap-4 
                rounded-2xl 
                border 
                border-slate-200/60 
                bg-slate-50/70 
                p-3.5 
                transition-all 
                duration-300
                ease-out
                hover:-translate-y-0.5
                hover:border-cyan-500/30 
                hover:bg-slate-100
                hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)]
                dark:border-slate-800/60 
                dark:bg-slate-900/30 
                dark:hover:bg-slate-900/60
              "
            >
              <div 
                className={`
                  flex 
                  h-6 
                  w-6 
                  shrink-0 
                  items-center 
                  justify-center 
                  rounded-full 
                  border
                  text-[11px] 
                  font-bold 
                  transition-transform 
                  duration-300 
                  group-hover:scale-110
                  ${rankStyle}
                `}
              >
                {index + 1}
              </div>

              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 items-center justify-between gap-4 min-w-0">
                <div className="min-w-0 space-y-0.5">
                  <h3 className="truncate text-base font-bold text-slate-950 group-hover:text-cyan-400 transition-colors duration-200 dark:text-slate-100">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 tracking-wide dark:text-slate-400">
                    {product.totalSold.toLocaleString()} units sold
                  </p>
                </div>
                
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold text-slate-950 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 transition-colors duration-300 group-hover:border-cyan-500/10 group-hover:bg-slate-50 dark:text-white dark:bg-slate-800/40 dark:border-slate-800 dark:group-hover:bg-slate-900/60">
                    {'$'+product.revenue}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default React.memo(TopProductsPanel);
