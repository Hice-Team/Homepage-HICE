'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { ArrowUpRight } from 'lucide-react';

export default function MediaPressPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '보도자료' : 'Press Releases',
        subtitle: lang === 'KOR' ? '언론을 통해 세상에 알려진 HICE의 주요 소식들입니다.' : 'Major HICE news announced to the world through the press.',
        badge: lang === 'KOR' ? '미디어' : 'Media',
        articles: [
            {
                date: '2026.03.01',
                outlet: 'Tech Daily',
                title: lang === 'KOR' ? 'HICE, 차세대 AGI 모델 탑재한 로보틱스 "ExoKRUS" 상용화 선언' : 'HICE Announces Commercialization of "ExoKRUS" Robotics with Next-Gen AGI',
                desc: lang === 'KOR' ? '국내 토종 AI 프레임워크 기업 HICE가 자체 개발한 초거대 AI 기반의 자율주행 특화 로봇 운영체제를 발표하며 세계 시장에 출사표를 던졌다...' : 'Domestic AI framework company HICE throws its hat in the global ring by announcing its proprietary massive AI-based autonomous robotics OS...'
            },
            {
                date: '2026.02.10',
                outlet: 'Global Business Review',
                title: lang === 'KOR' ? 'Croffle 메신저, 글로벌 가입자 5천만 명 돌파 "프라이버시 수요 증명"' : 'Croffle Messenger Surpasses 50M Global Users, "Proving Privacy Demand"',
                desc: lang === 'KOR' ? '종단간 암호화 기술을 전면 도입한 메신저 Croffle이 출시 1년여 만에 5천만 가입자를 돌파하며 폭발적인 성장세를...' : 'Croffle, a messenger fully adopting E2E encryption, breached 50 million subscribers in just over a year of release, showing explosive growth...'
            },
            {
                date: '2025.11.20',
                outlet: 'IT Chosun',
                title: lang === 'KOR' ? '개발자 생태계 흔드는 HICE OpenApp, "코딩의 미래 바꿀 것"' : 'HICE OpenApp Shakes Up Developer Ecosystem, "Will Change The Future of Coding"',
                desc: lang === 'KOR' ? '자연어 입력만으로 멀티 플랫폼 앱을 동시 생성하는 OpenApp 프레임워크 베타 버전이 전 세계 개발자 10만 명의 선택을 받았다...' : 'The beta version of the OpenApp framework, which simultaneously generates multi-platform apps just from natural language input, got chosen by 100k developers globally...'
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

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-10">
                    <div className="space-y-6">
                        {t.articles.map((item, idx) => (
                            <AnimatedContainer key={idx} animationType="fadeUp" delay={idx * 0.1}>
                                <a href="#" className={`block p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-1 group ${cardBgClass}`}>
                                    <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-6 gap-2 md:gap-4 md:items-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block w-max ${isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-600'}`}>
                                            {item.outlet}
                                        </span>
                                        <span className={`text-sm font-medium ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                            {item.date}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-start gap-6">
                                        <div className="md:pr-12">
                                            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-blue-500 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className={`leading-relaxed line-clamp-2 md:line-clamp-3 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center shrink-0 transition-colors ${isDarkMode ? 'bg-zinc-800 text-zinc-500 group-hover:text-white group-hover:bg-blue-500' : 'bg-gray-50 text-gray-400 group-hover:text-white group-hover:bg-blue-600'}`}>
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </a>
                            </AnimatedContainer>
                        ))}
                    </div>

                    <AnimatedContainer animationType="fadeIn" delay={0.4} className="mt-16 text-center">
                        <button className={`px-8 py-4 rounded-full font-bold transition-colors ${isDarkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                            {lang === 'KOR' ? '보도자료 더 보기' : 'Load More Press Releases'}
                        </button>
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
