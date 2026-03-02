'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { FileText, Download, TrendingUp, ShieldCheck } from 'lucide-react';

export default function InvestorDecksPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'IR 자료실' : 'IR Resources',
        subtitle: lang === 'KOR' ? 'HICE의 비전, 실적, 그리고 전략이 담긴 공식 발표 자료를 다운로드하세요.' : 'Download official presentations containing HICE\'s vision, performance, and strategy.',
        badge: lang === 'KOR' ? '투자' : 'Investment',
        categories: [
            {
                id: 'earnings',
                title: lang === 'KOR' ? '분기 실적 발표 (Earnings Release)' : 'Earnings Release',
                items: [
                    { name: '4Q25 Earnings Deck', size: '4.2 MB', date: '2026.02.15', icon: TrendingUp },
                    { name: '3Q25 Earnings Deck', size: '3.8 MB', date: '2025.11.10', icon: TrendingUp },
                    { name: '2Q25 Earnings Deck', size: '4.0 MB', date: '2025.08.12', icon: TrendingUp }
                ]
            },
            {
                id: 'strategy',
                title: lang === 'KOR' ? '기업 설명회 (Corporate Presentation)' : 'Corporate Presentation',
                items: [
                    { name: 'HICE Vision 2030 Roadmap', size: '12.5 MB', date: '2025.12.01', icon: FileText },
                    { name: 'ExoKRUS Business Plan', size: '8.1 MB', date: '2025.09.20', icon: FileText },
                    { name: 'E2EE Messenger Market Analysis', size: '5.4 MB', date: '2025.06.15', icon: ShieldCheck }
                ]
            }
        ]
    };

    return (
        <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden ${themeClass}`}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} lang={lang} setLang={setLang} forceSolidBackground={true} />

            <main className="pb-32">
                <HeroSection
                    title={t.title}
                    subtitle={t.subtitle}
                    badge={t.badge}
                    isDarkMode={isDarkMode}
                    colorTheme="purple"
                />

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16">
                    <div className="space-y-16">
                        {t.categories.map((category, catIdx) => (
                            <AnimatedContainer key={category.id} animationType="fadeUp" delay={catIdx * 0.1}>
                                <h2 className="text-2xl font-bold border-b-2 border-transparent pb-4 mb-6 inline-block opacity-80" style={{ borderBottomColor: isDarkMode ? '#A855F7' : '#9333EA' }}>
                                    {category.title}
                                </h2>

                                <div className="grid grid-cols-1 gap-4">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className={`p-6 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${cardBgClass}`}>
                                            <div className="flex items-center gap-5 tracking-tight">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-100 text-gray-500'} group-hover:bg-purple-100 group-hover:text-purple-600 dark:group-hover:bg-purple-900/40 dark:group-hover:text-purple-400 transition-colors`}>
                                                    <item.icon size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                                        {item.date} • PDF • {item.size}
                                                    </p>
                                                </div>
                                            </div>

                                            <button className={`p-3 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-800 text-white hover:bg-purple-600' : 'bg-gray-100 text-black hover:bg-purple-600 hover:text-white'}`}>
                                                <Download size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedContainer>
                        ))}
                    </div>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
