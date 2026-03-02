'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Handshake, MapPin, Mail, Phone } from 'lucide-react';

export default function InvestPartnerPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';
    const inputBgClass = isDarkMode ? 'bg-zinc-950 border-zinc-800 text-white focus:border-zinc-500' : 'bg-gray-50 border-gray-200 text-black focus:border-black';

    const t = {
        title: lang === 'KOR' ? '파트너십 문의' : 'Partnership Inquiries',
        subtitle: lang === 'KOR' ? 'HICE 혁신 여정에 동참할 전략적 파트너와 투자자를 기다립니다.' : 'We welcome strategic partners and investors to join HICE\'s journey of innovation.',
        badge: lang === 'KOR' ? '투자' : 'Investment',
        contactTitle: lang === 'KOR' ? '글로벌 네트워크' : 'Global Network',
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

                <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row gap-16">
                    {/* Contact Form */}
                    <AnimatedContainer animationType="fadeIn" className={`lg:w-2/3 p-8 md:p-12 rounded-[2.5rem] border ${cardBgClass}`}>
                        <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-4">
                            <Handshake className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={32} />
                            {lang === 'KOR' ? '비즈니스 제안서 보내기' : 'Send Business Proposal'}
                        </h3>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                        {lang === 'KOR' ? '회사/기관명' : 'Company/Organization'}
                                    </label>
                                    <input type="text" className={`w-full p-4 rounded-xl border outline-none font-medium transition-colors ${inputBgClass}`} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                        {lang === 'KOR' ? '담당자 이름' : 'Contact Person'}
                                    </label>
                                    <input type="text" className={`w-full p-4 rounded-xl border outline-none font-medium transition-colors ${inputBgClass}`} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                        {lang === 'KOR' ? '이메일 주소' : 'Email Address'}
                                    </label>
                                    <input type="email" className={`w-full p-4 rounded-xl border outline-none font-medium transition-colors ${inputBgClass}`} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                        {lang === 'KOR' ? '연락처' : 'Phone Number'}
                                    </label>
                                    <input type="tel" className={`w-full p-4 rounded-xl border outline-none font-medium transition-colors ${inputBgClass}`} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                    {lang === 'KOR' ? '문의 분류' : 'Inquiry Type'}
                                </label>
                                <select className={`w-full p-4 rounded-xl border outline-none appearance-none font-medium transition-colors ${inputBgClass}`}>
                                    <option value="invest">{lang === 'KOR' ? '지분 투자 및 M&A' : 'Equity Investment & M&A'}</option>
                                    <option value="tech">{lang === 'KOR' ? '기술 제휴 및 라이선싱' : 'Tech Alliance & Licensing'}</option>
                                    <option value="service">{lang === 'KOR' ? '엔터프라이즈 솔루션 도입' : 'Enterprise Solution Inquiry'}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                    {lang === 'KOR' ? '제안 내용' : 'Proposal Details'}
                                </label>
                                <textarea rows={5} className={`w-full p-4 rounded-xl border outline-none font-medium resize-none transition-colors ${inputBgClass}`} />
                            </div>

                            <button type="submit" className={`w-full py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 ${isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                                {lang === 'KOR' ? '제안서 제출하기' : 'Submit Proposal'}
                            </button>
                        </form>
                    </AnimatedContainer>

                    {/* Contact Info */}
                    <AnimatedContainer animationType="fadeIn" delay={0.2} className="lg:w-1/3 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{t.contactTitle}</h3>
                            <div className="space-y-6">

                                <div className={`p-6 rounded-2xl border ${cardBgClass}`}>
                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <MapPin size={20} className="text-blue-500" /> Seoul HQ
                                    </h4>
                                    <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                        {lang === 'KOR' ? '서울특별시 강남구 테균로 123 HICE 타워 15층' : '15F HICE Tower, 123 Teheran-ro, Gangnam-gu, Seoul, S.Korea'}
                                    </p>
                                    <div className="space-y-2 text-sm font-medium">
                                        <p className="flex items-center gap-3"><Mail size={16} className="opacity-50" /> ir@hice.com</p>
                                        <p className="flex items-center gap-3"><Phone size={16} className="opacity-50" /> +82-2-1234-5678</p>
                                    </div>
                                </div>

                                <div className={`p-6 rounded-2xl border ${cardBgClass}`}>
                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <MapPin size={20} className="text-blue-500" /> Silicon Valley Office
                                    </h4>
                                    <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                        {lang === 'KOR' ? '미국 캘리포니아 주 팔로알토 유니버시티 애비뉴 456' : '456 University Ave, Palo Alto, CA, United States'}
                                    </p>
                                    <div className="space-y-2 text-sm font-medium">
                                        <p className="flex items-center gap-3"><Mail size={16} className="opacity-50" /> us.partner@hice.com</p>
                                        <p className="flex items-center gap-3"><Phone size={16} className="opacity-50" /> +1-650-123-4567</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </AnimatedContainer>

                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
