import { useState } from "react";
import { User, Mail, Phone, Briefcase, Check, X } from "lucide-react";
import { useUserStore } from "../../store/useUserStore";

function AccountIdentity() {
  const { user, updateUser } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    employmentStatus: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  const openEditor = () => {
    setFormData({
      fullName: user?.fullName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      employmentStatus: user?.employmentStatus || "",
    });
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to update your profile.");
      return;
    }

    setIsSaving(true);
    const result = await updateUser(formData, token);
    setIsSaving(false);

    if (result && !result.message) {
      setIsOpen(false);
      setSuccessMessage("Identity details saved successfully.");
      window.setTimeout(() => setSuccessMessage(""), 3000);
    } else {
      alert(result?.message || "Unable to save identity details.");
    }
  };

  return (
    <section className="w-full mb-0">
      {/* Section Title */}
      <h3 className="text-sm uppercase tracking-wide text-[var(--bg-light)] mb-4">
        Account
      </h3>

      {/* Card */}
      <div className="rounded-2xl bg-[var(--bg-secondary)]/20 backdrop-blur-xl border border-white/10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-1">
              <User size={14} />
              FULL NAME
            </div>
            <p className="text-white font-medium">
              {user?.fullName}
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-1">
              <Mail size={14} />
              EMAIL ADDRESS
            </div>
            <p className="text-white font-medium">
              {user?.email}
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-1">
              <Phone size={14} />
              PHONE NUMBER
            </div>
            <p className="text-white font-medium">
              {user?.phone || "Add Phone Number"}
            </p>
          </div>

          {/* Employment Status */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-1">
              <Briefcase size={14} />
              EMPLOYMENT STATUS
            </div>
            <p className="text-white font-medium">
              {user?.employmentStatus || "Add Employment Status"}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6">
          <button
            onClick={openEditor}
            className="
              px-5 py-2 rounded-lg
              bg-[var(--accent-primary)]/10
              text-[var(--accent-primary)]
              text-sm font-medium
              border border-[var(--accent-primary)]/20
              hover:bg-[var(--accent-primary)]/20
              transition
            "
          >
            Edit Identity Details
          </button>

          {successMessage && (
            <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              <div className="flex items-center gap-2">
                <Check size={16} />
                <span>{successMessage}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-xl rounded-3xl bg-[var(--bg-primary)] border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-lg font-semibold text-white">Edit Identity Details</h4>
                <p className="text-sm text-[var(--bg-light)]/80">
                  Update your display name, email, phone number, and employment status.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 bg-white/5 hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm text-[var(--bg-light)]">
                  Full Name
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[var(--bg-secondary)]/20 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-primary)]/60"
                  />
                </label>

                <label className="block text-sm text-[var(--bg-light)]">
                  Email Address
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[var(--bg-secondary)]/20 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-primary)]/60"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm text-[var(--bg-light)]">
                  Phone Number
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[var(--bg-secondary)]/20 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-primary)]/60"
                  />
                </label>

                <label className="block text-sm text-[var(--bg-light)]">
                  Employment Status
                  <input
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    placeholder="Student, Employed, Freelancer"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[var(--bg-secondary)]/20 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-primary)]/60"
                  />
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-[var(--bg-light)] hover:bg-white/5 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="rounded-2xl bg-[var(--accent-primary)] px-5 py-2 text-sm font-semibold text-[var(--bg-primary)] hover:bg-[var(--accent-secondary)] transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default AccountIdentity;
