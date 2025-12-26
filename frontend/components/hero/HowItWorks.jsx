import { GraduationCap, Activity, BarChart3 } from "lucide-react";

function HowItWorks() {
  return (
    <section className="py-14 sm:py-18 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-left px-0 sm:px-6 lg:px-13 mb-6 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
            How it works?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[var(--bg-light)]">
            A structured path to market mastery.
          </p>
        </div>

        {/* Bar-style cards */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-end px-0 sm:px-6 lg:px-13 justify-between gap-8 sm:gap-12 lg:gap-20">

          {/* LEARN */}
          <div className="relative w-full lg:w-1/3 h-[300px] sm:h-[340px] rounded-2xl p-6 sm:p-8
            bg-[var(--accent-secondary)]/20 border border-white/10 transition-all duration-300
            hover:shadow-[0_10px_20px_rgba(156,201,127,0.25)]">
            
            <div className="mb-6 w-10 h-10 rounded-full 
              bg-[var(--accent-primary)]/20 
              flex items-center justify-center">
              <GraduationCap
                size={20}
                className="text-[var(--accent-primary)]"
              />
            </div>

            <h4 className="text-lg sm:text-xl font-medium text-white mb-4">
              Learn
            </h4>

            <p className="text-sm leading-relaxed text-[var(--bg-light)]">
              Understand markets, risk, and trading rules through curated
              educational modules tailored for Indian markets.
            </p>
          </div>

          {/* SIMULATE */}
          <div className="relative w-full lg:w-1/3 h-[360px] sm:h-[420px] rounded-2xl p-6 sm:p-8
            bg-[var(--accent-secondary)]/20 border border-white/10 transition-all duration-300
            hover:shadow-[0_10px_20px_rgba(156,201,127,0.25)]">
            
            <div className="mb-6 w-10 h-10 rounded-full 
              bg-[var(--accent-primary)]/20 
              flex items-center justify-center">
              <Activity
                size={20}
                className="text-[var(--accent-primary)]"
              />
            </div>

            <h4 className="text-lg sm:text-xl font-medium text-white mb-4">
              Simulate
            </h4>

            <p className="text-sm leading-relaxed text-[var(--bg-light)]">
              Trade using real Indian market data (NSE/BSE) with virtual
              capital. Experience volatility without financial loss.
            </p>
          </div>

          {/* ANALYZE */}
          <div className="relative w-full lg:w-1/3 h-[420px] sm:h-[500px] rounded-2xl p-6 sm:p-8
            bg-[var(--accent-secondary)]/20 border border-white/10 transition-all duration-300
            hover:shadow-[0_10px_20px_rgba(156,201,127,0.25)]">
            
            <div className="mb-6 w-10 h-10 rounded-full 
              bg-[var(--accent-primary)]/20 
              flex items-center justify-center">
              <BarChart3
                size={20}
                className="text-[var(--accent-primary)]"
              />
            </div>

            <h4 className="text-lg sm:text-xl font-medium text-white mb-4">
              Analyze
            </h4>

            <p className="text-sm leading-relaxed text-[var(--bg-light)]">
              Review performance, discipline, and readiness. Get detailed
              analytics on your trading behavior.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
