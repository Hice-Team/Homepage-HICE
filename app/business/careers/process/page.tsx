'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

export default function CareersProcessPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '채용 프로세스' : 'Hiring Process',
        subtitle: lang === 'KOR' ? '지원자의 시간과 노력을 존중하며, 상호 핏(Fit)을 확인하는 빠르고 투명한 과정입니다.' : 'A fast and transparent process to verify mutual fit while respecting candidates\' time and effort.',
        badge: lang === 'KOR' ? '채용' : 'Careers',
        steps: [
            {
                num: '01',
                title: lang === 'KOR' ? '서류 지원' : 'Application',
                desc: lang === 'KOR' ? '이력서, 포트폴리오, 혹은 내 역량을 증명할 수 있는 깃허브(GitHub) 링크 등 자유로운 형식으로 이력서를 제출합니다.' : 'Submit your resume in any format, including CVs, portfolios, or GitHub links that prove your capabilities.'
            },
            {
                num: '02',
                title: lang === 'KOR' ? '비대면 역량 인터뷰' : 'Remote Skills Interview',
                desc: lang === 'KOR' ? '직무에 따라 코딩 테스트, 사전 과제 또는 실무진과의 비대면 화상 인터뷰(Google Meet)를 통해 전문성을 심층 검증합니다.' : 'Depending on the role, we deeply verify expertise through coding tests, assignments, or remote video interviews (Google Meet) with the working team.'
            },
            {
                num: '03',
                title: lang === 'KOR' ? '컬처핏 인터뷰' : 'Culture Fit Interview',
                desc: lang === 'KOR' ? 'HICE의 핵심 가치와 일하는 방식에 부합하는지, 서로가 함께 성장할 수 있는지 솔직하게 대화를 나누는 대면 인터뷰입니다.' : 'An in-person interview for an honest candid conversation to see if we align on HICE\'s core values and ways of working, and if we can grow together.'
            },
            {
                num: '04',
                title: lang === 'KOR' ? '처우 협의 및 온보딩' : 'Offer & Onboarding',
                desc: lang === 'KOR' ? '최종 합격자에게 오퍼 및 스톡옵션(RSU) 조건 등을 논의합니다. 수락 후 HICE의 일원으로서 매끄러운 온보딩을 돕습니다.' : 'We discuss offer details and RSU conditions with the final successful candidate. After acceptance, we support a smooth onboarding as a member of HICE.'
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

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16">
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className={`absolute left-10 md:left-[3.25rem] top-10 bottom-10 w-0.5 ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'} hidden md:block`} />

                        <div className="space-y-12">
                            {t.steps.map((step, idx) => (
                                <AnimatedContainer key={idx} animationType="fadeUp" delay={idx * 0.1} className="relative z-10">
                                    <div className={`p-8 md:p-12 rounded-[2.5rem] border flex flex-col md:flex-row gap-8 transition-all hover:-translate-y-1 ${cardBgClass}`}>

                                        {/* Step Number Circle */}
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 font-extrabold text-2xl shadow-lg border-4 ${isDarkMode ? 'bg-zinc-950 border-zinc-800 text-blue-500' : 'bg-white border-white text-blue-600'}`}>
                                            {step.num}
                                        </div>

                                        <div className="pt-2">
                                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                                {step.desc}
                                            </p>
                                        </div>

                                    </div>
                                </AnimatedContainer>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
