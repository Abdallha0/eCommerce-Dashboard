import React from "react";
import SummaryCard from "./summaryCard";

function SummaryCardSec({ summaryData }) {
  return (
    <section className="grid gap-6 md:grid-cols-3 xl:grid-cols-3">
      {summaryData.map((card) => (
        <SummaryCard key={card.id} card={card} />
      ))}
    </section>
  );
}

export default SummaryCardSec;
