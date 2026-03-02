'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Bell } from 'lucide-react';

export default function MediaAnnouncementsPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '공지사항' : 'Announcements',
        subtitle: lang === 'KOR' ? 'HICE 서비스의 주요 변경 사항 및 공식 안내를 확인하세요.' : 'Check out major changes and official notices for HICE services.',
        badge: lang === 'KOR' ? '미디어' : 'Media',
        items: [
            {
                date: '2026.02.28',
                tag: lang === 'KOR' ? '서비스 점검' : 'Maintenance',
                color: 'orange',
                title: lang === 'KOR' ? '[사전안내] Planet 서버 증설에 따른 일시적 접속 지연 안내' : '[Notice] Temporary Connection Delay due to Planet Server Expansion',
            },
            {
                date: '2026.01.15',
                tag: lang === 'KOR' ? '약관 변경' : 'Policy Update',
                color: 'blue',
                title: lang === 'KOR' ? 'Croffle 개인정보 처리방침 개정 안내 (2026.02.01 시행)' : 'Croffle Privacy Policy Revision Notice (Effective 2026.02.01)',
            },
            {
                date: '2025.12.01',
                tag: lang === 'KOR' ? '일반 공지' : 'General Notice',
                color: 'gray',
                title: lang === 'KOR' ? 'HICE OpenApp v2.1.0 릴리즈 노트' : 'HICE OpenApp v2.1.0 Release Notes',
            },
            {
                date: '2025.10.10',
                tag: lang === 'KOR' ? '일반 공지' : 'General Notice',
                color: 'gray',
                title: lang === 'KOR' ? '2025 하반기 버그 바운티 프로그램 수상자 발표' : 'Announcement of 2H 2025 Bug Bounty Program Winners',
            },
            {
                date: '2025.08.05',
                tag: lang === 'KOR' ? '서비스 점검' : 'Maintenance',
                color: 'orange',
                title: lang === 'KOR' ? '[완료] 내부 시스템 정기 점검 완료 안내' : '[Completed] Internal System Regular Maintenance Completed',
            }
        ]
    };

    const getTagColorClass = (color: string) => {
        switch (color) {
            case 'orange': return isDarkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-50 text-orange-600';
            case 'blue': return isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600';
            default: return isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-600';
        }
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
                    colorTheme="orange"
                />

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-10">
                    <div className={`overflow-hidden rounded-[2rem] border ${isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                        {t.items.map((item, idx) => (
                            <AnimatedContainer key={idx} animationType="fadeIn" delay={idx * 0.05}>
                                <a
                                    href="#"
                                    className={`block px-6 py-6 md:px-10 md:py-8 border-b last:border-0 transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-4 ${isDarkMode ? 'border-zinc-800 hover:bg-zinc-900' : 'border-gray-100 hover:bg-gray-50'}`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block w-max ${getTagColorClass(item.color)}`}>
                                            {item.tag}
                                        </span>
                                        <h3 className="font-bold text-lg leading-snug group-hover:text-orange-500 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <span className={`text-sm font-medium shrink-0 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                        {item.date}
                                    </span>
                                </a>
                            </AnimatedContainer>
                        ))}
                    </div>

                    <AnimatedContainer animationType="fadeIn" delay={0.3} className="mt-16 text-center flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((pageNum) => (
                            <button
                                key={pageNum}
                                className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center transition-colors ${pageNum === 1 ? (isDarkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black') : (isDarkMode ? 'hover:bg-zinc-800 text-zinc-500' : 'hover:bg-zinc-200 text-gray-500')}`}
                            >
                                {pageNum}
                            </button>
                        ))}
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
