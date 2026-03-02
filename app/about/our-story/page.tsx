'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

export default function OurStoryPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';

    const t = {
        title: lang === 'KOR' ? '우리의 이야기' : 'Our Story',
        subtitle: lang === 'KOR' ? '기술로 사람을 널리 이롭게 하다. HICE가 걸어온 파괴적 혁신의 발자취입니다.' : 'Benefiting people through technology. This is the footprint of disruptive innovation that HICE has walked.',
        badge: lang === 'KOR' ? '회사 개요' : 'Overview',
        timeline: [
            {
                year: '2022',
                title: lang === 'KOR' ? 'HICE 설립' : 'HICE Founded',
                desc: lang === 'KOR' ? '기술의 온기를 세상에 전하기 위해 3명의 창립 멤버가 모였습니다.' : 'Three founding members gathered to spread the warmth of technology to the world.'
            },
            {
                year: '2023',
                title: lang === 'KOR' ? '첫 번째 인공지능 모델 발표' : 'First AI Model Release',
                desc: lang === 'KOR' ? '한국어 자연어 처리에 특화된 소형 거대언어모델(sLLM) 구축에 성공했습니다.' : 'Successfully built a small Large Language Model (sLLM) specialized in Korean NLP.'
            },
            {
                year: '2024',
                title: lang === 'KOR' ? 'Croffle 글로벌 런칭' : 'Croffle Global Launch',
                desc: lang === 'KOR' ? '강력한 종단간(E2E) 암호화를 지원하는 보안 메신저를 세계 시장에 선보였습니다.' : 'Introduced a secure messenger supporting strong End-to-End Encryption to the global market.'
            },
            {
                year: '2025',
                title: lang === 'KOR' ? 'HICE OpenApp 생태계 확장' : 'Expansion of OpenApp Ecosystem',
                desc: lang === 'KOR' ? '100만 명 이상의 누적 사용자를 달성하며 애플리케이션 플랫폼으로 거듭났습니다.' : 'Reborn as an application platform, surpassing 1 million cumulative users.'
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

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-12">
                    <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-8 space-y-20 py-10">
                        {t.timeline.map((item, index) => (
                            <AnimatedContainer key={item.year} animationType="fadeUp" delay={index * 0.1}>
                                <div className="relative pl-12 md:pl-20">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

                                    <h3 className="text-5xl md:text-7xl font-extrabold text-blue-500/20 mb-4 tracking-tighter drop-shadow-sm">{item.year}</h3>
                                    <h4 className="text-2xl md:text-3xl font-extrabold mb-4">{item.title}</h4>
                                    <p className={`text-lg md:text-xl leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                        {item.desc}
                                    </p>
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
