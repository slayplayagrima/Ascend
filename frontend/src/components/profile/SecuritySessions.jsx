import { LogOut, KeyRound, Trash2, X, AlertTriangle, Info} from "lucide-react";
import { useState } from "react";

function AccountActions() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleDeleteAccount = () => {
    // Handle account deletion here
    console.log("Account deleted");
    setShowDeleteConfirm(false);
  };

  const handleLogout = () => {
    // Handle logout here
    console.log("Logged out");
    setShowLogoutConfirm(false);
  };

  const handleChangePassword = (newPassword) => {
    // Handle password change here
    console.log("Password changed:", newPassword);
    setShowChangePassword(false);
  };

  return (
    <section className="w-full mb-10 px-4">
      {/* Section Title */}
      <h3 className="text-sm uppercase tracking-wide text-[var(--bg-light)] mb-4">
        Account Actions
      </h3>

      <div className="rounded-2xl bg-[var(--bg-secondary)]/20 backdrop-blur-xl border border-white/10 p-6 space-y-4">
        
        {/* Logout */}
        <ActionRow
          icon={LogOut}
          title="Logout"
          description="Sign out of your ASCEND account"
          tone="neutral"
          onLogout={() => setShowLogoutConfirm(true)}
        />

        {/* Change Password */}
        <ActionRow
          icon={KeyRound}
          title="Change Password"
          description="Update your account password"
          tone="neutral"
          onChangePassword={() => setShowChangePassword(true)}
        />

        {/* Delete Account */}
        <ActionRow
          icon={Trash2}
          title="Delete Account"
          description="Permanently remove your account and data"
          tone="danger"
          onDelete={() => setShowDeleteConfirm(true)}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <DeleteConfirmDialog
          onConfirm={handleDeleteAccount}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirm && (
        <LogoutConfirmDialog
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutConfirm(false)}
        />
      )}

      {/* Change Password Dialog */}
      {showChangePassword && (
        <ChangePasswordDialog
          onConfirm={handleChangePassword}
          onCancel={() => setShowChangePassword(false)}
        />
      )}
    </section>
  );
}

export default AccountActions;

/* ---------- Action Row ---------- */
function ActionRow({ icon: Icon, title, description, tone, onDelete, onLogout, onChangePassword }) {
  const tones = {
    neutral: "hover:bg-white/5 text-white",
    warning: "hover:bg-yellow-400/10 text-yellow-300",
    danger: "hover:bg-rose-400/10 text-rose-300",
  };

  const handleClick = () => {
    if (tone === "danger" && onDelete) {
      onDelete();
    } else if (title === "Logout" && onLogout) {
      onLogout();
    } else if (title === "Change Password" && onChangePassword) {
      onChangePassword();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full flex items-center justify-between
        p-4 rounded-xl
        border border-white/10
        transition
        ${tones[tone]}
      `}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        <div className="text-left">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs opacity-60">{description}</p>
        </div>
      </div>
    </button>
  );
}

/*  Delete Confirmation Dialog */
function DeleteConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-[var(--bg-primary)] border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            Delete Account
          </h2>
          <button
            onClick={onCancel}
            className="text-[var(--bg-light)] hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-[var(--bg-light)]">
            Are you sure you want to delete your account? This action is{" "}
            <span className="font-semibold text-rose-300">
              permanent and cannot be undone.
            </span>
          </p>
          <div className="bg-rose-400/10 border border-rose-400/30 rounded-lg p-3 flex items-start gap-2">
            <AlertTriangle size={14} className="text-rose-300 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-rose-400">
              All your data, trades, and account information will be permanently deleted.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-white/10 bg-white/5">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 rounded-lg bg-rose-400 hover:bg-rose-600 text-white transition text-sm font-medium"
          >
            Delete Permanently
          </button>
        </div>
      </div>
    </div>
  );
}

/* Logout Confirmation Dialog  */
function LogoutConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-[var(--bg-primary)] border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            Logout
          </h2>
          <button
            onClick={onCancel}
            className="text-white/60 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-white/80">
            Are you sure you want to logout from your ASCEND account?
          </p>
          <div className="bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded-lg p-3 flex items-start gap-2">
            <Info size={14} className="text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[var(--accent-primary)]">
              You'll need to login again to access your account.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-white/10 bg-white/5">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-black transition text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

/*  Change Password Dialog  */
function ChangePasswordDialog({ onConfirm, onCancel }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    onConfirm(newPassword);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-[var(--bg-primary)] border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            Change Password
          </h2>
          <button
            onClick={onCancel}
            className="text-[var(--bg-light)] hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-rose-400/10 border border-rose-400/30 rounded-lg p-3">
              <p className="text-xs text-rose-300">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-[var(--bg-light)] mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--accent-primary)] focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--bg-light)] mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password (min. 8 characters)"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--accent-primary)] focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--bg-light)] mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[var(--accent-primary)] focus:outline-none transition"
            />
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-black transition text-sm font-medium"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
