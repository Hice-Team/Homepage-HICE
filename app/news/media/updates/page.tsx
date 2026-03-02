'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Sparkles, Calendar } from 'lucide-react';

export default function MediaUpdatesPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '새소식 & 업데이트' : 'News & Updates',
        subtitle: lang === 'KOR' ? 'HICE에서 일어나는 작지만 위대한 변화들을 소개합니다.' : 'Small but great changes happening at HICE.',
        badge: lang === 'KOR' ? '미디어' : 'Media',
        updates: [
            {
                date: '2026.03.02',
                title: lang === 'KOR' ? 'HICE Foundation, 아프리카 디지털 소외 지역 교육 지원 MOU 체결' : 'HICE Foundation Signs MOU to Support Education in Digitally Marginalized Regions in Africa',
                desc: lang === 'KOR' ? 'HICE의 비영리 재단이 르완다 정부와 협력하여 현지 학생들에게 코딩 교육 플랫폼과 디바이스를 지원합니다.' : 'HICE\'s non-profit foundation collaborates with the Rwandan government to support local students with coding education platforms and devices.',
                category: 'CSR'
            },
            {
                date: '2026.02.18',
                title: lang === 'KOR' ? 'OpenApp 개발자 컨퍼런스 "Build 2026" 사전 등록 안내' : 'Pre-registration for OpenApp Developer Conference "Build 2026"',
                desc: lang === 'KOR' ? '오는 4월 캘리포니아 산호세에서 열리는 역대 최대 규모의 행사. 지금 얼리버드 티켓을 예매하세요.' : 'The largest event ever to be held in San Jose, California this April. Reserve your early bird tickets now.',
                category: 'Event'
            },
            {
                date: '2026.01.25',
                title: lang === 'KOR' ? 'Planet 크리에이터 펀드 2기 모집 시작' : 'Planet Creator Fund Batch 2 Applications Open',
                desc: lang === 'KOR' ? '독창적인 3D 에셋과 가상 공간을 제작하는 크리에이터들을 위해 총 100억 원 규모의 지원금을 운영합니다.' : 'Running a total fund of 10 billion KRW for creators producing original 3D assets and virtual spaces.',
                category: 'Community'
            },
            {
                date: '2025.12.10',
                title: lang === 'KOR' ? '임직원 봉사단 "Next Gen", 연말 김장 나눔 행사 진행' : 'Employee Volunteer Group "Next Gen" Holds Year-End Kimchi Sharing Event',
                desc: lang === 'KOR' ? '지역 사회의 온도를 높이기 위해 HICE 임직원 200여 명이 직접 담근 김치를 독거노인 센터에 기부했습니다.' : 'To raise the temperature of the local community, over 200 HICE employees donated homemade kimchi to senior centers.',
                category: 'Culture'
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.updates.map((item, idx) => (
                            <AnimatedContainer key={idx} animationType="fadeUp" delay={idx * 0.1}>
                                <a href="#" className={`block p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-1 h-full flex flex-col ${cardBgClass}`}>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block ${isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-600'}`}>
                                            {item.category}
                                        </span>
                                        <span className={`text-sm font-medium flex items-center gap-1.5 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                            <Calendar size={14} /> {item.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-blue-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className={`text-base md:text-lg leading-relaxed mt-auto ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                        {item.desc}
                                    </p>
                                </a>
                            </AnimatedContainer>
                        ))}
                    </div>

                    <AnimatedContainer animationType="fadeIn" delay={0.4} className="mt-16 text-center">
                        <button className={`px-8 py-4 rounded-full font-bold transition-colors ${isDarkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                            {lang === 'KOR' ? '더 많은 소식 읽기' : 'Read More Updates'}
                        </button>
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
