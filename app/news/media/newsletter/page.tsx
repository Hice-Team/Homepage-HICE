'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function MediaNewsletterPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-xl';
    const inputBgClass = isDarkMode ? 'bg-zinc-950 border-zinc-800 text-white focus:border-blue-500' : 'bg-gray-50 border-gray-200 text-black focus:border-blue-500';

    const t = {
        title: lang === 'KOR' ? '뉴스레터 구독' : 'Newsletter Subscription',
        subtitle: lang === 'KOR' ? 'HICE가 바라보는 미래 기술 트렌드와 독점적인 인사이트를 매월 이메일로 받아보세요.' : 'Receive monthly emails with future tech trends and exclusive insights seen by HICE.',
        badge: lang === 'KOR' ? '미디어' : 'Media',
    };

    const [isSubscribed, setIsSubscribed] = useState(false);

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

                <section className="max-w-[800px] mx-auto px-6 md:px-12 py-10 text-center">
                    <AnimatedContainer animationType="fadeUp">

                        {isSubscribed ? (
                            <div className={`p-16 rounded-[3rem] border flex flex-col items-center ${cardBgClass}`}>
                                <div className="w-24 h-24 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mb-8">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                                    {lang === 'KOR' ? '구독이 완료되었습니다!' : 'Subscription Confirmed!'}
                                </h3>
                                <p className={`text-xl mb-8 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                    {lang === 'KOR' ? '환영합니다. 다음 달 첫 번째 인사이트 레터를 기대해주세요.' : 'Welcome. Look forward to the first insight letter next month.'}
                                </p>
                                <button
                                    onClick={() => setIsSubscribed(false)}
                                    className={`px-8 py-4 rounded-full font-bold transition-colors ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}
                                >
                                    {lang === 'KOR' ? '돌아가기' : 'Go Back'}
                                </button>
                            </div>
                        ) : (
                            <div className={`p-10 md:p-16 rounded-[3rem] border relative overflow-hidden ${cardBgClass}`}>
                                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-all duration-700 ${isDarkMode ? 'bg-blue-600/10' : 'bg-blue-100'}`} />

                                <Mail size={48} className={`mx-auto mb-8 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`} />
                                <h3 className="text-3xl font-extrabold mb-4 relative z-10">Stay In The Loop</h3>
                                <p className={`text-lg mb-10 relative z-10 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                    {lang === 'KOR' ? '스팸 메일은 보내지 않습니다. 언제든지 구독을 취소할 수 있습니다.' : 'No spam. You can unsubscribe at any time.'}
                                </p>

                                <form
                                    className="flex flex-col sm:flex-row gap-4 relative z-10 max-w-lg mx-auto"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setIsSubscribed(true);
                                    }}
                                >
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        className={`flex-1 p-5 rounded-2xl border outline-none font-medium transition-colors ${inputBgClass}`}
                                    />
                                    <button
                                        type="submit"
                                        className={`px-8 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 ${isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                    >
                                        {lang === 'KOR' ? '구독하기' : 'Subscribe'}
                                    </button>
                                </form>
                            </div>
                        )}

                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
