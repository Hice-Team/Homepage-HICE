'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Linkedin, Mail, User } from 'lucide-react';

export default function TeamPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '팀 소개' : 'Meet the Team',
        subtitle: lang === 'KOR' ? '혁신을 현실로 만드는 HICE의 핵심 인재들을 소개합니다.' : 'Introducing the core talents of HICE who turn innovation into reality.',
        badge: lang === 'KOR' ? '회사 개요' : 'Overview',
        team: [
            {
                name: lang === 'KOR' ? '강석호' : 'Seokho Kang',
                role: 'CEO & Founder',
                desc: lang === 'KOR' ? '인공지능 연구 및 비즈니스 전략을 총괄합니다.' : 'Oversees AI research and business strategy.',
                image: 'blue'
            },
            {
                name: 'Jane Doe',
                role: 'CTO',
                desc: lang === 'KOR' ? 'HICE OpenApp과 Core AI 엔진 개발을 이끕니다.' : 'Leads the development of HICE OpenApp and Core AI Engine.',
                image: 'purple'
            },
            {
                name: 'John Smith',
                role: 'CPO',
                desc: lang === 'KOR' ? '사용자 중심의 제품 기획과 디자인을 총괄합니다.' : 'Oversees user-centric product planning and design.',
                image: 'orange'
            }
        ]
    };

    const getGradient = (color: string) => {
        switch (color) {
            case 'blue': return 'from-blue-500 to-cyan-400';
            case 'purple': return 'from-purple-500 to-pink-500';
            case 'orange': return 'from-orange-500 to-amber-400';
            default: return 'from-gray-500 to-gray-400';
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
                    colorTheme="blue"
                />

                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.team.map((member, idx) => (
                            <div key={idx} className={`rounded-[2rem] border overflow-hidden transition-all hover:-translate-y-2 group ${cardBgClass}`}>
                                {/* Image Placeholder */}
                                <div className={`w-full h-80 bg-gradient-to-br ${getGradient(member.image)} relative overflow-hidden flex items-center justify-center`}>
                                    <User size={80} className="text-white/30 drop-shadow-lg" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                <div className="p-8 md:p-10 relative">
                                    <h3 className="text-3xl font-extrabold mb-2">{member.name}</h3>
                                    <p className="text-blue-500 font-bold mb-6 tracking-wide uppercase text-sm">{member.role}</p>
                                    <p className={`text-lg leading-relaxed mb-8 h-20 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                        {member.desc}
                                    </p>

                                    <div className="flex gap-4 border-t border-gray-100 dark:border-zinc-800 pt-6">
                                        <button className={`p-3 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                            <Linkedin size={20} />
                                        </button>
                                        <button className={`p-3 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                            <Mail size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
