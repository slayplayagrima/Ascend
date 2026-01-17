import {
  TrendingUp,
  Activity,
  Clock,
  AlertTriangle,
} from "lucide-react";

function PerformanceInsights() {
  // mock data (aligned with ASCEND features)
  const stats = [
    {
      label: "Win Rate",
      value: "62%",
      sub: "+4% vs last month",
      icon: TrendingUp,
      positive: true,
    },
    {
      label: "Risk–Reward Ratio",
      value: "1 : 2.5",
      sub: "Healthy ratio",
      icon: Activity,
      positive: true,
    },
    {
      label: "Avg Hold Time",
      value: "12 Days",
      sub: "Swing trades",
      icon: Clock,
      positive: true,
    },
    {
      label: "Max Drawdown",
      value: "-8.5%",
      sub: "Within limits",
      icon: AlertTriangle,
      positive: false,
    },
  ];

  return (
    <section className="w-full mt-8 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </section>
  );
}

export default PerformanceInsights;

/* ---------------- Stat Card ---------------- */

function StatCard({ icon: Icon, label, value, sub, positive }) {
  return (
    <div
      className="
        rounded-lg
        bg-[var(--bg-secondary)]/20
        border border-white/10
        backdrop-blur-md
        p-5
        transition
        hover:border-[var(--accent-primary)]/40
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 text-[var(--bg-light)] mb-3">
        {Icon && (
          <Icon
            size={18}
            className="text-[var(--accent-primary)]"
          />
        )}
        <span className="text-xs uppercase tracking-wide">
          {label}
        </span>
      </div>

      {/* Main Value */}
      <div className="text-2xl font-semibold text-white">
        {value}
      </div>

      {/* Subtext */}
      {sub && (
        <div
          className={`mt-1 text-sm ${
            positive ? "text-[var(--accent-primary)]" : "text-rose-400"
          }`}
        >
          {sub}
        </div>
      )}
    </div>
  );
}
