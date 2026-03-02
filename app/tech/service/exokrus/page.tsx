'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Bot, Cpu, Network, AudioWaveform } from 'lucide-react';

export default function ExokrusPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'ExoKRUS' : 'ExoKRUS',
        subtitle: lang === 'KOR' ? '인간의 물리적 한계를 넘어서는, 차세대 AI 로보틱스 제어 두뇌' : 'The next-generation AI robotics control brain that surpasses human physical limitations.',
        badge: lang === 'KOR' ? '서비스' : 'Service',
        featuresTitle: lang === 'KOR' ? '미래 산업의 새로운 원동력' : 'A New Driving Force for Future Industry',
        features: [
            {
                icon: Bot,
                title: lang === 'KOR' ? '자율 주행 및 제어' : 'Autonomous Navigation & Control',
                desc: lang === 'KOR' ? '복잡한 산업 현장부터 일상 공간까지, 시각 정보와 라이다(LiDAR) 데이터를 실시간 융합하여 안전하고 완벽한 자율 주행을 구현합니다.' : 'From complex industrial sites to everyday spaces, it achieves safe and perfect autonomous driving by fusing visual information and LiDAR data in real-time.'
            },
            {
                icon: AudioWaveform,
                title: lang === 'KOR' ? '사운드 인텔리전스' : 'Sound Intelligence',
                desc: lang === 'KOR' ? '미세한 기계 결함음부터 사람의 감정이 섞인 음성 명령까지, 소리를 통한 고도의 상황 인지 및 대화가 가능합니다.' : 'From minute machine defect sounds to human voice commands mixed with emotion, advanced situational awareness and conversation through sound are possible.'
            },
            {
                icon: Network,
                title: lang === 'KOR' ? '군집 로봇 협업 네트워크' : 'Swarm Robot Collaboration Network',
                desc: lang === 'KOR' ? '여러 대의 로봇이 ExoKRUS 네트워크를 통해 실시간으로 데이터를 공유하고, 최적의 효율로 작업을 분배하여 수행합니다.' : 'Multiple robots share data in real-time through the ExoKRUS network, distributing and performing tasks with optimal efficiency.'
            },
            {
                icon: Cpu,
                title: lang === 'KOR' ? '엣지 AI 최적화' : 'Edge AI Optimization',
                desc: lang === 'KOR' ? '중앙 서버나 클라우드 의존도를 최소화하고 디바이스 자체에서 즉각적인 연산과 추론을 수행하는 온디바이스 AI 칩셋 기술이 집약되어 있습니다.' : 'Minimizes dependency on central servers or clouds, integrating on-device AI chipset technology that performs immediate computation and inference on the device itself.'
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
                    colorTheme="orange"
                />

                {/* Feature Display */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className={`rounded-[3rem] border overflow-hidden relative group ${cardBgClass}`}>
                        <div className={`absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none transition-all duration-700 ${isDarkMode ? 'bg-orange-600/5' : ''}`} />

                        <div className="flex flex-col lg:flex-row relative z-10">
                            <div className="lg:w-1/2 p-10 md:p-20 flex flex-col justify-center">
                                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                                    {lang === 'KOR' ? '강력한 모터와 부드러운 인지 능력의 결합' : 'A blend of powerful motors and soft cognitive abilities'}
                                </h3>
                                <p className={`text-xl leading-relaxed mb-10 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                    {lang === 'KOR' ? 'HICE 내부의 시뮬레이션 환경에서 수백만 번의 강화학습을 거친 ExoKRUS 모델은 가장 가혹한 환경에서도 인간의 편의를 위해 작동합니다.' : 'Through millions of reinforcement learning iterations in HICE\'s internal simulation environment, the ExoKRUS model operates for human convenience even in the harshest environments.'}
                                </p>
                            </div>

                            <div className={`lg:w-1/2 bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center p-10 min-h-[400px]`}>
                                <div className="text-center font-bold text-gray-400 dark:text-zinc-500 flex flex-col items-center gap-4">
                                    <Bot size={80} strokeWidth={1} />
                                    <span>{lang === 'KOR' ? '로보틱스 3D 렌더링 뷰어' : 'Robotics 3D Rendering Viewer'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.featuresTitle}</h2>
                    </div>

                    <AnimatedContainer animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.features.map((item, idx) => (
                            <div key={idx} className={`p-8 md:p-10 rounded-[2rem] border transition-all hover:-translate-y-2 group ${cardBgClass}`}>
                                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 mb-8 transition-transform group-hover:scale-110">
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
