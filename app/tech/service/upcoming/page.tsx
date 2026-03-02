'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Sparkles, Clock } from 'lucide-react';

export default function UpcomingPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '준비 중인 프로젝트' : 'Upcoming Projects',
        subtitle: lang === 'KOR' ? '세상을 놀라게 할 다음 혁신을 준비하고 있습니다. 곧 여러분을 찾아옵니다.' : 'We are preparing the next innovation to surprise the world. Coming to you soon.',
        badge: lang === 'KOR' ? '서비스' : 'Service',
        projects: [
            {
                status: 'Alpha',
                name: 'Project N',
                desc: lang === 'KOR' ? '비상업적이고 완전한 익명성을 보장하는 탈중앙화 SNS 프로토콜.' : 'A decentralized SNS protocol ensuring non-commercial and complete anonymity.',
                eta: 'Q3 2026'
            },
            {
                status: 'Research',
                name: 'Project H-Brain',
                desc: lang === 'KOR' ? '인간 수준의 논리적 추론이 가능한 전문가용 AI 에이전트 소프트웨어.' : 'Expert-level AI agent software capable of human-level logical reasoning.',
                eta: 'Q4 2026'
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
                    colorTheme="blue"
                />

                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.projects.map((project, idx) => (
                            <div key={idx} className={`p-10 md:p-14 rounded-[3rem] border relative overflow-hidden group ${cardBgClass}`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/10 transition-colors duration-500" />

                                <div className="flex justify-between items-center mb-10 relative z-10">
                                    <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                                        <Sparkles size={14} /> {project.status}
                                    </span>
                                    <span className={`text-sm font-bold flex items-center gap-2 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                        <Clock size={16} /> ETA: {project.eta}
                                    </span>
                                </div>

                                <h3 className="text-4xl font-extrabold mb-6 relative z-10">{project.name}</h3>
                                <p className={`text-xl leading-relaxed relative z-10 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                    {project.desc}
                                </p>

                                {/* Progress Bar Mockup */}
                                <div className="mt-12 h-2 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden relative z-10">
                                    <div className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ${project.status === 'Alpha' ? 'w-3/4' : 'w-1/3'}`} />
                                </div>
                            </div>
                        ))}
                    </AnimatedContainer>

                    <AnimatedContainer animationType="fadeUp" delay={0.4} className="mt-20 text-center">
                        <div className="inline-flex flex-col items-center justify-center p-12 rounded-[3rem] border border-dashed border-gray-300 dark:border-zinc-700 bg-transparent w-full">
                            <p className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                {lang === 'KOR' ? '더 많은 아이디어가 개발 중입니다' : 'More ideas are under development'}
                            </p>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-zinc-700 animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-zinc-700 animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-zinc-700 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
