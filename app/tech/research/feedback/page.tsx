'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { MessageSquare, ThumbsUp, HelpCircle } from 'lucide-react';

export default function FeedbackPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const inputBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white focus:border-zinc-500' : 'bg-white border-gray-200 text-black focus:border-black';

    const t = {
        title: lang === 'KOR' ? '연구 피드백' : 'Research Feedback',
        subtitle: lang === 'KOR' ? '초기 연구 모델과 프로토타입에 대한 여러분의 소중한 의견을 들려주세요.' : 'Share your valuable thoughts on our early research models and prototypes.',
        badge: lang === 'KOR' ? '커뮤니티' : 'Community',
        formLabel: {
            category: lang === 'KOR' ? '피드백 유형' : 'Category',
            model: lang === 'KOR' ? '관련 대상' : 'Related Subject',
            message: lang === 'KOR' ? '상세 내용' : 'Details',
            submit: lang === 'KOR' ? '피드백 제출하기' : 'Submit Feedback'
        },
        types: [
            { id: 'bug', icon: HelpCircle, label: lang === 'KOR' ? '오류 제보' : 'Bug Report' },
            { id: 'idea', icon: ThumbsUp, label: lang === 'KOR' ? '아이디어 제안' : 'Idea Suggestion' },
            { id: 'other', icon: MessageSquare, label: lang === 'KOR' ? '기타 의견' : 'Other' }
        ]
    };

    const [activeType, setActiveType] = useState('bug');

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

                <section className="max-w-3xl mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className={`p-8 md:p-12 rounded-[2.5rem] border ${isDarkMode ? 'bg-zinc-950/50 border-zinc-800/80 shadow-2xl' : 'bg-white border-gray-200 shadow-xl'}`}>

                        <div className="mb-10">
                            <label className="block text-sm font-bold tracking-widest uppercase mb-4 opacity-70">
                                {t.formLabel.category}
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {t.types.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setActiveType(type.id)}
                                        className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 ${activeType === type.id
                                                ? (isDarkMode ? 'border-orange-500 bg-orange-500/10 text-orange-400' : 'border-orange-500 bg-orange-50 text-orange-600')
                                                : (isDarkMode ? 'border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50')
                                            }`}
                                    >
                                        <type.icon size={24} />
                                        <span className="font-bold">{type.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-bold tracking-widest uppercase mb-4 opacity-70">
                                {t.formLabel.model}
                            </label>
                            <select className={`w-full p-4 rounded-xl border outline-none appearance-none font-medium transition-colors ${inputBgClass}`}>
                                <option value="ai">HICE Foundation AI Model (v1.2.x)</option>
                                <option value="notebook">HICE Notebooks Beta</option>
                                <option value="exokrus">ExoKRUS Simulation Logic</option>
                                <option value="general">일반 웹사이트 오류 / General Website Feedback</option>
                            </select>
                        </div>

                        <div className="mb-10">
                            <label className="block text-sm font-bold tracking-widest uppercase mb-4 opacity-70">
                                {t.formLabel.message}
                            </label>
                            <textarea
                                rows={6}
                                className={`w-full p-5 rounded-2xl border outline-none font-medium resize-none transition-colors ${inputBgClass}`}
                                placeholder={lang === 'KOR' ? '자유롭게 의견을 적어주세요.' : 'Please write your thoughts freely.'}
                            />
                        </div>

                        <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 ${isDarkMode ? 'bg-orange-500 text-black hover:bg-orange-400' : 'bg-orange-500 text-white hover:bg-orange-600'}`}>
                            {t.formLabel.submit}
                        </button>
                        <p className="text-center text-xs mt-6 opacity-50 font-medium">
                            {lang === 'KOR' ? '제출하신 의견은 담당 연구팀으로 직접 전달됩니다.' : 'Your feedback will be delivered directly to the responsible research team.'}
                        </p>

                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
