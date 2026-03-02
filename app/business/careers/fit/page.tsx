'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Target, Search, Zap, Crosshair } from 'lucide-react';

export default function CareersFitPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '인재상' : 'Ideal Candidate',
        subtitle: lang === 'KOR' ? 'HICE가 찾는 동료, 그리고 우리가 함께 성장하는 방식에 대하여' : 'About the colleagues HICE is looking for and how we grow together.',
        badge: lang === 'KOR' ? '채용' : 'Careers',
        principlesTitle: lang === 'KOR' ? 'HICE다움 (HICE-ness)' : 'HICE-ness',
        principles: [
            {
                icon: Target,
                title: lang === 'KOR' ? '목적 기반의 사고' : 'Purpose-Driven Thinking',
                desc: lang === 'KOR' ? '왜(Why) 이 일을 하는지 항상 질문합니다. 수동적인 지시 이행을 넘어 문제의 본질을 꿰뚫고 주도적으로 해결책을 찾습니다.' : 'Always asks Why we do this work. Goes beyond passive execution to penetrate the essence of the problem and proactively find solutions.'
            },
            {
                icon: Search,
                title: lang === 'KOR' ? '끊임없는 호기심' : 'Relentless Curiosity',
                desc: lang === 'KOR' ? '현재의 방식에 안주하지 않습니다. 새로운 기술, 낯선 도메인에 방어적이지 않고 스펀지처럼 흡수하여 내 것으로 만듭니다.' : 'Does not settle for the current way. Absorbs new technologies and unfamiliar domains like a sponge without being defensive.'
            },
            {
                icon: Zap,
                title: lang === 'KOR' ? '기민한 실행력' : 'Agile Execution',
                desc: lang === 'KOR' ? '완벽한 계획을 위한 1주일보다, 오늘 시도하고 내일 개선하는 방식을 택합니다. 속도 자체가 훌륭한 전략임을 이해합니다.' : 'Chooses trying today and improving tomorrow over spending a week on a perfect plan. Understands that speed itself is a great strategy.'
            },
            {
                icon: Crosshair,
                title: lang === 'KOR' ? '탁월함에 대한 집착' : 'Obsession with Excellence',
                desc: lang === 'KOR' ? '적당한 수준에서 타협하지 않고 디테일에 집착합니다. 내 이름이 걸린 결과물에 대해 스스로 부끄럽지 않도록 끊임없이 폴리싱(Polishing)합니다.' : 'Does not compromise at an adequate level but obsesses over details. Constantly polishes the outcome bearing one\'s name to be proud of it.'
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

                {/* Message Section */}
                <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
                    <AnimatedContainer animationType="fadeUp" className={`p-10 md:p-16 rounded-[3rem] border relative overflow-hidden group ${cardBgClass}`}>
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 ${isDarkMode ? 'bg-blue-600/10' : ''}`} />

                        <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight relative z-10">
                            {lang === 'KOR' ? '"똑똑한 사람을 뽑아서 지시하는 것은 무의미합니다. 우리는 참견하기 위해 똑똑한 사람을 채용합니다."' : '"It doesn\'t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."'}
                        </h3>
                        <p className={`text-xl leading-relaxed relative z-10 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                            {lang === 'KOR' ? 'HICE의 인재상은 스티브 잡스의 철학과 맞닿아 있습니다. 우리는 당신을 톱니바퀴로 쓰기 위해 채용하지 않습니다. 스스로 아젠다를 설정하고, 조직을 설득하며, 집요하게 목표를 달성할 수 있는 항해사를 찾습니다.' : 'HICE\'s ideal candidate philosophy aligns with Steve Jobs\'. We do not hire you to be a cog in a machine. We are looking for navigators who can set their own agenda, persuade the organization, and tenaciously achieve goals.'}
                        </p>
                    </AnimatedContainer>
                </section>

                {/* Principles Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.principlesTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.principles.map((item, idx) => (
                            <div key={idx} className={`p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-2 group ${cardBgClass}`}>
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-8 transition-transform group-hover:scale-110">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
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
