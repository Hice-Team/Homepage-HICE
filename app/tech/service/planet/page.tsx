'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Globe2, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function PlanetPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'Planet' : 'Planet',
        subtitle: lang === 'KOR' ? '나만의 우주를 탐험하고 무한한 상상력을 시각화하는 메타 인공지능 공간' : 'A meta AI space to explore your own universe and visualize infinite imagination.',
        badge: lang === 'KOR' ? '서비스' : 'Service',
        featuresTitle: lang === 'KOR' ? '상상을 현실로 그리기' : 'Drawing Imagination into Reality',
        features: [
            {
                icon: Sparkles,
                title: lang === 'KOR' ? '생성형 유니버스' : 'Generative Universe',
                desc: lang === 'KOR' ? '단 몇 줄의 프롬프트로 3D 공간, 캐릭터, 사물을 창조하여 나만의 Planet을 구성합니다.' : 'Create your own Planet by generating 3D spaces, characters, and objects with just a few lines of prompts.'
            },
            {
                icon: Globe2,
                title: lang === 'KOR' ? '초연결 탐험' : 'Hyper-connected Exploration',
                desc: lang === 'KOR' ? '다른 유저들이 만든 행성(Planet)들을 방문하고 실시간으로 상호작용하며 경험을 공유합니다.' : 'Visit Planets created by other users, interact in real-time, and share experiences.'
            },
            {
                icon: Zap,
                title: lang === 'KOR' ? '저지연 렌더링' : 'Low-Latency Rendering',
                desc: lang === 'KOR' ? '클라우드 기반의 최적화된 렌더링 파이프라인으로 모바일 기기에서도 끊김 없는 메타버스 경험을 제공합니다.' : 'Provides a seamless metaverse experience even on mobile devices with an optimized cloud-based rendering pipeline.'
            },
            {
                icon: ShieldCheck,
                title: lang === 'KOR' ? '안전한 가상 경험' : 'Safe Virtual Experience',
                desc: lang === 'KOR' ? '유해 콘텐츠를 실시간으로 필터링하는 AI 가디언 시스템이 가동되어 누구나 안전하게 즐길 수 있습니다.' : 'An AI Guardian system filtering harmful content in real-time ensures a safe experience for everyone.'
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

                {/* Mockup Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] border overflow-hidden relative group">
                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 ${isDarkMode ? 'from-blue-900/40 to-teal-900/40' : ''}`} />

                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-gray-200 bg-white/50'} backdrop-blur-sm`}>
                            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter mix-blend-overlay">
                                Your Universe Awaits.
                            </h3>
                            <p className={`text-lg md:text-xl max-w-2xl mix-blend-overlay ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>
                                {lang === 'KOR' ? 'Planet 서비스 목업 화면' : 'Planet Service Mockup Screen'}
                            </p>
                        </div>
                    </AnimatedContainer>
                </section>

                {/* Features Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.featuresTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.features.map((item, idx) => (
                            <div key={idx} className={`p-10 md:p-14 rounded-[2rem] border transition-all hover:-translate-y-2 group flex flex-col items-start ${cardBgClass}`}>
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-8 transition-transform group-hover:scale-110">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
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
