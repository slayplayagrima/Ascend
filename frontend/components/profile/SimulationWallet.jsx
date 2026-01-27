import { Wallet, RotateCcw } from "lucide-react";

function SimulationWallet() {
  return (
    <section className="w-full mb-0 ">
      {/* Section Title */}
      <h3 className="text-sm uppercase tracking-wide text-[var(--bg-light)] mb-4">
        Simulation Wallet
      </h3>

      {/* Card */}
      <div className="py-7 rounded-2xl bg-[var(--bg-secondary)]/20 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-6">
        
        {/* Balance Info */}
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-2">
            <Wallet size={14} />
            AVAILABLE VIRTUAL BALANCE
          </div>

          <p className="text-3xl pt-3 font-semibold text-[var(--accent-primary)]">
            ₹1,00,000.00
          </p>

          <p className="text-xs text-[var(--bg-light)] mt-2 max-w-md">
            This is a simulated trading environment. No real funds are at risk.
          </p>
        </div>

        {/* Reset Button - Below Balance */}
        <div>
          <button
            className="
              px-5 py-2 rounded-lg mt-2
              text-sm font-medium
              text-rose-400
              border border-red-400/30
              bg-red-400/10
              hover:bg-red-400/20
              transition
              flex items-center gap-2
              w-fit
            "
          >
            <RotateCcw size={14} />
            Reset Simulation
          </button>
        </div>
      </div>
    </section>
  );
}

export default SimulationWallet;
