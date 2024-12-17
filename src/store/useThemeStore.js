import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "Wireframe",
  setTheme: (newTheme) => {
    localStorage.setItem("chat-theme", newTheme);
    set({ theme: newTheme });
  },
}));
