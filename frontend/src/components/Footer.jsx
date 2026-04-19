import { Globe, Twitter, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#0e2a1b] text-[var(--bg-light)] mt-30">
      {/* Top divider */}
      <div className="border-t border-white/10" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--accent-primary)]">
            ASCEND
          </h3>
          <p className="text-sm text-[var(--bg-light)] leading-relaxed">
            Building the next generation of disciplined Indian traders through
            real-world market simulation.
          </p>
        <div className="flex gap-3">
        <Globe size={18} className="text-[var(--accent-primary)]" />
        <Twitter size={18} className="text-[var(--accent-primary)]" />
        <Github size={18} className="text-[var(--accent-primary)]" />
        </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-white mb-4">
            PLATFORM
          </h4>
          <ul className="space-y-3 text-sm text-[var(--bg-light)]">
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">Analytics</li>
            <li className="hover:text-white cursor-pointer">Simulation Settings</li>
            <li className="hover:text-white cursor-pointer">Market Status</li>
          </ul>
        </div>

        {/* Learning */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-white mb-4">
            LEARNING
          </h4>
          <ul className="space-y-3 text-sm text-[var(--bg-light)]">
            <li className="hover:text-white cursor-pointer">Trading Basics</li>
            <li className="hover:text-white cursor-pointer">Risk Management</li>
            <li className="hover:text-white cursor-pointer">IPO Awareness</li>
            <li className="hover:text-white cursor-pointer">Market Psychology</li>
            <li className="hover:text-white cursor-pointer">Glossary</li>
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-white mb-4">
            SUPPORT & LEGAL
          </h4>
          <ul className="space-y-3 text-sm text-[var(--bg-light)]">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer box */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="rounded-xl border border-white/10 bg-white/5 mt-4 px-6 py-3 text-xs text-[var(--bg-light)] leading-relaxed">
          <span className="font-semibold text-[var(--accent-primary)]">Disclaimer:</span>{" "}
          ASCEND is a trading simulation platform for educational purposes only.
          No real money is involved in any transactions. Stock market investments
          are subject to market risks. Please read all related documents carefully
          before investing in live markets. Simulations are intended to help users
          understand market dynamics without financial exposure.
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--bg-light)]">
          <span>
            © 2024 ASCEND Trading. All rights reserved.
          </span>
          <span>
            Market data powered by NSE/BSE (simulated)
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
