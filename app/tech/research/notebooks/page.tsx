'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Terminal, Database, PlayCircle, Share2 } from 'lucide-react';

export default function NotebooksPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'HICE Notebooks' : 'HICE Notebooks',
        subtitle: lang === 'KOR' ? '데이터 사이언티스트와 연구자들을 위한 완벽한 클라우드 연구 환경' : 'The perfect cloud research environment for data scientists and researchers.',
        badge: lang === 'KOR' ? '연구' : 'Research',
        featuresTitle: lang === 'KOR' ? '브라우저에서 시작하는 무한한 컴퓨팅' : 'Infinite Computing Starting from the Browser',
        features: [
            {
                icon: Terminal,
                title: lang === 'KOR' ? '설치 없는 코드 실행' : 'Zero-Setup Execution',
                desc: lang === 'KOR' ? '복잡한 환경 설정이나 패키지 설치 없이, 웹 브라우저만 있으면 즉시 Python 코드를 작성하고 실행할 수 있습니다.' : 'Write and execute Python code instantly with just a web browser, without complex environment setups or package installations.'
            },
            {
                icon: Database,
                title: lang === 'KOR' ? '강력한 GPU 세션 지원' : 'Powerful GPU Sessions',
                desc: lang === 'KOR' ? '대규모 데이터 분석과 딥러닝 모델 학습을 위해 고성능 클라우드 GPU(NVIDIA A100 등)를 클릭 한 번으로 할당받습니다.' : 'Allocate high-performance cloud GPUs (like NVIDIA A100) with a single click for large-scale data analysis and deep learning model training.'
            },
            {
                icon: Share2,
                title: lang === 'KOR' ? '실시간 협업 및 공유' : 'Real-time Collaboration',
                desc: lang === 'KOR' ? '작성한 노트북(Notebook)을 동료와 즉시 공유하고, 구글 문서처럼 실시간으로 코드를 공동 편집하며 피드백을 주고받습니다.' : 'Share drafted notebooks instantly with colleagues, co-edit code in real-time like Google Docs, and exchange feedback.'
            },
            {
                icon: PlayCircle,
                title: lang === 'KOR' ? '풍부한 오픈소스 풀' : 'Rich Open-Source Pool',
                desc: lang === 'KOR' ? 'HICE 생태계에 공개된 수만 개의 유용한 노트북 템플릿을 복사하여 즉시 내 연구에 적용할 수 있습니다.' : 'Copy and instantly apply tens of thousands of useful notebook templates published in the HICE ecosystem to your research.'
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

                {/* Browser Mockup Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="w-full rounded-[2rem] border overflow-hidden relative group bg-zinc-900 border-zinc-800 shadow-2xl">
                        {/* Browser Header */}
                        <div className="h-12 border-b border-zinc-800 bg-zinc-950 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="bg-zinc-800/50 text-zinc-400 text-xs py-1 px-4 rounded-md font-mono">
                                    research_analysis_v2.ipynb - HICE Notebooks
                                </div>
                            </div>
                        </div>
                        {/* IDE Content Mockup */}
                        <div className="flex text-left font-mono text-sm md:text-base">
                            {/* Sidebar */}
                            <div className="hidden md:block w-64 border-r border-zinc-800 p-4 text-zinc-500 bg-zinc-950/50">
                                <div className="mb-2 uppercase text-xs font-bold text-zinc-600 tracking-widest">Files</div>
                                <div className="space-y-2">
                                    <div className="text-zinc-300">📁 dataset/</div>
                                    <div className="pl-4 text-xs">📄 train.csv</div>
                                    <div className="text-blue-400">📄 analysis.ipynb</div>
                                    <div className="text-zinc-300">📄 requirements.txt</div>
                                </div>
                            </div>
                            {/* Code Area */}
                            <div className="flex-1 p-6 md:p-8 bg-[#1e1e1e] text-zinc-300 overflow-x-auto min-h-[400px]">
                                <div className="mb-6 flex gap-4">
                                    <span className="text-blue-500 font-bold">[1]</span>
                                    <div className="flex-1">
                                        <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd<br />
                                        <span className="text-purple-400">import</span> torch<br />
                                        <span className="text-green-400"># Load the massive dataset</span><br />
                                        df = pd.read_csv(<span className="text-orange-300">'dataset/train.csv'</span>)<br />
                                        df.head()
                                    </div>
                                </div>
                                <div className="mb-6 flex gap-4 bg-white/5 p-4 rounded-lg">
                                    <span className="text-orange-500 font-bold">Out</span>
                                    <div className="flex-1 text-sm font-sans">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b border-zinc-700">
                                                    <th className="py-2">id</th>
                                                    <th>text</th>
                                                    <th>label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2">0</td>
                                                    <td>"This is an amazing specific example..."</td>
                                                    <td>1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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
