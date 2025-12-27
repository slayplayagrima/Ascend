import {UserRound } from "lucide-react";
function NavBar() {
  return (
    <nav
      className="
        w-full
        flex items-center justify-between
        px-14 py-4
        bg-[var(--accent-primary)]
        shadow-[0_6px_20px_rgba(0,0,0,0.25)]
        backdrop-blur-sm
      "
    >
      {/* LEFT: Logo */}
      <div className="flex items-center ">
        <span className="text-lg font-semibold text-[var(--bg-primary)] tracking-wide">
          ASCEND
        </span>
      </div>

      {/* CENTER: Navigation */}
      <div className="flex items-center gap-10 text-sm">
        <NavItem label="Dashboard" active />
        <NavItem label="Portfolio" />
        <NavItem label="Learn" />
        <NavItem label="Analytics" />
      </div>

      {/* RIGHT: Profile */}
      <div className="flex items-center gap-3">
        <div
          className="
            w-9 h-9 rounded-full
            bg-[var(--bg-primary)]/80
            flex items-center justify-center
            text-[var(--accent-primary)]
            text-sm font-medium
          "
        >
          <UserRound/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

/* ---------- Nav Item ---------- */
function NavItem({ label, active = false }) {
  return (
    <span
      className={`
        cursor-pointer
        transition
        ${
          active
            ? "text-white font-medium"
            : "text-[var(--bg-primary)] hover:text-[var(--bg-light)]"
        }
      `}
    >
      {label}
    </span>
  );
}
