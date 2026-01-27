import { useRef, useEffect, useState } from "react";
import { UserRound } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);
  const [open, setOpen] = useState(false);

  // close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div className="flex items-center">
        <span className="text-lg font-semibold text-[var(--bg-primary)] tracking-wide">
          ASCEND
        </span>
      </div>

      {/* CENTER: Navigation */}
      <div className="flex items-center gap-10 text-sm">
        <NavItem 
          label="Dashboard" 
          isActive={location.pathname === "/dashboard"}
          onClick={() => navigate("/dashboard")}
        />
        <NavItem 
          label="Portfolio" 
          isActive={location.pathname === "/portfolio"}
          onClick={() => navigate("/portfolio")}
        />
        <NavItem 
          label="Learn" 
          isActive={location.pathname === "/learn"}
          onClick={() => navigate("/learn")}
        />
        <NavItem 
          label="Analytics" 
          isActive={location.pathname === "/analytics"}
          onClick={() => navigate("/analytics")}
        />
      </div>

      {/* RIGHT: Profile */}
      <div className="relative" ref={profileRef}>
         <div
        onClick={() => navigate("/profile")}
        className="
          w-9 h-9 rounded-full
          bg-[var(--bg-primary)]/80
          flex items-center justify-center
          text-[var(--accent-primary)]
          text-sm font-medium
          cursor-pointer
          hover:bg-[var(--bg-primary)]
          transition
        "
      >
        <UserRound size={18} />
      </div>
      </div>
    </nav>
  );
}

export default NavBar;

/* ---------- Nav Item ---------- */
function NavItem({ label, isActive = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer
        transition
        font-medium
        ${
          isActive
            ? "text-white"
            : "text-[var(--bg-primary)] hover:text-white"
        }
      `}
    >
      {label}
    </button>
  );
}
