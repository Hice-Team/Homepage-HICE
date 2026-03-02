'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

export default function ImpactPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '우리가 만들고자 하는 영향' : 'Our Impact',
        subtitle: lang === 'KOR' ? 'HICE가 꿈꾸는 변화는 단순히 숫자로 측정되지 않습니다. 일상이 바뀌는 순간을 지향합니다.' : 'The change HICE dreams of is not merely measured in numbers. We aim for moments that change everyday life.',
        badge: lang === 'KOR' ? '회사 개요' : 'Overview',
        sections: [
            {
                title: lang === 'KOR' ? '모두를 위한 AI 격차 해소' : 'Bridging the AI Divide',
                desc: lang === 'KOR' ? '과거의 인터넷 혁명처럼, AI 혁명 또한 일부 국가나 대기업의 전유물이 되어서는 안 됩니다. 누구나 접근 가능한 가벼운 범용 애플리케이션 프레임워크와 경량화된 AI 모델들을 무료로 오픈소스화하여 누구나 기술의 혜택을 누리도록 합니다.' : 'Like the internet revolution, the AI revolution should not be monopolized by a few nations or corporations. We make a lightweight universal app framework and optimized AI models accessible and open-source for everyone to enjoy.'
            },
            {
                title: lang === 'KOR' ? '디지털 감시를 벗어난 해방' : 'Liberation from Digital Surveillance',
                desc: lang === 'KOR' ? '나의 데이터가 나도 모르는 사이에 상업적으로 이용되거나 감시받지 않아야 합니다. 철저한 암호화 기반 메신저와 플랫폼 아키텍처를 설계하여, 온라인에서도 가장 쾌적하고 안전한 ‘나만의 방’을 보장합니다.' : 'Your data should not be used commercially or monitored without your knowledge. By designing strictly encrypted messengers and platform architectures, we guarantee a comfortable and safe "room of one\'s own" online.'
            },
            {
                title: lang === 'KOR' ? '인간 고유의 창의성 회복' : 'Restoring Human Creativity',
                desc: lang === 'KOR' ? '반복적이고 소모적인 인지 작업은 HICE의 AI와 자동화 인프라가 담당합니다. 우리는 인간이 더 큰 가치를 창출하고 서로에게 깊이 공감하는 일산의 창조적 활동에 몰입할 수 있도록 돕습니다.' : 'Repetitive and draining cognitive tasks are handled by HICE\'s AI and automation infrastructure. We help humans immerse themselves in daily creative activities, generating greater value and empathizing deeply with one another.'
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
                    colorTheme="purple"
                />

                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {t.sections.map((item, idx) => (
                            <AnimatedContainer key={idx} animationType="fadeUp" delay={idx * 0.1}>
                                <div className={`p-10 md:p-16 rounded-[2.5rem] border ${cardBgClass} relative overflow-hidden group transition-all duration-300 hover:shadow-xl`}>
                                    <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-100'}`} />

                                    <h3 className="relative z-10 text-3xl md:text-4xl font-extrabold mb-6 leading-tight transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                        {item.title}
                                    </h3>
                                    <p className={`relative z-10 text-xl leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
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
