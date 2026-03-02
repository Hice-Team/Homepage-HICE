'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    badge?: string;
    isDarkMode: boolean;
    colorTheme?: 'blue' | 'purple' | 'green' | 'orange';
}

export default function HeroSection({ title, subtitle, badge, isDarkMode, colorTheme = 'blue' }: HeroSectionProps) {
    const colorMap = {
        blue: {
            bg: 'bg-blue-500/10 dark:bg-blue-600/5',
            text: 'text-blue-500',
            badgeBg: 'bg-blue-100 dark:bg-blue-900/30',
            badgeText: 'text-blue-700 dark:text-blue-400',
            border: 'border-blue-500/30'
        },
        purple: {
            bg: 'bg-purple-500/10 dark:bg-purple-600/5',
            text: 'text-purple-500',
            badgeBg: 'bg-purple-100 dark:bg-purple-900/30',
            badgeText: 'text-purple-700 dark:text-purple-400',
            border: 'border-purple-500/30'
        },
        green: {
            bg: 'bg-green-500/10 dark:bg-green-600/5',
            text: 'text-green-500',
            badgeBg: 'bg-green-100 dark:bg-green-900/30',
            badgeText: 'text-green-700 dark:text-green-400',
            border: 'border-green-500/30'
        },
        orange: {
            bg: 'bg-orange-500/10 dark:bg-orange-600/5',
            text: 'text-orange-500',
            badgeBg: 'bg-orange-100 dark:bg-orange-900/30',
            badgeText: 'text-orange-700 dark:text-orange-400',
            border: 'border-orange-500/30'
        }
    };

    const themeColors = colorMap[colorTheme];

    return (
        <section className="relative pt-48 pb-24 overflow-hidden">
            {/* Decorative Blob */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`absolute -top-[20%] right-0 w-[50vw] h-[50vw] rounded-full blur-[100px] z-0 ${themeColors.bg} pointer-events-none`}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    {badge && (
                        <span className={`inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-bold tracking-widest uppercase border ${themeColors.badgeBg} ${themeColors.badgeText} ${themeColors.border}`}>
                            {badge}
                        </span>
                    )}

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className={`text-xl md:text-2xl leading-relaxed max-w-2xl ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
