'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Layers, Zap, HeartHandshake, Rocket } from 'lucide-react';

export default function WayOfWorkingPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '우리가 일하는 방법' : 'Way of Working',
        subtitle: lang === 'KOR' ? '최고의 결과는 최고의 과정에서 나옵니다. 자율과 책임을 바탕으로 한 HICE의 업무 방식입니다.' : 'The best results come from the best processes. This is HICE\'s way of working, based on autonomy and responsibility.',
        badge: lang === 'KOR' ? '회사 개요' : 'Overview',
        principles: [
            {
                icon: Rocket,
                title: lang === 'KOR' ? '빠른 실패, 더 빠른 학습' : 'Fail Fast, Learn Faster',
                desc: lang === 'KOR' ? '완벽한 계획보다 빠른 실행을 선호합니다. 실패를 두려워하지 않고, 그 속에서 배움을 얻어 다음 스텝에 적용합니다.' : 'We prefer fast execution over perfect planning. We do not fear failure, but learn from it to apply to the next step.'
            },
            {
                icon: Layers,
                title: lang === 'KOR' ? '투명한 소통과 정보 공유' : 'Transparent Communication',
                desc: lang === 'KOR' ? '모든 업무 맥락과 결정 과정은 투명하게 공유됩니다. 정보의 비대칭을 없애고 누구나 의견을 낼 수 있는 환경을 만듭니다.' : 'All work context and decision processes are shared transparently. We eliminate information asymmetry and create an environment where anyone can voice opinions.'
            },
            {
                icon: Zap,
                title: lang === 'KOR' ? '자율과 그에 따른 책임' : 'Autonomy and Responsibility',
                desc: lang === 'KOR' ? '근무 시간, 장소, 업무 방식에 얽매이지 않습니다. 목표 달성을 위한 최적의 방식을 스스로 결정하되 결괏값에 책임집니다.' : 'We are not bound by working hours, location, or methods. You decide the best way to achieve goals, but take responsibility for the results.'
            },
            {
                icon: HeartHandshake,
                title: lang === 'KOR' ? '서로를 향한 신뢰와 존중' : 'Trust and Respect for Each Other',
                desc: lang === 'KOR' ? '뛰어난 개인이 모여 더 위대한 팀을 이룹니다. 직급에 관계없이 상호 존중하며 치열하게 토론합니다.' : 'Outstanding individuals gather to form a greater team. We respect each other and debate fiercely regardless of rank.'
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
                    colorTheme="orange"
                />

                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.principles.map((item, idx) => (
                            <div key={idx} className={`p-10 md:p-14 rounded-[2rem] border transition-all hover:-translate-y-2 group ${cardBgClass}`}>
                                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-extrabold mb-6 transition-colors group-hover:text-orange-500">{item.title}</h3>
                                <p className={`text-xl leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
