'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { BrainCircuit, BookOpen, Layers, LineChart } from 'lucide-react';

export default function AiResearchPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'HICE AI' : 'HICE AI Research',
        subtitle: lang === 'KOR' ? '가장 진보된 형태의 범용 인공지능(AGI)을 향한 HICE의 끝없는 연구와 실험.' : 'HICE\'s endless research and experiments towards the most advanced form of Artificial General Intelligence (AGI).',
        badge: lang === 'KOR' ? '연구' : 'Research',
        labsTitle: lang === 'KOR' ? '핵심 연구 분야' : 'Core Research Areas',
        labs: [
            {
                icon: BrainCircuit,
                title: lang === 'KOR' ? 'Foundation Models' : 'Foundation Models',
                desc: lang === 'KOR' ? '압도적인 파라미터 기반의 초거대 언어 모델(LLM)과 다양한 감각 데이터를 동시에 이해하는 멀티모달 모델을 자체 개발합니다.' : 'Developing proprietary massive Large Language Models (LLM) and multimodal models that simultaneously understand various sensory data.'
            },
            {
                icon: BookOpen,
                title: lang === 'KOR' ? 'Reasoning & Alignment' : 'Reasoning & Alignment',
                desc: lang === 'KOR' ? 'AI가 단순히 확률적으로 단어를 조합하는 것을 넘어, 논리적으로 추론하고 인류의 보편적 가치에 정렬(Alignment)되도록 훈련합니다.' : 'Training AI to logically reason and align with universal human values, moving beyond simple probabilistic word combination.'
            },
            {
                icon: Layers,
                title: lang === 'KOR' ? 'On-Device AI' : 'On-Device AI Optimization',
                desc: lang === 'KOR' ? '막대한 연산 자원이 필요한 모델을 모바일이나 소형 기기에서도 빠르고 전력 소모 없이 구동할 수 있도록 경량화 파이프라인을 구축합니다.' : 'Building lightweight pipelines to run computationally intensive models on mobile or small devices quickly and without power drain.'
            },
            {
                icon: LineChart,
                title: lang === 'KOR' ? 'Safety & Evaluation' : 'Safety & Evaluation',
                desc: lang === 'KOR' ? '모델이 생성하는 환각(Hallucination) 현상을 억제하고, 유해한 결과물을 필터링하기 위한 독자적인 레드팀(Red Team) 프레임워크를 운영합니다.' : 'Operating a proprietary Red Team framework to suppress model hallucinations and filter harmful outputs.'
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

                {/* Highlight Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className={`p-10 md:p-16 rounded-[3rem] border relative overflow-hidden flex flex-col items-center text-center ${cardBgClass}`}>
                        <div className={`absolute -top-[50%] -left-[10%] w-[80vw] h-[80vw] rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${isDarkMode ? 'bg-blue-900/10 mix-blend-screen' : 'bg-blue-50 mix-blend-multiply'}`} />

                        <div className="relative z-10 max-w-4xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                                <span className="font-bold text-sm tracking-widest uppercase opacity-70">Live Experiment : ExoKRUS Core v2</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-mono">
                                &gt; INITIALIZING SYNAPSE_NET... [OK]<br />
                                &gt; LOADING ALIGNMENT_WEIGHTS... [OK]<br />
                                &gt; WAITING FOR INPUT_STREAM...
                            </h3>
                            <p className={`text-sm mt-8 opacity-60`}>
                                {lang === 'KOR' ? '이 화면은 HICE 내부 연구소의 실시간 모델 로그 일부를 추상화한 것입니다.' : 'This screen abstracts a portion of real-time model logs from the HICE internal lab.'}
                            </p>
                        </div>
                    </AnimatedContainer>
                </section>

                {/* Research Labs Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.labsTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {t.labs.map((item, idx) => (
                            <div key={idx} className={`p-10 md:p-14 rounded-[2rem] border transition-all hover:-translate-y-2 group ${cardBgClass}`}>
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-8 transition-transform group-hover:rotate-[360deg] duration-700">
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
