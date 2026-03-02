'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { ExternalLink } from 'lucide-react';

export default function HuggingFacePage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'HICE on HuggingFace' : 'HICE on HuggingFace',
        subtitle: lang === 'KOR' ? '최신 AI 모델 저장소. 개방형 연구 환경을 지향하는 HICE의 모델들을 만나보세요.' : 'The latest AI model repository. Discover HICE\'s models aiming for an open research environment.',
        badge: lang === 'KOR' ? '연구' : 'Research',
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

                <section className="max-w-4xl mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className={`p-10 md:p-16 rounded-[3rem] border flex flex-col items-center justify-center text-center ${cardBgClass}`}>
                        <div className="w-24 h-24 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center mb-8">
                            <span className="text-4xl">🤗</span>
                        </div>

                        <h2 className="text-3xl font-extrabold mb-6">
                            {lang === 'KOR' ? '공식 HuggingFace 플랫폼으로 이동합니다' : 'Moving to official HuggingFace platform'}
                        </h2>
                        <p className={`text-lg mb-10 max-w-lg ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                            {lang === 'KOR' ? 'HICE Foundation 모델의 가중치(Weights)와 데이터셋, 추론 데모를 직접 확인하고 테스트할 수 있습니다.' : 'Check and test the weights, datasets, and inference demos of the HICE Foundation models directly.'}
                        </p>

                        <a
                            href="https://huggingface.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-zinc-800'}`}
                        >
                            Go to HuggingFace <ExternalLink size={20} />
                        </a>
                    </AnimatedContainer>
                </section>
            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
