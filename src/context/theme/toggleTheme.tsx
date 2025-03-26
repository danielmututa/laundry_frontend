import { useThemeStore } from './themeStore';
import { IoMoon, IoSunny } from 'react-icons/io5';

function ToggleTheme() {
    const { isDarkMode, toggleTheme } = useThemeStore();

    const handleToggleTheme = (mode: string) => {
        if ((mode === 'dark' && !isDarkMode) || (mode === 'light' && isDarkMode)) {
            toggleTheme();
        }
    };

    return (
        <div className={`flex items-center rounded-full p-1 cursor-pointer w-full transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
            <div
                className={`flex flex-1 items-center justify-center p-2 rounded-full transition-colors ${!isDarkMode ? 'bg-white text-black' : 'text-white'}`}
                onClick={() => handleToggleTheme('light')}
            >
                <IoSunny size={16} className={!isDarkMode ? 'text-primary' : ''} />
                <span className="ml-2">Light</span>
            </div>
            <div
                className={`flex flex-1 items-center justify-center p-2 rounded-full transition-colors ${isDarkMode ? 'bg-black text-white' : 'text-black'}`}
                onClick={() => handleToggleTheme('dark')}
            >
                <IoMoon size={16} className={isDarkMode ? 'text-primary' : ''} />
                <span className="ml-2">Dark</span>
            </div>
        </div>
    );
}

export default ToggleTheme;