import { User, Mail, Phone, Briefcase } from "lucide-react";

function AccountIdentity() {
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
              John Doe
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-1">
              <Mail size={14} />
              EMAIL ADDRESS
            </div>
            <p className="text-white font-medium">
              john.doe@ascend.in
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-1">
              <Phone size={14} />
              PHONE NUMBER
            </div>
            <p className="text-white font-medium">
              +91 98765 43210
            </p>
          </div>

          {/* Employment Status */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--bg-light)] mb-1">
              <Briefcase size={14} />
              EMPLOYMENT STATUS
            </div>
            <p className="text-white font-medium">
              Self-Employed Trader
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6">
          <button
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
        </div>
      </div>
    </section>
  );
}

export default AccountIdentity;
