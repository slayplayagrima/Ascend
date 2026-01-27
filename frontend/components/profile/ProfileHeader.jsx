import { ShieldCheck, MapPin } from "lucide-react";

function ProfileHeader() {
  return (
    <section className="rounded-2xl backdrop-blur-xl  p-6 mx-9 mt-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* LEFT: Avatar + Identity */}
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-[var(--bg-secondary)]/20 flex items-center justify-center text-[var(--accent-primary)] text-xl font-semibold flex-shrink-0">
            JD
          </div>

          {/* Name & Meta */}
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-semibold text-white">
                John Doe
              </h2>

              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                Simulation Mode
              </span>
            </div>

            <p className="text-sm text-[var(--bg-light)] mt-0.5">
              john.doe@ascend.in
            </p>

            <div className="flex items-center gap-4 mt-2 text-xs text-[var(--bg-light)] flex-wrap">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-[var(--accent-primary)] flex-shrink-0" />
                Verified Trader
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Readiness Score */}
        <div className="flex items-center justify-end flex-shrink-0">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Ring */}
            <svg className="absolute w-full h-full rotate-[-90deg]">
              <circle
                cx="48"
                cy="48"
                r="45"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="45"
                stroke="var(--accent-primary)"
                strokeWidth="8"
                fill="none"
                strokeDasharray="251"
                strokeDashoffset="45"
                strokeLinecap="round"
              />
            </svg>

            {/* Score */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold text-[var(--accent-primary)]">
                82%
              </span>
              <span className="text-[10px] uppercase tracking-wide text-[var(--bg-light)]">
                Readiness
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProfileHeader;
