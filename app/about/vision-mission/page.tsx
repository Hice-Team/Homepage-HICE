'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Target, Lightbulb, Compass, Heart } from 'lucide-react';

export default function VisionMissionPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '비전 및 미션' : 'Vision & Mission',
        subtitle: lang === 'KOR' ? 'HICE가 바라보는 미래와 우리가 매일 실천하는 목적입니다.' : 'The future HICE envisions and the purpose we practice every day.',
        badge: lang === 'KOR' ? '회사 개요' : 'Overview',
        vision: {
            label: lang === 'KOR' ? '우리의 비전' : 'Our Vision',
            title: lang === 'KOR' ? '기술의 온기로 완성되는 모두의 내일' : 'A tomorrow for everyone, completed by the warmth of technology',
            desc: lang === 'KOR' ? '우리는 기술이 차갑고 복잡한 것이 아니라, 사람과 사람을 잇고 일상을 더 따뜻하게 만드는 매개체가 되어야 한다고 믿습니다. 누구나 소외계층 없이 가장 안전하고 편리한 기술의 혜택을 누리는 미래가 HICE의 종착지입니다.' : 'We believe technology should not be cold and complex, but a medium that connects people and makes everyday life warmer. A future where everyone, without marginalization, enjoys the benefits of the most secure and convenient technology is HICE\'s destination.'
        },
        mission: {
            label: lang === 'KOR' ? '우리의 미션' : 'Our Mission',
            items: [
                {
                    icon: Lightbulb,
                    title: lang === 'KOR' ? '파괴적 혁신을 일상으로' : 'Disruptive Innovation in Everyday Life',
                    desc: lang === 'KOR' ? '복잡한 AI 기술을 누구나 직관적으로 사용할 수 있는 제품으로 재해석합니다.' : 'We reinterpret complex AI technologies into products anyone can use intuitively.'
                },
                {
                    icon: Compass,
                    title: lang === 'KOR' ? '기준 없는 성장의 경계자' : 'Guardians against Aimless Growth',
                    desc: lang === 'KOR' ? '속도만을 추구하지 않습니다. 안전, 보안, 그리고 윤리를 훼손하지 않는 성장을 최우선으로 합니다.' : 'We do not pursue speed alone. We prioritize growth that does not compromise safety, security, and ethics.'
                },
                {
                    icon: Heart,
                    title: lang === 'KOR' ? '소외 없는 생태계 구축' : 'Building an Inclusive Ecosystem',
                    desc: lang === 'KOR' ? '최산 기술의 혜택이 특정 계층에 독점되지 않도록, 접근 가능한 오픈 생태계를 지향합니다.' : 'We aim for an open ecosystem where the benefits of cutting-edge technology are accessible to all, not monopolized.'
                }
            ]
        }
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

                {/* Vision Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <AnimatedContainer animationType="fadeUp" className={`p-10 md:p-20 rounded-[3rem] border ${cardBgClass} relative overflow-hidden group`}>
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700" />

                        <div className="relative z-10 max-w-4xl">
                            <span className="inline-block px-4 py-1.5 mb-8 rounded-full text-sm font-bold tracking-widest uppercase bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                                {t.vision.label}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
                                {t.vision.title}
                            </h2>
                            <p className={`text-2xl leading-relaxed md:leading-loose ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                {t.vision.desc}
                            </p>
                        </div>
                    </AnimatedContainer>
                </section>

                {/* Mission Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16">
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-bold tracking-widest uppercase bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                            {t.mission.label}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            {lang === 'KOR' ? '비전을 현실로 만드는 구체적인 약속' : 'Specific promises to turn vision into reality'}
                        </h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.mission.items.map((item, idx) => (
                            <div key={idx} className={`p-10 md:p-12 rounded-[2rem] border transition-all hover:-translate-y-2 ${cardBgClass}`}>
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">{item.title}</h3>
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
