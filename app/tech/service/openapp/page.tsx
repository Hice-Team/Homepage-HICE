'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Lightbulb, Code2, Rocket, Share2 } from 'lucide-react';

export default function OpenAppPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'HICE OpenApp' : 'HICE OpenApp',
        subtitle: lang === 'KOR' ? '누구나 쉽게 접근하고 확장할 수 있는 범용 애플리케이션 플랫폼' : 'A universal application platform accessible and expandable by anyone.',
        badge: lang === 'KOR' ? '서비스' : 'Service',
        featuresTitle: lang === 'KOR' ? '개발 혁신의 새로운 표준' : 'A New Standard in Dev Innovation',
        features: [
            {
                icon: Code2,
                title: lang === 'KOR' ? '단일 코드베이스의 진화' : 'Evolution of Single Codebase',
                desc: lang === 'KOR' ? '하나의 소스 코드로 iOS, Android, Web, Window, MacOS 등 모든 플랫폼에 자동으로 최적화된 앱을 배포합니다.' : 'Deploy optimized apps automatically to all platforms including iOS, Android, Web, Windows, and MacOS from a single source code.'
            },
            {
                icon: Lightbulb,
                title: lang === 'KOR' ? 'AI 기반 자동 생성' : 'AI-Powered Generation',
                desc: lang === 'KOR' ? '원하는 기능을 자연어로 설명하면, HICE Core AI가 컴포넌트 단위로 구조를 설계하고 필요한 코드를 즉시 생성합니다.' : 'Describe the desired features in natural language, and HICE Core AI will design the structure block-by-block and generate necessary code instantly.'
            },
            {
                icon: Share2,
                title: lang === 'KOR' ? '플러그인 생태계 확장' : 'Plugin Ecosystem Expansion',
                desc: lang === 'KOR' ? '서드파티 개발자들이 제작한 수천 개의 기능 블록(Plugin)을 레고처럼 조립하여 무한히 기능을 확장할 수 있습니다.' : 'Infinitely expand features by assembling thousands of functional blocks (Plugins) created by third-party developers like Lego.'
            },
            {
                icon: Rocket,
                title: lang === 'KOR' ? '무중단 배포 및 롤백' : 'Zero-Downtime Deployment',
                desc: lang === 'KOR' ? '스토어 심사 대기 없이 앱 내에서 핫 푸시 업데이트를 지원하며, 이슈 발생 시 1초 만에 이전 버전으로 롤백합니다.' : 'Supports hot push updates within the app without waiting for store review, and rolls back to the previous version in 1 second when issues occur.'
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

                {/* Big Preview Image / Mockup */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] border overflow-hidden relative group">
                        <div className={`absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 ${isDarkMode ? 'from-purple-900/40 to-blue-900/40' : ''}`} />

                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-gray-200 bg-white/50'} backdrop-blur-sm`}>
                            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter mix-blend-overlay">
                                Build Once. Run Everywhere.
                            </h3>
                            <p className={`text-lg md:text-xl max-w-2xl mix-blend-overlay ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>
                                {lang === 'KOR' ? 'OpenApp 플랫폼 목업 이미지 스페이스' : 'OpenApp Platform Mockup Image Space'}
                            </p>
                        </div>
                    </AnimatedContainer>
                </section>

                {/* Features Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.featuresTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.features.map((item, idx) => (
                            <div key={idx} className={`p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-2 group ${cardBgClass}`}>
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-8 transition-transform group-hover:scale-110">
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
