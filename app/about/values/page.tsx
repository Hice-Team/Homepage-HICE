'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Target, Users, Shield, Cpu } from 'lucide-react';

export default function ValuesPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '핵심 가치' : 'Core Values',
        subtitle: lang === 'KOR' ? 'HICE가 제품을 만들고, 문화를 형성하며, 세상을 대하는 변함없는 4가지 약속입니다.' : 'The 4 unwavering promises HICE makes when creating products, shaping culture, and facing the world.',
        badge: lang === 'KOR' ? '회사 개요' : 'Overview',
        values: [
            {
                icon: Target,
                title: lang === 'KOR' ? '사용자 집착' : 'Customer Obsession',
                desc: lang === 'KOR' ? '리더나 경쟁자가 아닌, 사용자에 집착합니다. 제품의 모든 기능과 디자인은 사용자의 고통을 해결하기 위해 존재합니다.' : 'We obsess over users, not leaders or competitors. Every feature and design exists to solve our users\' pain points.'
            },
            {
                icon: Shield,
                title: lang === 'KOR' ? '타협 없는 보안과 프라이버시' : 'Uncompromising Security',
                desc: lang === 'KOR' ? '편의성을 위해 사용자의 안전을 희생하지 않습니다. 보안과 익명의 보장은 HICE의 절대적인 기본 전제입니다.' : 'We do not sacrifice user safety for convenience. Guaranteeing security and anonymity is our absolute baseline.'
            },
            {
                icon: Cpu,
                title: lang === 'KOR' ? '기술의 따뜻한 번역' : 'Warm Translation of Tech',
                desc: lang === 'KOR' ? '차가운 알고리즘과 코드 뒤에 사람이 있음을 잊지 않습니다. 복잡한 기술을 일상의 언어와 디자인으로 번역합니다.' : 'We never forget there are people behind cold algorithms and code. We translate complex tech into everyday language and design.'
            },
            {
                icon: Users,
                title: lang === 'KOR' ? '투명성과 열린 생태계' : 'Transparency & Open Ecosystem',
                desc: lang === 'KOR' ? '성장의 과실을 독점하지 않습니다. 개발자와 파트너들이 스스로 가치를 창출하고 분배받을 수 있는 환경을 엽니다.' : 'We do not monopolize the fruits of growth. We open an environment where developers and partners can create and distribute value themselves.'
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
                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.values.map((item, idx) => (
                            <div key={idx} className={`p-10 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden ${cardBgClass}`}>
                                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] transition-opacity opacity-0 group-hover:opacity-100 ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`} />

                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center mb-8">
                                    <item.icon size={28} />
                                </div>

                                <h3 className="relative z-10 text-2xl font-bold mb-4">{item.title}</h3>
                                <p className={`relative z-10 text-lg leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
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
