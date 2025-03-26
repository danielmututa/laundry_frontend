import React, { useEffect } from 'react'
import { useThemeStore } from './themeStore';

type Props = {
    children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
    const { isDarkMode } = useThemeStore();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])
    return (
        <>
            {children}
        </>
    )
}

export default ThemeProvider