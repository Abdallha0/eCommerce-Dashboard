import React from "react";

function DashboardNotice({ state }) {
  return (
    <div className="rounded-3xl border border-dashed border-cyan-300/35 bg-cyan-400/5 p-6">
      <h3 className="text-lg font-bold text-white">{state.title}</h3>
      <p className="mt-2 text-slate-300">{state.description}</p>
    </div>
  );
}

export default React.memo(DashboardNotice);
