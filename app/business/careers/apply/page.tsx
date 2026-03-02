'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

export default function CareersApplyPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-gray-200 shadow-xl';
    const inputBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white focus:border-purple-500' : 'bg-gray-50 border-gray-200 text-black focus:border-purple-500';

    const t = {
        title: lang === 'KOR' ? '빠른 지원하기' : 'Quick Apply',
        subtitle: lang === 'KOR' ? '복잡한 이력서 폼 대신, 여러분을 가장 잘 보여줄 수 있는 자료 하나면 충분합니다.' : 'Instead of complex resume forms, one document that best shows you is enough.',
        badge: lang === 'KOR' ? '채용' : 'Careers',
        formLabel: {
            name: lang === 'KOR' ? '이름' : 'Name',
            email: lang === 'KOR' ? '이메일 주소' : 'Email Address',
            role: lang === 'KOR' ? '지원 직무' : 'Applying For',
            portfolio: lang === 'KOR' ? '포트폴리오 / GitHub / LinkedIn 링크' : 'Portfolio / GitHub / LinkedIn Link',
            message: lang === 'KOR' ? '간단한 자기소개 (선택)' : 'Short Intro (Optional)',
            submit: lang === 'KOR' ? '지원 완료하기' : 'Submit Application'
        }
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

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

                <section className="max-w-[800px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="">

                        {isSubmitted ? (
                            <div className={`p-12 rounded-[2.5rem] border flex flex-col items-center text-center ${cardBgClass}`}>
                                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-extrabold mb-4">
                                    {lang === 'KOR' ? '지원이 완료되었습니다!' : 'Application Submitted!'}
                                </h3>
                                <p className={`text-lg mb-8 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                                    {lang === 'KOR' ? '지원해주셔서 감사합니다. 심사 후 영업일 기준 3일 이내에 기재해주신 이메일로 결과를 안내해 드리겠습니다.' : 'Thank you for applying. We will notify you of the result via email within 3 business days after review.'}
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className={`px-8 py-4 rounded-xl font-bold transition-colors ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                                >
                                    {lang === 'KOR' ? '다른 직무 추가 지원하기' : 'Apply for another role'}
                                </button>
                            </div>
                        ) : (
                            <form
                                className={`p-8 md:p-12 rounded-[2.5rem] border ${cardBgClass}`}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setIsSubmitted(true);
                                }}
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                            {t.formLabel.name} <span className="text-red-500">*</span>
                                        </label>
                                        <input required type="text" className={`w-full p-4 rounded-xl border outline-none font-medium transition-colors ${inputBgClass}`} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                            {t.formLabel.email} <span className="text-red-500">*</span>
                                        </label>
                                        <input required type="email" className={`w-full p-4 rounded-xl border outline-none font-medium transition-colors ${inputBgClass}`} />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                        {t.formLabel.role} <span className="text-red-500">*</span>
                                    </label>
                                    <select required className={`w-full p-4 rounded-xl border outline-none appearance-none font-medium transition-colors cursor-pointer ${inputBgClass}`}>
                                        <option value="" disabled selected>{lang === 'KOR' ? '지원할 직무를 선택해주세요' : 'Select a role'}</option>
                                        <option value="eng">Senior Software Engineer, Core Foundation</option>
                                        <option value="res">AI Researcher (Reasoning & Alignment)</option>
                                        <option value="des">Product Designer, Planet Ecosystem</option>
                                        <option value="sec">Security Operations Center Analyst</option>
                                        <option value="biz">Global Partnership Manager</option>
                                        <option value="open">인재풀 등록 (Open Application)</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                        {t.formLabel.portfolio}
                                    </label>
                                    <input type="url" placeholder="https://" className={`w-full p-4 rounded-xl border outline-none font-medium transition-colors mb-4 ${inputBgClass}`} />

                                    <div className={`p-8 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center transition-colors cursor-pointer ${isDarkMode ? 'border-zinc-800 hover:border-purple-500 bg-zinc-900/50' : 'border-gray-200 hover:border-purple-500 bg-gray-50'}`}>
                                        <UploadCloud size={32} className={`mb-4 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`} />
                                        <p className="font-bold mb-1">{lang === 'KOR' ? '이력서 파일 업로드 (PDF)' : 'Upload Resume File (PDF)'}</p>
                                        <p className={`text-sm ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>Click to browse or drag and drop</p>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <label className="block text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                                        {t.formLabel.message}
                                    </label>
                                    <textarea rows={4} className={`w-full p-4 rounded-xl border outline-none font-medium resize-none transition-colors ${inputBgClass}`} />
                                </div>

                                <button type="submit" className={`w-full py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 ${isDarkMode ? 'bg-purple-500 text-white hover:bg-purple-400' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                                    {t.formLabel.submit}
                                </button>
                            </form>
                        )}

                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
