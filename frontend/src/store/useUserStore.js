import { create } from "zustand";

const getStoredUser = () => {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
};

export const useUserStore = create((set) => ({
  user: getStoredUser(),

  setUser: (user) => {
    set({ user });
    if (typeof window !== "undefined") {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    }
  },

  fetchUser: async (token) => {
    const cachedUser = getStoredUser();
    if (!token) {
      if (cachedUser) {
        set({ user: cachedUser });
      }
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        set({ user: data });
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        if (cachedUser) {
          set({ user: cachedUser });
        } else {
          set({ user: null });
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        console.log("User fetch failed:", data.message || data);
      }
    } catch (err) {
      console.log("User fetch error", err);
      if (cachedUser) {
        set({ user: cachedUser });
      }
    }
  },
  updateUser: async (payload, token) => {
    if (!token) {
      return null;
    }

    try {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        set({ user: data });
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        console.log("Update profile failed:", data.message || data);
      }
      return data;
    } catch (err) {
      console.log("Update profile error", err);
      return null;
    }
  },}));