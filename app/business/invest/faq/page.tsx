'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function InvestFaqPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? '투자자 FAQ' : 'Investor FAQ',
        subtitle: lang === 'KOR' ? '자주 묻는 질문에 대한 답변입니다.' : 'Answers to frequently asked questions.',
        badge: lang === 'KOR' ? '투자' : 'Investment',
        faqs: [
            {
                q: lang === 'KOR' ? 'HICE의 주식은 어디에 상장되어 있나요?' : 'Where are HICE shares listed?',
                a: lang === 'KOR' ? '현재 HICE는 비상장 상태이며, 기관 투자자 및 전략적 파트너들과 프라이빗 라운드를 통해 자금을 조달하고 있습니다. 향후 IPO 계획은 확정 시 공식 채널을 통해 발표할 예정입니다.' : 'Currently, HICE is a privately held company, raising funds through private rounds with institutional investors and strategic partners. Future IPO plans will be announced via official channels when finalized.'
            },
            {
                q: lang === 'KOR' ? '주요 수익 모델(BM)은 무엇인가요?' : 'What is the main Business Model (BM)?',
                a: lang === 'KOR' ? 'B2C 영역에서는 Planet 메타버스 생태계 내 프리미엄 기능 구독 및 크리에이터 스토어 수수료를, B2B 영역에서는 Croffle E2EE 메신저 엔터프라이즈 라이선스와 ExoKRUS 로보틱스 소프트웨어 구독 매출을 핵심으로 합니다.' : 'In B2C, core revenues come from premium feature subscriptions in the Planet metaverse ecosystem and creator store fees. In B2B, it\'s based on enterprise licenses for the Croffle E2EE messenger and ExoKRUS robotics software subscriptions.'
            },
            {
                q: lang === 'KOR' ? 'IR 미팅을 요청할 수 있나요?' : 'Can I request an IR meeting?',
                a: lang === 'KOR' ? '네, 기관 투자자 및 전략적 파트너의 경우 [파트너십 문의] 페이지 내 IR 항목을 통해 미팅을 요청하실 수 있습니다. 담당 부서 검토 후 순차적으로 회신 드립니다.' : 'Yes, institutional investors and strategic partners can request a meeting through the IR section on the [Partnership Inquiries] page. We will reply sequentially after review by the relevant department.'
            },
            {
                q: lang === 'KOR' ? '재무 제표 및 감사 보고서는 어디서 볼 수 있나요?' : 'Where can I find financial statements and audit reports?',
                a: lang === 'KOR' ? '주요 재무 실적은 매 분기 [투자자 업데이트] 페이지를 통해 요약본으로 제공됩니다. 상세 감사 보고서는 당사 주주 대상으로 별도 제공되며, 향후 DART(전자공시시스템) 상장 준비 단계에서 순차적으로 공개될 예정입니다.' : 'Key financial results are provided as summaries every quarter via the [Investor Updates] page. Detailed audit reports are provided separately to our shareholders and will be gradually released during the IPO preparation phase.'
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
                    colorTheme="blue"
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
