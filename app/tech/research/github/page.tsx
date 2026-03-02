'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Github, ExternalLink } from 'lucide-react';

export default function GithubPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'HICE on GitHub' : 'HICE on GitHub',
        subtitle: lang === 'KOR' ? '우리의 기술은 생태계와 함께 자랍니다. 오픈소스 생태계에 대한 우리의 기여를 확인하세요.' : 'Our technology grows with the ecosystem. Check out our contributions to the open-source community.',
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
                    colorTheme="blue"
                />

                <section className="max-w-4xl mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className={`p-10 md:p-16 rounded-[3rem] border flex flex-col items-center justify-center text-center ${cardBgClass}`}>
                        <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-8">
                            <Github size={48} className={isDarkMode ? 'text-white' : 'text-black'} />
                        </div>

                        <h2 className="text-3xl font-extrabold mb-6">
                            {lang === 'KOR' ? '공식 GitHub 조직으로 이동합니다' : 'Moving to official GitHub organization'}
                        </h2>
                        <p className={`text-lg mb-10 max-w-lg ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                            {lang === 'KOR' ? 'HICE OpenApp 프레임워크와 오픈소스 플러그인, 연구 스크립트들이 이곳에 공개됩니다.' : 'HICE OpenApp framework, open-source plugins, and research scripts are published here.'}
                        </p>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-zinc-800'}`}
                        >
                            Go to GitHub <ExternalLink size={20} />
                        </a>
                    </AnimatedContainer>
                </section>
            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
