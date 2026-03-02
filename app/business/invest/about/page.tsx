'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { TrendingUp, Globe2, Cpu, BarChart3 } from 'lucide-react';

export default function InvestAboutPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'HICE IR에 대하여' : 'About HICE IR',
        subtitle: lang === 'KOR' ? '파괴적 혁신을 이끄는 HICE의 지속가능한 비즈니스 모델과 성장 전략을 소개합니다.' : 'Introducing HICE\'s sustainable business model and growth strategy driving disruptive innovation.',
        badge: lang === 'KOR' ? '투자' : 'Investment',
        highlightsTitle: lang === 'KOR' ? '숫자가 증명하는 성장 로드맵' : 'Growth Roadmap Proven by Numbers',
        highlights: [
            {
                icon: TrendingUp,
                title: lang === 'KOR' ? '기하급수적 플랫폼 성장' : 'Exponential Platform Growth',
                desc: lang === 'KOR' ? 'OpenApp과 Planet 생태계의 활성 사용자(MAU)가 매 분기 300% 이상 성장하며 강력한 네트워크 효과를 증명하고 있습니다.' : 'Monthly Active Users (MAU) of the OpenApp and Planet ecosystems are growing by over 300% every quarter, proving strong network effects.'
            },
            {
                icon: Globe2,
                title: lang === 'KOR' ? '글로벌 엔터프라이즈 파트너십' : 'Global Enterprise Partnerships',
                desc: lang === 'KOR' ? '최고 수준의 보안을 자랑하는 Croffle 기반의 시스템을 통해 전 세계 50개 이상의 금융/공공 기관과 B2B 계약을 체결했습니다.' : 'Secured B2B contracts with over 50 global financial/public institutions through the highly secure Croffle-based system.'
            },
            {
                icon: Cpu,
                title: lang === 'KOR' ? '독자적 IP 워터마크 전략' : 'Proprietary IP Strategy',
                desc: lang === 'KOR' ? '핵심 Foundation AI 모델과 ExoKRUS 로보틱스 제어 알고리즘 등 120개 이상의 글로벌 핵심 우수 특허군을 확보했습니다.' : 'Secured more than 120 global core patent families, including core Foundation AI models and ExoKRUS robotics control algorithms.'
            },
            {
                icon: BarChart3,
                title: lang === 'KOR' ? '견고한 수익 다각화 (B2C & B2B)' : 'Solid Revenue Diversification',
                desc: lang === 'KOR' ? '소비자 구독 모델(B2C)과 맞춤형 엔터프라이즈 솔루션(B2B)을 병행하여 외부 충격에 흔들리지 않는 안정적인 현금 흐름을 창출합니다.' : 'Generates stable cash flows immune to external shocks by running consumer subscription models (B2C) and customized enterprise solutions (B2B) in parallel.'
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

                {/* Philosophy Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                            {lang === 'KOR' ? '단기적 수익을 뛰어넘는 위대한 생태계의 건설' : 'Building a great ecosystem beyond short-term profits'}
                        </h2>
                        <p className={`text-xl leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                            {lang === 'KOR' ? 'HICE는 단순한 기술 제공자를 넘어, 개발자와 사용자 모두가 함께 가치를 창출하는 개방형 플랫폼 생태계를 구축하고 있습니다. 세계 최고의 인재들과 독자적인 원천 기술을 바탕으로 향후 10년의 산업 표준을 재정의하는 데 앞장서겠습니다.' : 'HICE goes beyond being a simple technology provider to building an open platform ecosystem where developers and users co-create value. Based on the world\'s best talents and proprietary original technologies, we will take the lead in redefining industry standards for the next 10 years.'}
                        </p>
                    </AnimatedContainer>
                </section>

                {/* Highlights Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16 border-t border-gray-200 dark:border-zinc-800 pt-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.highlightsTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.highlights.map((item, idx) => (
                            <div key={idx} className={`p-10 md:p-14 rounded-[2.5rem] border transition-all hover:-translate-y-2 flex flex-col items-start ${cardBgClass}`}>
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-8">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
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
