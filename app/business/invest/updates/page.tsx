'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { ArrowRight, Calendar } from 'lucide-react';

export default function InvestorUpdatesPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '투자자 업데이트' : 'Investor Updates',
        subtitle: lang === 'KOR' ? 'HICE의 최신 재무 성과와 주요 경영 이벤트를 투명하게 공개합니다.' : 'Transparently disclosing HICE\'s latest financial performance and major management events.',
        badge: lang === 'KOR' ? '투자' : 'Investment',
        updates: [
            {
                date: '2026.02.15',
                category: 'Financial',
                title: lang === 'KOR' ? '2025년 4분기 및 연간 경영 실적 발표' : 'Q4 and Annual 2025 Financial Results Announcement',
                desc: lang === 'KOR' ? '매출액 전년 대비 150% 증가, 영업 이익 흑자 전환 성공에 대한 상세 리포트를 확인하세요.' : 'Check the detailed report on the 150% YoY revenue increase and successful turnaround to operating profit.'
            },
            {
                date: '2026.01.20',
                category: 'Business',
                title: lang === 'KOR' ? 'ExoKRUS 플랫폼 글로벌 공급 계약 체결 공시' : 'Disclosure of ExoKRUS Platform Global Supply Contract',
                desc: lang === 'KOR' ? '주요 글로벌 제조사와 차세대 로보틱스 제어 소프트웨어 공급에 관한 라이선스 계약을 체결했습니다.' : 'Signed a license agreement with a major global manufacturer for the supply of next-generation robotics control software.'
            },
            {
                date: '2025.11.05',
                category: 'Conference',
                title: lang === 'KOR' ? 'HICE Global Tech Investor Day 2025 아카이브' : 'HICE Global Tech Investor Day 2025 Archive',
                desc: lang === 'KOR' ? '향후 5년의 로드맵과 신규 서비스 파이프라인을 발표한 인베스터 데이의 발표 자료 및 영상을 제공합니다.' : 'Providing presentation materials and videos from Investor Day, announcing the 5-year roadmap and new service pipeline.'
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

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-10">
                    <div className="space-y-6">
                        {t.updates.map((item, idx) => (
                            <AnimatedContainer key={idx} animationType="fadeUp" delay={idx * 0.1}>
                                <a href="#" className={`block p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-1 hover:shadow-lg group ${cardBgClass}`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                        <div className="flex items-center gap-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                                                {item.category}
                                            </span>
                                            <span className={`text-sm font-medium flex items-center gap-2 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                                <Calendar size={14} /> {item.date}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                        <div className="md:w-4/5">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors">{item.title}</h3>
                                            <p className={`text-lg ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="hidden md:flex w-16 h-16 rounded-full bg-gray-50 dark:bg-zinc-800 items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </a>
                            </AnimatedContainer>
                        ))}
                    </div>

                    <AnimatedContainer animationType="fadeIn" delay={0.5} className="mt-16 text-center">
                        <button className={`px-8 py-4 rounded-full font-bold transition-colors ${isDarkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                            {lang === 'KOR' ? '더 보기' : 'Load More'}
                        </button>
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
