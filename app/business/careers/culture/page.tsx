'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Coffee, Coins, HeartPulse, GraduationCap } from 'lucide-react';

export default function CareersCulturePage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '문화와 혜택' : 'Culture & Benefits',
        subtitle: lang === 'KOR' ? '업무에만 몰입할 수 있도록, 인생 최고의 업무 환경을 지원합니다.' : 'We support the best work environment of your life so you can focus solely on your work.',
        badge: lang === 'KOR' ? '채용' : 'Careers',
        benefitsTitle: lang === 'KOR' ? '업무 몰입을 위한 지원' : 'Support for Full Immersion',
        benefits: [
            {
                icon: Coins,
                title: lang === 'KOR' ? '최고 수준의 보상' : 'Top Tier Compensation',
                desc: lang === 'KOR' ? '업계 최고 수준의 기본급과 더불어, 개인과 팀의 성과에 따른 파격적인 인센티브 및 스톡옵션(RSU)을 부여합니다.' : 'Along with industry-highest base salaries, we offer exceptional incentives and stock options (RSU) based on individual and team performance.'
            },
            {
                icon: Coffee,
                title: lang === 'KOR' ? '완벽한 자율 근무' : 'Complete Autonomy',
                desc: lang === 'KOR' ? '코어 타임 없는 100% 완전 자율 출퇴근제를 운영하며, 본인이 가장 집중할 수 있는 장소에서의 원격 근무를 전면 승인합니다.' : 'We operate a 100% fully autonomous commute system without core hours, and fully approve remote work from anywhere you can concentrate best.'
            },
            {
                icon: GraduationCap,
                title: lang === 'KOR' ? '성장 지원금 무제한' : 'Unlimited Growth Support',
                desc: lang === 'KOR' ? '도서 구입, 컨퍼런스 참가, 온라인 강의 등 개인의 직무 역량 향상에 필요한 비용을 예산 한도 없이 투명하게 100% 지원합니다.' : 'We provide 100% transparent support with no budget limit for expenses needed to improve job skills, such as book purchases, conference attendance, and online courses.'
            },
            {
                icon: HeartPulse,
                title: lang === 'KOR' ? '프리미엄 건강 관리' : 'Premium Health Care',
                desc: lang === 'KOR' ? '최고급 종합 건강검진 지원은 기본이며, 피트니스 센터 제휴 및 심리 상담 프로그램 운용으로 임직원의 신체적/정신적 건강을 챙깁니다.' : 'We offer top-tier comprehensive health check-ups, fitness center partnerships, and psychological counseling programs to care for our employees\' physical/mental wellness.'
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

                {/* Highlight Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] border overflow-hidden relative group">
                        <div className={`absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 ${isDarkMode ? 'from-purple-900/40 to-orange-900/40' : ''}`} />

                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-gray-200 bg-white/50'} backdrop-blur-md`}>
                            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter mix-blend-overlay">
                                Focus on Impact. <br /> We'll handle the rest.
                            </h3>
                        </div>
                    </AnimatedContainer>
                </section>

                {/* Benefits Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.benefitsTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {t.benefits.map((item, idx) => (
                            <div key={idx} className={`p-10 md:p-14 rounded-[2rem] border transition-all hover:-translate-y-2 group flex flex-col items-center text-center ${cardBgClass}`}>
                                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-8 transition-transform group-hover:scale-110">
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
