'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Microscope, Activity, Beaker } from 'lucide-react';

export default function NextPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'Next (HICE)' : 'Next (HICE)',
        subtitle: lang === 'KOR' ? '우리가 정의하는 다음 세대의 기술 혁신' : 'The next generation of technological innovation as defined by us.',
        badge: lang === 'KOR' ? '연구' : 'Research',
        labsTitle: lang === 'KOR' ? '진행 중인 선행 연구' : 'Ongoing Advanced Research',
        labs: [
            {
                icon: Microscope,
                title: lang === 'KOR' ? '양자-AI 결합 (Quantum-AI)' : 'Quantum-AI Integration',
                desc: lang === 'KOR' ? '기존 폰 노이만 아키텍처의 한계를 돌파하기 위해, 양자 컴퓨팅 알고리즘을 AI 추론 파이프라인에 이식하는 기초 연구를 진행하고 있습니다.' : 'To break through the limits of the von Neumann architecture, we are conducting basic research on transplanting quantum computing algorithms into AI inference pipelines.'
            },
            {
                icon: Activity,
                title: lang === 'KOR' ? '뇌-컴퓨터 인터페이스 (BCI)' : 'Brain-Computer Interface',
                desc: lang === 'KOR' ? '비침습적 센서를 통해 사용자의 의도를 실시간으로 파악하여 가상 공간과 로보틱스(ExoKRUS)를 제어하는 기술을 실증합니다.' : 'Demonstrating technology that controls virtual spaces and robotics (ExoKRUS) by grasping user intentions in real-time through non-invasive sensors.'
            },
            {
                icon: Beaker,
                title: lang === 'KOR' ? '합성 데이터 생성기' : 'Synthetic Data Generator',
                desc: lang === 'KOR' ? '개인정보 침해 없이 극도로 정교한 시뮬레이션 데이터를 무한정 생성하여 AI 모델 학습의 병목을 해결합니다.' : 'Solves the bottleneck of AI model training by infinitely generating extremely precise simulation data without privacy infringement.'
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

                {/* Concept Art Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] border overflow-hidden relative group">
                        <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-40 dark:opacity-20 transition-transform duration-1000 group-hover:scale-105`} />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent`} />

                        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
                            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md text-white border border-white/20 mb-4 inline-block">
                                Concept View
                            </span>
                            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mix-blend-overlay drop-shadow-lg">
                                Beyond Algorithms <br /> Into Reality
                            </h3>
                        </div>
                    </AnimatedContainer>
                </section>

                {/* Labs Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.labsTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.labs.map((item, idx) => (
                            <div key={idx} className={`p-10 md:p-14 rounded-[2.5rem] border transition-all hover:-translate-y-2 group flex flex-col items-center text-center ${cardBgClass}`}>
                                <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 mb-8 transition-transform group-hover:scale-110">
                                    <item.icon size={40} strokeWidth={1.5} />
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
