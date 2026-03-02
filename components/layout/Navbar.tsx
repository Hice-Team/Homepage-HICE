'use client';

import { useState, useEffect } from 'react';
import { Search, Globe, Moon, Sun, X, Menu, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlobal } from '@/components/providers/GlobalProvider';

interface NavbarProps {
    isDarkMode?: boolean;
    setIsDarkMode?: (value: boolean) => void;
    lang?: 'KOR' | 'ENG';
    setLang?: (value: 'KOR' | 'ENG') => void;
    forceSolidBackground?: boolean;
}

export default function Navbar({ forceSolidBackground = false }: NavbarProps) {
    // Override local props to use the global provider instead unconditionally.
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileExpandedMenu, setMobileExpandedMenu] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsSearchOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen, isSearchOpen]);

    const t = {
        searchPlaceholder: lang === 'KOR' ? '무엇이 궁금하신가요?' : 'What are you looking for?'
    };

    const headerBgClass = isDarkMode
        ? ((scrolled || forceSolidBackground || mobileMenuOpen) ? 'bg-black/80 backdrop-blur-xl border-zinc-800' : 'bg-transparent border-transparent')
        : ((scrolled || forceSolidBackground || mobileMenuOpen) ? 'bg-white/80 backdrop-blur-xl border-gray-100' : 'bg-transparent border-transparent');

    const menuItems = [
        {
            KOR: '소개', ENG: 'About',
            subGroups: [
                {
                    title: { KOR: '회사 개요', ENG: 'OVERVIEW' },
                    list: [
                        { KOR: '우리의 이야기', ENG: 'Our Story', href: '/about/our-story' },
                        { KOR: '비전 및 미션', ENG: 'Vision & Mission', href: '/about/vision-mission' },
                        { KOR: '팀 소개', ENG: 'Meet the Team', href: '/about/team' },
                        { KOR: '우리가 일하는 방법', ENG: 'Way of Working', href: '/about/way-of-working' },
                        { KOR: '핵심 가치', ENG: 'Values', href: '/about/values' },
                        { KOR: '우리가 만들고자 하는 영향', ENG: 'Our Impact', href: '/about/impact' }
                    ]
                }
            ]
        },
        {
            KOR: '기술 및 서비스', ENG: 'Tech & Service',
            subGroups: [
                {
                    title: { KOR: '서비스', ENG: 'SERVICES' },
                    list: [
                        { KOR: 'HICE OpenApp', ENG: 'HICE OpenApp', href: '/tech/service/openapp' },
                        { KOR: 'Planet', ENG: 'Planet', href: '/tech/service/planet' },
                        { KOR: 'Croffle', ENG: 'Croffle', href: '/tech/service/croffle' },
                        { KOR: 'ExoKRUS', ENG: 'ExoKRUS', href: '/tech/service/exokrus' },
                        { KOR: '준비 중인 프로젝트', ENG: 'Upcoming Projects', href: '/tech/service/upcoming' }
                    ]
                },
                {
                    title: { KOR: '연구', ENG: 'RESEARCH' },
                    list: [
                        { KOR: 'HICE AI', ENG: 'HICE AI', href: '/tech/research/ai' },
                        { KOR: 'HICE Notebooks', ENG: 'HICE Notebooks', href: '/tech/research/notebooks' },
                        { KOR: 'Next (HICE)', ENG: 'Next (HICE)', href: '/tech/research/next' },
                        { KOR: '피드백', ENG: 'Feedback', href: '/tech/research/feedback' },
                        { KOR: 'GitHub', ENG: 'GitHub', href: '/tech/research/github' },
                        { KOR: 'HuggingFace', ENG: 'HuggingFace', href: '/tech/research/huggingface' }
                    ]
                }
            ]
        },
        {
            KOR: '비즈니스', ENG: 'Business',
            subGroups: [
                {
                    title: { KOR: '투자', ENG: 'INVESTMENT' },
                    list: [
                        { KOR: 'HICE IR에 대하여', ENG: 'About HICE IR', href: '/business/invest/about' },
                        { KOR: '투자자 업데이트', ENG: 'Investor Updates', href: '/business/invest/updates' },
                        { KOR: '파트너십 문의', ENG: 'Partner Inquiry', href: '/business/invest/partner' },
                        { KOR: 'IR 자료실', ENG: 'Decks', href: '/business/invest/decks' },
                        { KOR: '자주 묻는 질문', ENG: 'FAQ', href: '/business/invest/faq' }
                    ]
                },
                {
                    title: { KOR: '채용', ENG: 'CAREERS' },
                    list: [
                        { KOR: '인재상', ENG: 'Team Fit', href: '/business/careers/fit' },
                        { KOR: 'HICE의 문화', ENG: 'Why HICE', href: '/business/careers/culture' },
                        { KOR: '채용 중인 공고', ENG: 'Roles', href: '/business/careers/roles' },
                        { KOR: '채용 절차', ENG: 'Join Process', href: '/business/careers/process' },
                        { KOR: '간편 지원', ENG: 'Quick Apply', href: '/business/careers/apply' },
                        { KOR: '자주 묻는 질문', ENG: 'FAQ', href: '/business/careers/faq' }
                    ]
                }
            ]
        },
        {
            KOR: '소식', ENG: 'News',
            subGroups: [
                {
                    title: { KOR: '미디어', ENG: 'MEDIA' },
                    list: [
                        { KOR: '보도자료', ENG: 'Press Releases', href: '/news/media/press' },
                        { KOR: '공지사항', ENG: 'Announcements', href: '/news/media/announcements' },
                        { KOR: '팀 업데이트', ENG: 'Team Updates', href: '/news/media/updates' },
                        { KOR: '수상 실적', ENG: 'Awards', href: '/news/media/awards' },
                        { KOR: '뉴스레터 구독', ENG: 'Newsletter', href: '/news/media/newsletter' }
                    ]
                },
                {
                    title: { KOR: '인사이트', ENG: 'INSIGHTS' },
                    list: [
                        { KOR: '기술 블로그', ENG: 'Tech Blog', href: '/news/insights/blog' },
                        { KOR: '월간 리포트', ENG: 'Monthly Report', href: '/news/insights/report' },
                        { KOR: '이벤트', ENG: 'Events', href: '/news/insights/events' },
                        { KOR: '매뉴얼', ENG: 'Guides', href: '/news/insights/guides' }
                    ]
                }
            ]
        }
    ];

    return (
        <>
            <header
                className={`fixed top-0 w-full border-b z-50 transition-all duration-300 ${headerBgClass} ${isDarkMode ? 'text-white' : 'text-black'}`}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <div className="flex justify-between items-center px-4 md:px-12 py-3 md:py-6 max-w-[1400px] mx-auto">

                    {/* Hamburger Menu (Mobile Only) */}
                    <button
                        className="p-2 lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <h2 className="font-bold text-2xl tracking-tighter cursor-pointer relative z-10 mx-auto lg:mx-0">
                        <a href='/' className="hover:text-blue-500 transition-colors">HICE</a>
                    </h2>

                    {/* Desktop Menu */}
                    <nav className="relative hidden lg:block">
                        <ul className="flex gap-2 text-[15px] font-bold items-center">
                            {menuItems.map((item, index) => (
                                <li key={item.ENG} className="py-1">
                                    <button
                                        onMouseEnter={() => setActiveMenu(index)}
                                        className={`px-5 py-2 transition-all duration-300 rounded-full ${activeMenu === index ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white') : 'hover:opacity-60'}`}
                                    >
                                        {lang === 'KOR' ? item.KOR : item.ENG}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <AnimatePresence>
                            {activeMenu !== null && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                                    className="absolute left-1/2 -translate-x-1/2 w-max max-w-5xl top-full pt-[25px]"
                                >
                                    <div className={`w-full p-10 rounded-3xl shadow-2xl border ${isDarkMode ? 'bg-zinc-900/95 backdrop-blur-xl border-zinc-800' : 'bg-white/95 backdrop-blur-xl border-gray-100'}`}>
                                        <div className="flex gap-16">
                                            {menuItems[activeMenu].subGroups.map((group, gIdx) => (
                                                <div key={gIdx} className="min-w-[140px]">
                                                    <h4 className={`text-[11px] mb-6 font-bold tracking-widest uppercase ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                                        {lang === 'KOR' ? group.title.KOR : group.title.ENG}
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {group.list.map((sub, sIdx) => (
                                                            <li key={sIdx}>
                                                                <a href={sub.href} className={`text-[15px] font-bold hover:text-blue-500 cursor-pointer transition-colors block ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                                                    {lang === 'KOR' ? sub.KOR : sub.ENG}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>

                    {/* Utils */}
                    <div className="flex gap-1 md:gap-3 items-center relative z-10">
                        <button onClick={() => setIsSearchOpen(true)} className={`p-2 rounded-full transition-all hidden md:block ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
                            <Search size={20} />
                        </button>
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full transition-all ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setLang(lang === 'KOR' ? 'ENG' : 'KOR')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
                            <Globe size={16} /><span className="text-xs font-bold">{lang}</span>
                        </button>
                        {/* Mobile Search Icon */}
                        <button onClick={() => setIsSearchOpen(true)} className={`p-2 rounded-full transition-all md:hidden ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
                            <Search size={20} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '100vh' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`lg:hidden w-full overflow-y-auto border-t ${isDarkMode ? 'bg-black border-zinc-800 text-white' : 'bg-white border-gray-100 text-black'}`}
                            style={{ paddingBottom: '100px' }}
                        >
                            <div className="p-6">
                                <ul className="space-y-2">
                                    {menuItems.map((item, idx) => (
                                        <li key={idx} className={`rounded-2xl transition-colors ${isDarkMode ? 'bg-zinc-900/50' : 'bg-gray-50'}`}>
                                            <button
                                                onClick={() => setMobileExpandedMenu(mobileExpandedMenu === idx ? null : idx)}
                                                className="w-full flex items-center justify-between p-5 text-lg font-bold"
                                            >
                                                {lang === 'KOR' ? item.KOR : item.ENG}
                                                <ChevronRight
                                                    size={20}
                                                    className={`transition-transform duration-300 ${mobileExpandedMenu === idx ? 'rotate-90' : ''}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {mobileExpandedMenu === idx && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className={`p-5 pt-0 border-t mx-5 mt-2 ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
                                                            {item.subGroups.map((group, gIdx) => (
                                                                <div key={gIdx} className="mt-5">
                                                                    <h4 className={`text-xs font-bold tracking-widest uppercase mb-4 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                                                        {lang === 'KOR' ? group.title.KOR : group.title.ENG}
                                                                    </h4>
                                                                    <ul className="space-y-3">
                                                                        {group.list.map((sub, sIdx) => (
                                                                            <li key={sIdx}>
                                                                                <a href={sub.href} className="text-[15px] font-medium hover:text-blue-500 transition-colors block py-1">
                                                                                    {lang === 'KOR' ? sub.KOR : sub.ENG}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`fixed inset-0 z-[100] flex flex-col items-center ${isDarkMode ? 'bg-black/95 text-white' : 'bg-white/95 text-black'} backdrop-blur-xl`}
                    >
                        <div className="w-full flex justify-between items-center px-4 md:px-12 py-4 md:py-6 max-w-[1400px]">
                            <h2 className="font-bold text-2xl tracking-tighter">HICE</h2>
                            <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:opacity-50 transition-opacity">
                                <X size={32} strokeWidth={1.5} />
                            </button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl px-4 md:px-6 -mt-32"
                        >
                            <div className={`relative w-full flex items-center px-6 md:px-8 py-4 md:py-6 rounded-3xl md:rounded-full border-2 transition-all shadow-2xl ${isDarkMode ? 'bg-zinc-900 border-zinc-700 focus-within:border-blue-500' : 'bg-white border-gray-200 focus-within:border-blue-500'}`}>
                                <Search size={28} className="text-blue-500 mr-3 md:mr-5 hidden md:block" />
                                <input autoFocus type="text" placeholder={t.searchPlaceholder} className="w-full bg-transparent text-xl md:text-3xl font-bold outline-none placeholder:text-gray-300 dark:placeholder:text-zinc-600" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
