'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { FileText, Download, BarChart2 } from 'lucide-react';

export default function InsightsReportPage() {

    // Using global state
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '리서치 & 백서' : 'Research & Whitepapers',
        subtitle: lang === 'KOR' ? '산업의 지형을 분석하고 미래를 예측하는 HICE의 심층 보고서입니다.' : 'In-depth reports by HICE analyzing industry landscapes and predicting the future.',
        badge: lang === 'KOR' ? '인사이트' : 'Insights',
        reports: [
            {
                id: 1,
                title: lang === 'KOR' ? '2026 차세대 AI 산업 동향 트렌드 리포트' : '2026 Next-Gen AI Industry Trend Report',
                type: 'Trend Report',
                date: '2026.01.10',
                size: '15.2 MB'
            },
            {
                id: 2,
                title: lang === 'KOR' ? 'HICE OpenApp 아키텍처 기술 백서 v1.0' : 'HICE OpenApp Architecture Technical Whitepaper v1.0',
                type: 'Whitepaper',
                date: '2025.10.05',
                size: '8.4 MB'
            },
            {
                id: 3,
                title: lang === 'KOR' ? '범용 메타버스 플랫폼(Planet)의 사회적 파급력 분석' : 'Social Impact Analysis of Universal Metaverse Platforms (Planet)',
                type: 'Research',
                date: '2025.07.20',
                size: '5.1 MB'
            }
        ]
    };

    return (
        <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden ${themeClass}`}>
            <Navbar forceSolidBackground={true} />

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
                        {t.reports.map((report, idx) => (
                            <AnimatedContainer key={report.id} animationType="fadeUp" delay={idx * 0.1}>
                                <div className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-1 flex items-center justify-between group cursor-pointer ${cardBgClass}`}>

                                    <div className="flex items-start md:items-center gap-6 flex-col md:flex-row">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${isDarkMode ? 'bg-zinc-800 text-zinc-400 group-hover:bg-purple-900/30 group-hover:text-purple-400' : 'bg-gray-100 text-gray-400 group-hover:bg-purple-100 group-hover:text-purple-600'}`}>
                                            {report.type === 'Whitepaper' ? <FileText size={28} /> : <BarChart2 size={28} />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-200 text-gray-700'}`}>
                                                    {report.type}
                                                </span>
                                                <span className={`text-sm font-medium ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                                    {report.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold">{report.title}</h3>
                                        </div>
                                    </div>

                                    <button className={`hidden md:flex flex-col items-center justify-center p-4 rounded-xl transition-colors ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
                                        <Download size={24} className={`mb-1 ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`} />
                                        <span className={`text-xs font-bold ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>PDF ({report.size})</span>
                                    </button>

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
