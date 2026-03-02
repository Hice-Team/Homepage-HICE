'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Book, Code, Package, Compass } from 'lucide-react';

export default function InsightsGuidesPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '사용자 가이드' : 'User Guides',
        subtitle: lang === 'KOR' ? 'HICE 플랫폼을 100% 활용하기 위한 공식 매뉴얼과 튜토리얼입니다.' : 'Official manuals and tutorials to utilize 100% of the HICE platform.',
        badge: lang === 'KOR' ? '인사이트' : 'Insights',
        guides: [
            {
                icon: Compass,
                category: 'Getting Started',
                title: lang === 'KOR' ? 'OpenApp 시작하기 빠른 가이드' : 'Quick Start Guide to OpenApp',
                desc: lang === 'KOR' ? '초기 설정부터 첫 번째 멀티플랫폼 앱을 배포하기까지의 A to Z.' : 'A to Z from initial setup to deploying your first multi-platform app.'
            },
            {
                icon: Code,
                category: 'Tutorial',
                title: lang === 'KOR' ? '자연어 프롬프트로 UI 컴포넌트 생성하기' : 'Generating UI Components with Natural Language Prompts',
                desc: lang === 'KOR' ? 'HICE Core AI가 코드를 가장 잘 이해할 수 있는 최적의 프롬프트 작성법 안내.' : 'Guide on optimal prompt writing for HICE Core AI to best understand code.'
            },
            {
                icon: Package,
                category: 'Reference',
                title: lang === 'KOR' ? '서드파티 플러그인 개발 공식 문법 가이드' : 'Official Syntax Guide for 3rd-Party Plugin Development',
                desc: lang === 'KOR' ? 'OpenApp 생태계에 배포할 플러그인 모듈 아키텍처 및 API 레퍼런스.' : 'Plugin module architecture and API reference to deploy to the OpenApp ecosystem.'
            },
            {
                icon: Book,
                category: 'Manual',
                title: lang === 'KOR' ? 'Croffle 기업망 연동 가이드' : 'Croffle Enterprise Network Integration Guide',
                desc: lang === 'KOR' ? '보안 메신저 Croffle을 사내 Active Directory 및 IAM과 연동하는 절차 소개.' : 'Procedure to integrate secure messenger Croffle with in-house AD and IAM.'
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

                <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.guides.map((item, idx) => (
                            <AnimatedContainer key={idx} animationType="fadeUp" delay={idx * 0.1}>
                                <a href="#" className={`block p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-1 h-full flex flex-col group ${cardBgClass}`}>
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 mb-8 transition-transform group-hover:scale-110">
                                        <item.icon size={28} />
                                    </div>

                                    <span className={`text-xs font-bold tracking-widest uppercase mb-3 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                        {item.category}
                                    </span>

                                    <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-orange-500 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className={`text-base leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                        {item.desc}
                                    </p>
                                </a>
                            </AnimatedContainer>
                        ))}
                    </div>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
