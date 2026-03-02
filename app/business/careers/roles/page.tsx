'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Search, ChevronRight, Briefcase } from 'lucide-react';

export default function CareersRolesPage() {
    
    const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

    const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
    const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm';
    const inputBgClass = isDarkMode ? 'bg-zinc-950 border-zinc-800 text-white focus:border-zinc-500' : 'bg-gray-50 border-gray-200 text-black focus:border-black';

    const t = {
        title: lang === 'KOR' ? '채용공고' : 'Open Roles',
        subtitle: lang === 'KOR' ? '세상의 문제를 해결할 최고의 동료들을 찾습니다.' : 'Looking for the best colleagues to solve the world\'s problems.',
        badge: lang === 'KOR' ? '채용' : 'Careers',
        filterLabel: lang === 'KOR' ? '직군 필터' : 'Filter by Category',
        searchPlaceholder: lang === 'KOR' ? '직무 또는 키워드 검색' : 'Search roles or keywords',
        roles: [
            {
                id: 1,
                title: 'Senior Software Engineer, Core Foundation',
                category: 'Engineering',
                type: 'Full-time',
                location: 'Seoul or Remote'
            },
            {
                id: 2,
                title: 'AI Researcher (Reasoning & Alignment)',
                category: 'Research',
                type: 'Full-time',
                location: 'Seoul'
            },
            {
                id: 3,
                title: 'Product Designer, Planet Ecosystem',
                category: 'Design',
                type: 'Full-time',
                location: 'Seoul or Remote'
            },
            {
                id: 4,
                title: 'Security Operations Center (SOC) Analyst',
                category: 'Security',
                type: 'Full-time',
                location: 'Seoul'
            },
            {
                id: 5,
                title: 'Global Partnership Manager, B2B',
                category: 'Business',
                type: 'Full-time',
                location: 'Palo Alto or Seoul'
            }
        ]
    };

    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRoles = t.roles.filter(role =>
        (filter === 'All' || role.category === filter) &&
        role.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                    colorTheme="blue"
                />

                <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-10">

                    {/* Filters & Search */}
                    <div className="flex flex-col md:flex-row gap-4 mb-12">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder={t.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`w-full pl-12 pr-4 py-4 rounded-2xl border outline-none font-medium transition-colors ${inputBgClass}`}
                            />
                        </div>

                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className={`md:w-64 p-4 rounded-2xl border outline-none appearance-none font-medium transition-colors cursor-pointer ${inputBgClass}`}
                        >
                            <option value="All">{lang === 'KOR' ? '모든 직군' : 'All Categories'}</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Research">Research</option>
                            <option value="Design">Design</option>
                            <option value="Security">Security</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>

                    {/* Roles List */}
                    <div className="space-y-4">
                        {filteredRoles.length > 0 ? (
                            filteredRoles.map((role, idx) => (
                                <AnimatedContainer key={role.id} animationType="fadeUp" delay={idx * 0.05}>
                                    <a href="#" className={`block p-6 md:p-8 rounded-[2rem] border transition-all hover:-translate-y-1 group ${cardBgClass}`}>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                                            <div>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-600'}`}>
                                                        {role.category}
                                                    </span>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                                        {role.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                                                    {role.title}
                                                </h3>
                                                <p className={`text-sm font-medium flex items-center gap-2 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
                                                    <Briefcase size={16} /> {role.location}
                                                </p>
                                            </div>

                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${isDarkMode ? 'bg-zinc-800 text-zinc-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-500 group-hover:text-white'}`}>
                                                <ChevronRight size={24} />
                                            </div>

                                        </div>
                                    </a>
                                </AnimatedContainer>
                            ))
                        ) : (
                            <div className={`py-20 text-center rounded-[2rem] border border-dashed ${isDarkMode ? 'border-zinc-800 text-zinc-500' : 'border-gray-200 text-gray-400'}`}>
                                <p className="text-lg font-medium">{lang === 'KOR' ? '검색 결과가 없습니다.' : 'No open roles found matching your criteria.'}</p>
                            </div>
                        )}
                    </div>

                </section>

            </main>

            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}
