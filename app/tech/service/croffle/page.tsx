'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { ShieldAlert, Fingerprint, EyeOff, Lock } from 'lucide-react';

export default function CrofflePage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100 shadow-sm';

    const t = {
        title: lang === 'KOR' ? 'Croffle' : 'Croffle',
        subtitle: lang === 'KOR' ? '사생활 침해 걱정 없이, 가장 안전하게 소통할 수 있는 종단간 암호화(E2EE) 보안 메신저' : 'The most secure End-to-End Encrypted (E2EE) messenger for communication without privacy concerns.',
        badge: lang === 'KOR' ? '서비스' : 'Service',
        featuresTitle: lang === 'KOR' ? '절대적인 프라이버시 보장' : 'Absolute Privacy Guaranteed',
        features: [
            {
                icon: Lock,
                title: lang === 'KOR' ? '종단간 암호화 (E2EE)' : 'End-to-End Encryption',
                desc: lang === 'KOR' ? '송신자와 수신자 외에는 그 누구도 대화 내용을 해독할 수 없습니다. HICE 서버조차도 메시지를 열람할 권한과 기술적 방법이 없습니다.' : 'No one but the sender and receiver can decrypt the conversation. Even HICE servers lack the authority and technical means to view messages.'
            },
            {
                icon: EyeOff,
                title: lang === 'KOR' ? '발자국 지우기' : 'Erasing Footprints',
                desc: lang === 'KOR' ? '확인 후 즉시 파기되는 자동 폭파 메시지, 캡처 방지 및 알림 기능으로 대화의 흔적을 남기지 않습니다.' : 'Leave no trace with automatically destructing messages, screen capture prevention, and capture alerts.'
            },
            {
                icon: Fingerprint,
                title: lang === 'KOR' ? '익명성 기반 식별' : 'Anonymity-based ID',
                desc: lang === 'KOR' ? '전화번호나 이메일 등 개인정보를 요구하지 않습니다. 오직 무작위로 생성된 식별 코드만으로 소통을 시작합니다.' : 'Does not require personal information like phone numbers or emails. Start communicating only with randomly generated identification codes.'
            },
            {
                icon: ShieldAlert,
                title: lang === 'KOR' ? '온디바이스 보안' : 'On-Device Security',
                desc: lang === 'KOR' ? '모든 암호화 키와 민감한 데이터는 중앙 서버가 아닌 사용자의 디바이스 안전 영역(Secure Enclave)에만 물리적으로 저장됩니다.' : 'All encryption keys and sensitive data are physically stored only in the user device\'s Secure Enclave, never on a central server.'
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
                    colorTheme="green"
                />

                {/* Mockup Section */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                    <AnimatedContainer animationType="fadeUp" className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] border overflow-hidden relative group">
                        <div className={`absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 ${isDarkMode ? 'from-green-900/40 to-emerald-900/40' : ''}`} />

                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-gray-200 bg-white/50'} backdrop-blur-sm`}>
                            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter mix-blend-overlay text-green-900 dark:text-green-300">
                                Your Secrets Are Safe.
                            </h3>
                            <p className={`text-lg md:text-xl max-w-2xl mix-blend-overlay ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>
                                {lang === 'KOR' ? 'Croffle 앱 채팅 화면 목업' : 'Croffle App Chat Screen Mockup'}
                            </p>
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
                                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 mb-8 transition-transform group-hover:scale-110">
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
