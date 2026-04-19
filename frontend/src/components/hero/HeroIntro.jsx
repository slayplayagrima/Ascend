import { useNavigate } from "react-router-dom";

function HeroIntro() {

  const navigate = useNavigate();
  return (
    <section className="min-h-screen px-4 sm:px-10 py-16 sm:py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="pl-0 lg:pl-6">
          {/* Logo */}
          <div className="mb-8 font-semibold text-[var(--accent-primary)] tracking-wide">
            ASCEND
          </div>

          {/* Heading */}
          <div className="pt-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.0] text-white">
              Learn the <br />
              Market <br />
              Before You Risk <br />
            </h1>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[var(--accent-primary)]">
              Real Money
            </h1>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-xl">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--bg-light)]">
              ASCEND is a real-world trading simulation platform designed for
              students & beginners to build discipline, risk awareness, and
              confidence before entering live markets.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button
              onClick={() => navigate("/auth?mode=signup")}
              className="
                px-10 py-3 rounded-xl font-medium
                bg-[var(--accent-primary)]
                text-[var(--bg-primary)]
                transition
                hover:bg-[var(--accent-secondary)]
              "
            >
              Get Started →
            </button>

            <button
              onClick={() => navigate("/auth?mode=login")}
              className="
                px-10 py-3 rounded-xl font-medium
                border border-[var(--accent-primary)]
                text-[var(--accent-primary)]
                transition
                hover:bg-[var(--accent-secondary)]
                hover:text-[var(--bg-primary)]
              "
            >
              Login
            </button>
          </div>
        </div>

        {/* RIGHT – ANIMATION PLACEHOLDER */}
        <div className="relative h-[300px] sm:h-[420px] lg:h-[550px] rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center">
          
          {/* Inner frame */}
          <div className="absolute inset-4 sm:inset-6 rounded-xl bg-[var(--bg-primary)]/70"></div>

          {/* Label */}
          <span className="relative z-10 px-4 py-2 text-sm rounded-full bg-black/30 backdrop-blur text-white/80">
            Interactive dashboard
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroIntro;
