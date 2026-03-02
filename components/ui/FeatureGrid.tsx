'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    isDarkMode: boolean;
    className?: string;
}

export function FeatureCard({ title, description, icon, isDarkMode, className = "" }: FeatureCardProps) {
    const cardBgClass = isDarkMode
        ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
        : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300';

    const itemVariant: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.div
            variants={itemVariant}
            className={`p-10 rounded-3xl border transition-all duration-300 ${cardBgClass} ${className}`}
        >
            {icon && (
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${isDarkMode ? 'bg-zinc-800 text-white' : 'bg-gray-50 text-black'}`}>
                    {icon}
                </div>
            )}
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                {description}
            </p>
        </motion.div>
    );
}

interface FeatureGridProps {
    children: ReactNode;
    columns?: 2 | 3 | 4;
}

export function FeatureGrid({ children, columns = 2 }: FeatureGridProps) {
    const gridCols = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }[columns];

    return (
        <div className={`grid gap-6 ${gridCols}`}>
            {children}
        </div>
    );
}
