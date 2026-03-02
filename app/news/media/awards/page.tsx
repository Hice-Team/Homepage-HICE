'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Trophy, Star, Award } from 'lucide-react';

export default function MediaAwardsPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '수상 및 인증' : 'Awards & Milestones',
        subtitle: lang === 'KOR' ? '공신력 있는 기관과 시장이 인정한 HICE의 탁월함을 소개합니다.' : 'Introducing HICE\'s excellence recognized by credible institutions and the market.',
        badge: lang === 'KOR' ? '미디어' : 'Media',
        awards: [
            {
                year: '2026',
                title: 'Global Fast Company - 50 Most Innovative Companies',
                org: 'Fast Company',
                desc: lang === 'KOR' ? 'AI와 로보틱스 결합의 새로운 지평을 연 공로를 인정받아 가장 혁신적인 기업 Top 50에 선정되었습니다.' : 'Selected as one of the Top 50 Most Innovative Companies for opening new horizons in AI and robotics integration.',
                icon: Trophy
            },
            {
                year: '2025',
                title: 'Red Dot Design Award - Best of the Best (Digital Solutions)',
                org: 'Red Dot',
                desc: lang === 'KOR' ? 'OpenApp 플랫폼의 혁신적인 UI/UX와 사용자 중심의 아키텍처 설계로 최고상을 수상했습니다.' : 'Awarded Best of the Best for OpenApp platform\'s innovative UI/UX and user-centric architecture design.',
                icon: Star
            },
            {
                year: '2025',
                title: 'ISO 27001 & 27701 Global Security Certification',
                org: 'ISO',
                desc: lang === 'KOR' ? '정보보호 및 개인정보보호 관리체계에 대한 국제 표준 인증을 갱신하며 최고 수준의 보안 역량을 입증했습니다.' : 'Proved top-tier security capabilities by renewing international standard certifications for info and privacy management.',
                icon: Award
            },
            {
                year: '2024',
                title: 'TIME Magazine - 100 Best Inventions',
                org: 'TIME',
                desc: lang === 'KOR' ? '디지털 감시를 원천 차단하는 Croffle의 혁신성을 빌어 세상을 바꾸는 발명품 중 하나로 선정되었습니다.' : 'Selected as one of the world-changing inventions for Croffle\'s innovativeness in fundamentally blocking digital surveillance.',
                icon: Trophy
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

                <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-10">
                    <div className="space-y-6">
                        {t.awards.map((item, idx) => (
                            <AnimatedContainer key={idx} animationType="fadeUp" delay={idx * 0.1}>
                                <div className={`p-8 md:p-12 rounded-[2.5rem] border flex flex-col md:flex-row gap-8 items-start md:items-center transition-all hover:translate-x-2 ${cardBgClass}`}>

                                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shrink-0 border-4 border-dashed transition-colors group-hover:border-purple-500 ${isDarkMode ? 'bg-zinc-950 border-zinc-700 text-yellow-500' : 'bg-gray-50 border-gray-200 text-yellow-500'}`}>
                                        <item.icon size={36} />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`font-bold text-xl ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>{item.year}</span>
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>
                                                {item.org}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">{item.title}</h3>
                                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                            {item.desc}
                                        </p>
                                    </div>

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
