import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";

  const [mode, setMode] = useState(initialMode);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Email and password required");
      return;
    }

    if (mode === "signup" && !formData.fullname) {
      alert("Full name required");
      return;
    }

    console.log(`${mode.toUpperCase()} DATA`, formData);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md
          rounded-2xl
          bg-[var(--bg-secondary)]/30
          border border-white/10
          p-8
        "
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-white">
            Welcome to ASCEND
          </h2>
          <p className="mt-2 text-sm text-[var(--bg-light)]">
            Learn trading with our professional simulation platform
          </p>
        </div>

        {/* Toggle */}
        <div className="flex rounded-xl bg-black/20 p-1 mb-6">
          <button
            type="button"
            onClick={() => {setMode("login")
               navigate("/auth?mode=login")
            }}
            className={`
              flex-1 py-2 rounded-lg text-sm transition
              ${mode === "login"
                ? "bg-[var(--accent-secondary)]/40 text-white"
                : "text-[var(--bg-light)]"}
            `}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {setMode("signup"); navigate("/auth?mode=signup")}}
            className={`
              flex-1 py-2 rounded-lg text-sm transition
              ${mode === "signup"
                ? "bg-[var(--accent-secondary)]/40 text-white"
                : "text-[var(--bg-light)]"}
            `}
          >
            Sign Up
          </button>
        </div>

        {/* Google ONLY for signup */}
        {mode === "signup" && (
          <>
            <button
              type="button"
              className="
                w-full flex items-center justify-center gap-3 font-medium
                py-3 rounded-xl
                bg-[var(--accent-primary)]
                text-[var(--bg-primary)]
                hover:bg-[var(--accent-secondary)]
                transition
                mb-6
              "
            >
              <span className="text-lg font-bold">G</span>
              Continue with Google
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-[var(--bg-light)]/60">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </>
        )}

        {/* Full name (signup only) */}
        {mode === "signup" && (
          <>
            <label className="block text-xs text-[var(--bg-light)] mb-1">
              Full Name
            </label>
            <input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Your full name"
              className="auth-input placeholder:text-sm"
            />
          </>
        )}

        {/* Email */}
        <label className="block text-xs text-[var(--bg-light)] mb-1">
          Email
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          className="auth-input placeholder:text-sm"
        />

        {/* Password */}
        <label className="block text-xs text-[var(--bg-light)] mb-1">
          Password
        </label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Your password"
            className="auth-input pr-12 placeholder:text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-4 pb-3.5 top-1/2 -translate-y-1/2 text-[var(--bg-light)]/60"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="
            w-full mt-6 py-3 rounded-xl
            bg-[var(--accent-primary)]
            text-[var(--bg-primary)]
            font-medium
            hover:bg-[var(--accent-secondary)]
            transition
          "
        >
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-[var(--accent-primary)]/80">
          Start with ₹10,000 virtual capital
        </p>
      </form>
    </section>
  );
}

export default Auth;
