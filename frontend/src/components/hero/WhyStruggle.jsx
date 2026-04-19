function WhyStruggle() {
  return (
    <section className="bg-[var(--bg-light)] px-4 sm:px-10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold text-[var(--bg-primary)] mb-4">
            Why beginners struggle in real markets
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 p-4 sm:p-7">
          
          {/* Card 1 */}
          <div className="bg-white/60 rounded-2xl p-6 sm:p-10 border border-white/80">
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-[var(--bg-primary)]">
              <svg
                className="w-6 h-6 text-[var(--accent-primary)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v5l3 3" />
              </svg>
            </div>

            <p className="text-lg sm:text-xl font-semibold text-[var(--bg-primary)] mb-3">
              Lack of real market practice
            </p>
            <p className="text-[var(--bg-primary)]/70 leading-relaxed">
              Beginners often fail because they jump into live trading without
              experience in how markets actually move.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/60 rounded-2xl p-6 sm:p-10 border border-white/80">
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-[var(--bg-primary)]">
              <svg
                className="w-6 h-6 text-[var(--accent-primary)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4m0 4h.01"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
            </div>

            <p className="text-lg sm:text-xl font-semibold text-[var(--bg-primary)] mb-3">
              Poor understanding of risk
            </p>
            <p className="text-[var(--bg-primary)]/70 leading-relaxed">
              Hidden costs, leverage risks, and volatility are often overlooked
              by new traders until it’s too late.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/60 rounded-2xl p-6 sm:p-10 border border-white/80">
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-[var(--bg-primary)]">
              <svg
                className="w-6 h-6 text-[var(--accent-primary)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5a3 3 0 016 0 3 3 0 013 3v1a3 3 0 010 6v1a3 3 0 01-3 3 3 3 0 01-6 0 3 3 0 01-3-3v-1a3 3 0 010-6V8a3 3 0 013-3z"
                />
              </svg>
            </div>

            <p className="text-lg sm:text-xl font-semibold text-[var(--bg-primary)] mb-3">
              Emotional decisions
            </p>
            <p className="text-[var(--bg-primary)]/70 leading-relaxed">
              Fear and greed drive poor decision-making without a disciplined,
              practiced strategy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyStruggle;
