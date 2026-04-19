import RiskSnapshot from "./RiskSnapshot";
import CapitalUsage from "./CapitalUsage";
import StrategyTip from "./StrategyTip";

export default function SidePanel() {
  return (
    <div className="flex flex-col gap-5">
      <RiskSnapshot />
      <CapitalUsage />
      <StrategyTip />
    </div>
  );
}