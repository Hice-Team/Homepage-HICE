'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { ChevronDown } from 'lucide-react';

export default function CareersFaqPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '채용 FAQ' : 'Careers FAQ',
        subtitle: lang === 'KOR' ? '채용 과정에 대해 궁금하신 점을 확인해 보세요.' : 'Check out anything you\'re curious about regarding our hiring process.',
        badge: lang === 'KOR' ? '채용' : 'Careers',
        faqs: [
            {
                q: lang === 'KOR' ? '서류 전형 결과는 언제 알 수 있나요?' : 'When will I know the document screening results?',
                a: lang === 'KOR' ? '제출해주신 서류는 담당 부서에서 꼼꼼히 검토하며, 통상적으로 영업일 기준 3~5일 이내에 합격 및 불합격 여부와 관계없이 개별 이메일로 결과를 안내해 드립니다.' : 'The submitted documents are carefully reviewed by the relevant department, and we typically notify you of the results individually via email within 3-5 business days, regardless of passing or not.'
            },
            {
                q: lang === 'KOR' ? '동시에 여러 포지션에 지원할 수 있나요?' : 'Can I apply for multiple positions simultaneously?',
                a: lang === 'KOR' ? '네, 본인의 역량과 일치한다고 판단되는 포지션이라면 중복 지원이 가능합니다. 단, 가장 접합도가 높은 1~2개 직무에 집중하여 지원하시는 것을 권장합니다.' : 'Yes, you can apply for multiple positions if you believe they match your skills. However, we recommend focusing on 1-2 roles that are the best fit.'
            },
            {
                q: lang === 'KOR' ? '코딩 테스트나 사전 과제가 필수인가요?' : 'Are coding tests or assignments mandatory?',
                a: lang === 'KOR' ? '직군에 따라 다릅니다. 엔지니어 실무 직군의 경우 코딩 테스트가 포함될 수 있으며, 기획/디자인 직군의 경우 포트폴리오를 기반으로 한 별도의 사전 과제가 부여될 수 있습니다. 진행 시 면접관이 사전에 상세히 안내해 드립니다.' : 'It depends on the job category. For engineering roles, a coding test may be included, and for planning/design roles, a separate assignment based on your portfolio may be given. The interviewer will guide you in detail beforehand.'
            },
            {
                q: lang === 'KOR' ? '원격 근무(Remote Work)가 가능한가요?' : 'Is remote work possible?',
                a: lang === 'KOR' ? '네, HICE는 완전 자율 근무제를 채택하고 있어 본인이 원하는 장소에서 100% 원격으로 근무가 가능합니다. 단, 일부 보안 취급이나 기기 관리가 필수적인 오프라인 기반 직무는 협의가 필요할 수 있습니다.' : 'Yes, HICE adopts a fully autonomous work system, so 100% remote work from a location of your choice is possible. However, some offline-based roles requiring security handling or physical device management may require negotiation.'
            }
        ]
    };

    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16">
                    <AnimatedContainer animationType="fadeUp" className="space-y-4">
                        {t.faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl border overflow-hidden transition-colors ${cardBgClass}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none"
                                >
                                    <h3 className="text-xl font-bold pr-8">{faq.q}</h3>
                                    <div className={`shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                        <ChevronDown size={24} className={isDarkMode ? 'text-zinc-500' : 'text-gray-400'} />
                                    </div>
                                </button>

                                <div
                                    className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className={`pt-4 border-t ${isDarkMode ? 'border-zinc-800 text-zinc-400' : 'border-gray-100 text-gray-500'} text-lg leading-relaxed`}>
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AnimatedContainer>
                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
