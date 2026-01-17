import HoldingsTable from "../../utils/HoldingsTable";
import QuickTradePanel from "../../utils/QuickTradePanel";

function tradeSection() {
  return (
    <section className="grid grid-cols-1 p-7  xl:grid-cols-[3fr_1.3fr] gap-6">
      
      {/* Holdings */}
      <HoldingsTable maxHeight="420px" />

      {/* Quick Trade */}
      <QuickTradePanel />

    </section>
  );
}

export default tradeSection;
