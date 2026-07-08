import {
  Box,
  CircleDollarSign,
  Clock3,
  PackageCheck,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";

const summaryIcons = {
  shoppingBag: ShoppingBag,
  clock: Clock3,
  dollar: CircleDollarSign,
  cart: ShoppingCart,
  box: Box,
  users: Users,
};
function SummaryCard({ card }) {
  const Icon = summaryIcons[card.icon] || PackageCheck;

  return (
<article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/60
        bg-white/80
        p-6
        backdrop-blur-md
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1
        hover:border-slate-300/80
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        dark:border-slate-800/60
        dark:bg-slate-950/80
        dark:hover:border-slate-700/80
        dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
      "
    >
      <div
        className={`
          absolute left-0 top-0 h-0.75 w-full 
          bg-linear-to-r ${card.accent} 
          opacity-80 transition-opacity duration-300 group-hover:opacity-100
        `}
      />

      <div
        className={`
          absolute
          -right-6
          -top-6
          h-36
          w-36
          rounded-full
          bg-linear-to-br ${card.accent}
          opacity-5
          blur-2xl
          transition-all
          duration-700
          ease-in-out
          group-hover:scale-125
          group-hover:opacity-15
          group-hover:blur-3xl
        `}
      />

      <div className="relative flex items-start justify-between gap-5">
        <div className="flex-1 space-y-1.5">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            {card.title}
          </p>
          
          <h3
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              transition-colors
              duration-300
              dark:text-slate-50
            "
          >
            {card.value}
          </h3>
          
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {card.helper}
          </p>
        </div>

        <div
          className={`
            relative
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-linear-to-br ${card.accent}
            text-white
            shadow-md
            shadow-slate-200/50
            transition-all
            duration-500
            ease-out
            group-hover:scale-110
            group-hover:rotate-3
            group-hover:shadow-lg
            dark:shadow-none
          `}
        >
          <div className={`absolute inset-0 -z-10 rounded-2xl bg-linear-to-br ${card.accent} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40`} />
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-slate-200/60 to-transparent dark:via-slate-800/60" />
    </article>
  );
}

export default SummaryCard;
