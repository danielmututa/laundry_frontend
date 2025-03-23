import { create } from "zustand";

type ThemeState = {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;



export const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : prefersDarkMode,
    toggleTheme: () => set((state) => {
        const newTheme = !state.isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        return { isDarkMode: !state.isDarkMode }
    })
}))