'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type GlobalContextType = {
    isDarkMode: boolean;
    setIsDarkMode: (val: boolean) => void;
    lang: 'KOR' | 'ENG';
    setLang: (val: 'KOR' | 'ENG') => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') setIsDarkMode(true);

        const savedLang = localStorage.getItem('lang');
        if (savedLang === 'ENG') setLang('ENG');
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            localStorage.setItem('lang', lang);
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [isDarkMode, lang, mounted]);

    return (
        <GlobalContext.Provider value={{ isDarkMode, setIsDarkMode, lang, setLang }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    const context = useContext(GlobalContext);
    if (!context) throw new Error('useGlobal must be used within GlobalProvider');
    return context;
}
