import {
  IndianRupee,
  PieChart,
  ShieldCheck,
  GraduationCap,
  Bell,
  LineChart
} from "lucide-react";

function FeaturesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-25 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-white">
          Designed for focused market learning
        </h2>

        <p className="mt-3 pb-4 sm:pb-6 text-center text-sm text-[var(--bg-light)]">
          Tools that help you build discipline, context, and confidence.
        </p>

        {/* Features */}
        <div
          className="
            mt-10 sm:mt-12 lg:mt-16
            grid gap-4 sm:gap-6
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
        >
          <FeatureCard
            icon={<IndianRupee size={22} />}
            title="Real-time Indian Simulation"
            desc="Experience NSE/BSE movements with live data feeds tailored for Indian markets."
          />

          <FeatureCard
            icon={<PieChart size={22} />}
            title="Portfolio Analytics"
            desc="Track performance trends and understand your asset allocation decisions."
          />

          <FeatureCard
            icon={<ShieldCheck size={22} />}
            title="Risk Tracking"
            desc="Identify high-risk behaviors and improve discipline through structured feedback."
          />

          <FeatureCard
            icon={<GraduationCap size={22} />}
            title="Learning-first Environment"
            desc="Education over gamification. No noise, no distractions — only insight."
          />

          <FeatureCard
            icon={<Bell size={22} />}
            title="IPO Awareness"
            desc="Understand Indian IPO mechanisms, risks, and participation readiness."
          />

          <FeatureCard
            icon={<LineChart size={22} />}
            title="Technical Analysis Tools"
            desc="Use clean, professional-grade indicators to support informed decisions."
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        rounded-xl
        bg-[var(--accent-primary)]
        border border-white/10
        p-4 sm:p-6
        transition
        hover:border-white/20
        hover:translate-y-[-2px]
      "
    >
      {/* Icon */}
      <div className="mb-4 text-[var(--bg-primary)] opacity-90">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-medium text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-[var(--bg-primary)]">
        {desc}
      </p>
    </div>
  );
}
