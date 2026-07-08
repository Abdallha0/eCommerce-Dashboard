import {
  ShoppingBag,
  CheckCircle2,
  Package,
  TrendingUp,
  Users,
} from "lucide-react";

export default function LoginSidePanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between p-16 bg-linear-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden w-full max-w-lg xl:max-w-xl">
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/15 blur-[100px] pointer-events-none" />

      <div className="relative flex items-center gap-3 group">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
          <ShoppingBag
            size={20}
            className="transition-transform group-hover:scale-110"
          />
        </div>
        <span className="text-xl font-bold tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Store Commerce
        </span>
      </div>

      <div className="relative my-auto space-y-10 z-10">
        <div className="space-y-4">
          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.15] bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Manage your store <br />
            <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              like a pro.
            </span>
          </h1>
          <p className="text-base xl:text-lg text-slate-400 font-medium leading-relaxed max-w-sm">
            Control products, orders, users, and analytics from a modern unified
            dashboard experience.
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-800/60">
          <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
            <div className="text-cyan-400">
              <Package size={18} />
            </div>
            Product Management
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
            <div className="text-blue-400">
              <TrendingUp size={18} />
            </div>
            Real-time Order Tracking
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
            <div className="text-indigo-400">
              <Users size={18} />
            </div>
            Advanced Customer Insights
          </div>
        </div>
      </div>

      <div className="relative text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} Store Commerce Inc. All rights reserved.
      </div>
    </div>
  );
}
