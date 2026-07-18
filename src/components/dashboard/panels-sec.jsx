import React from "react";
import OrderStatusPanel from "./orderStatus"
import TopProductsPanel from "./topProducts"

function PanelsSec() {
  return (
    <section className="grid gap-7 md:grid-cols-[1.18fr_0.82fr]">
      <OrderStatusPanel />
      <TopProductsPanel />
    </section>
  );
}

export default React.memo(PanelsSec);
