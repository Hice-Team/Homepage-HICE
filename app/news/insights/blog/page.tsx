'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { ArrowRight } from 'lucide-react';

export default function InsightsBlogPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '기술 블로그' : 'Tech Blog',
        subtitle: lang === 'KOR' ? 'HICE 엔지니어와 디자이너들의 생생한 개발기와 고민을 공유합니다.' : 'Sharing the vivid development stories and thoughts of HICE engineers and designers.',
        badge: lang === 'KOR' ? '인사이트' : 'Insights',
        categories: ['All', 'Engineering', 'Design', 'AI Research', 'Culture'],
        posts: [
            {
                id: 1,
                category: 'Engineering',
                title: lang === 'KOR' ? 'OpenApp 엔진 렌더링 최적화: 10배 빨라진 V-DOM 구현기' : 'OpenApp Engine Render Optimization: Implementing a 10x Faster V-DOM',
                desc: lang === 'KOR' ? '기존 React의 한계를 극복하기 위해 Rust WebAssembly를 도입하여 가상 DOM 비교 알고리즘을 완전히 재작성한 경험을 공유합니다.' : 'Sharing our experience of fully rewriting the Virtual DOM diffing algorithm using Rust WebAssembly to overcome existing React limits.',
                author: 'John Doe, Core Engine Team',
                date: '2026.02.20'
            },
            {
                id: 2,
                category: 'AI Research',
                title: lang === 'KOR' ? '환각(Hallucination) 제어를 위한 Dual-Agent 아키텍처' : 'Dual-Agent Architecture for Hallucination Control',
                desc: lang === 'KOR' ? '단일 LLM의 불확실성을 교차 검증하는 두 개의 개별 에이전트를 구성하여, B2B 도메인에서의 답변 정확도를 99.9%로 끌어올린 실험 결과입니다.' : 'Experimental results of reaching 99.9% answer accuracy in B2B domains by composing two separate agents that cross-verify single LLM uncertainties.',
                author: 'Jane Smith, Research Lab',
                date: '2026.01.15'
            },
            {
                id: 3,
                category: 'Design',
                title: lang === 'KOR' ? 'Planet 생태계의 3D 공간 UI/UX 디자인 가이드라인' : 'Planet Ecosystem 3D Spatial UI/UX Design Guidelines',
                desc: lang === 'KOR' ? '평면 모니터를 넘어선 메타버스 공간에서 정보의 위계를 설정하고 피로도를 낮추기 위한 HICE 디자인 팀의 철학을 담았습니다.' : 'Contains the philosophy of the HICE design team for setting info hierarchy and reducing fatigue in metaverse spaces beyond flat monitors.',
                author: 'Alex Kim, Product Design',
                date: '2025.12.05'
            }
        ]
    };

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = t.posts.filter(
        post => activeCategory === 'All' || post.category === activeCategory
    );

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

                <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-10">

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {t.categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-colors ${activeCategory === cat
                                        ? (isDarkMode ? 'bg-orange-500 text-black' : 'bg-orange-600 text-white')
                                        : (isDarkMode ? 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white' : 'bg-white border border-gray-200 text-gray-500 hover:text-black shadow-sm')
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredPosts.map((post, idx) => (
                            <AnimatedContainer key={post.id} animationType="fadeUp" delay={idx * 0.1}>
                                <a href="#" className={`block h-full p-8 rounded-[2rem] border transition-all hover:-translate-y-2 group flex flex-col ${cardBgClass}`}>
                                    <div className="mb-6 h-48 rounded-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')` }} />

                                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block w-max mb-4 ${isDarkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-50 text-orange-600'}`}>
                                        {post.category}
                                    </span>

                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                        {post.desc}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800 flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <span className={`font-medium text-sm ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>{post.author}</span>
                                            <span className={`text-xs ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>{post.date}</span>
                                        </div>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isDarkMode ? 'bg-zinc-800 text-zinc-400 group-hover:bg-orange-500 group-hover:text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-orange-500 group-hover:text-white'}`}>
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </a>
                            </AnimatedContainer>
                        ))}
                    </div>

                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
