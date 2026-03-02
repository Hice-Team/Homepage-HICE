'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Calendar, MapPin, Video, ArrowRight } from 'lucide-react';

export default function InsightsEventsPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '웨비나 & 행사' : 'Webinars & Events',
        subtitle: lang === 'KOR' ? 'HICE 전문가들과 함께 기술과 산업에 대해 논의하는 온/오프라인 행사를 안내합니다.' : 'Guiding online/offline events to discuss tech and industry with HICE experts.',
        badge: lang === 'KOR' ? '인사이트' : 'Insights',
        events: [
            {
                id: 1,
                status: 'Upcoming',
                title: lang === 'KOR' ? 'On-Device AI 최적화 기법 마스터클래스' : 'Masterclass: On-Device AI Optimization Techniques',
                date: '2026.03.25 14:00 (KST)',
                type: 'Webinar',
                location: 'Online (Zoom)',
            },
            {
                id: 2,
                status: 'Past',
                title: lang === 'KOR' ? 'HICE OpenApp 커뮤니티 데이 서울 2026' : 'HICE OpenApp Community Day Seoul 2026',
                date: '2026.02.10 10:00 (KST)',
                type: 'Offline',
                location: 'Seoul COEX',
            },
            {
                id: 3,
                status: 'Past',
                title: lang === 'KOR' ? '차세대 프라이버시 세미나: E2EE 실무 적용 사례' : 'Next-Gen Privacy Seminar: E2EE Practical Cases',
                date: '2025.11.15 15:00 (KST)',
                type: 'Webinar',
                location: 'VOD Available',
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
                        {t.events.map((evt, idx) => (
                            <AnimatedContainer key={evt.id} animationType="fadeUp" delay={idx * 0.1}>
                                <div className={`p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-1 h-full flex flex-col group ${cardBgClass}`}>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${evt.status === 'Upcoming' ? (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700') : (isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-200 text-gray-500')}`}>
                                            {evt.status}
                                        </span>
                                        {evt.type === 'Webinar' ? <Video size={20} className={isDarkMode ? 'text-zinc-500' : 'text-gray-400'} /> : <MapPin size={20} className={isDarkMode ? 'text-zinc-500' : 'text-gray-400'} />}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-blue-500 transition-colors">
                                        {evt.title}
                                    </h3>

                                    <div className="space-y-2 mt-auto">
                                        <p className={`text-sm font-medium flex items-center gap-2 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                                            <Calendar size={16} className="opacity-70" /> {evt.date}
                                        </p>
                                        <p className={`text-sm font-medium flex items-center gap-2 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                                            {evt.type === 'Webinar' ? <Video size={16} className="opacity-70" /> : <MapPin size={16} className="opacity-70" />} {evt.location}
                                        </p>
                                    </div>

                                    <button className={`mt-8 w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${evt.status === 'Upcoming' ? (isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-600 text-white hover:bg-blue-700') : (isDarkMode ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')}`}>
                                        {evt.status === 'Upcoming' ? (lang === 'KOR' ? '사전 등록하기' : 'Pre-Register') : (lang === 'KOR' ? '자료/다시보기 확인' : 'View Materials/VOD')}
                                        <ArrowRight size={16} />
                                    </button>
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
