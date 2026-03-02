'use client';

import { useState, useEffect } from 'react';
import { Search, Globe, Moon, Sun, X } from 'lucide-react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR');
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-black';

  // 다국어 텍스트 데이터 맵
  const t = {
    searchPlaceholder: lang === 'KOR' ? '무엇이 궁금하신가요?' : 'What are you looking for?',
    trending: lang === 'KOR' ? '인기 검색어' : 'Trending',
  };

  const menuItems = [
    {
      KOR: '소개', ENG: 'About',
      subGroups: [
        {
          title: { KOR: '회사 개요', ENG: 'OVERVIEW' },
          list: [
            { KOR: 'Our Story', ENG: 'Our Story' }, // 영문 고정 선호
            { KOR: '비전 및 미션', ENG: 'Vision & Mission' },
            { KOR: '팀 소개', ENG: 'Meet the Team' },
            { KOR: 'Way of Working', ENG: 'Way of Working' }, // 관용구 유지
            { KOR: '핵심 가치', ENG: 'Values' },
            { KOR: 'Our Impact', ENG: 'Our Impact' } // 영문 고정 선호
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
            { KOR: 'HICE OpenApp', ENG: 'HICE OpenApp' }, // 상표권 영문 고정
            { KOR: 'Planet', ENG: 'Planet' },
            { KOR: 'Croffle', ENG: 'Croffle' },
            { KOR: 'ExoKRUS', ENG: 'ExoKRUS' },
            { KOR: '준비 중인 프로젝트', ENG: 'Upcoming Projects' }
          ]
        },
        {
          title: { KOR: '연구', ENG: 'RESEARCH' },
          list: [
            { KOR: 'HICE AI', ENG: 'HICE AI' },
            { KOR: 'HICE Notebooks', ENG: 'HICE Notebooks' },
            { KOR: 'Next (HICE)', ENG: 'Next (HICE)' },
            { KOR: '피드백', ENG: 'Feedback' },
            { KOR: 'GitHub', ENG: 'GitHub' },
            { KOR: 'HuggingFace', ENG: 'HuggingFace' }
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
            { KOR: 'About HICE IR', ENG: 'About HICE IR' },
            { KOR: '투자자 업데이트', ENG: 'Investor Updates' },
            { KOR: '파트너십 문의', ENG: 'Partner Inquiry' },
            { KOR: 'IR 자료실', ENG: 'Decks' },
            { KOR: '자주 묻는 질문', ENG: 'FAQ' }
          ]
        },
        {
          title: { KOR: '채용', ENG: 'CAREERS' },
          list: [
            { KOR: '인재상', ENG: 'Team Fit' },
            { KOR: 'HICE의 문화', ENG: 'Why HICE' },
            { KOR: '채용 중인 공고', ENG: 'Roles' },
            { KOR: '채용 절차', ENG: 'Join Process' },
            { KOR: '간편 지원', ENG: 'Quick Apply' },
            { KOR: '자주 묻는 질문', ENG: 'FAQ' }
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
            { KOR: '보도자료', ENG: 'Press Releases' },
            { KOR: '공지사항', ENG: 'Announcements' },
            { KOR: '팀 업데이트', ENG: 'Team Updates' },
            { KOR: '수상 실적', ENG: 'Awards' },
            { KOR: '뉴스레터 구독', ENG: 'Newsletter' }
          ]
        },
        {
          title: { KOR: '인사이트', ENG: 'INSIGHTS' },
          list: [
            { KOR: 'Tech Blog', ENG: 'Tech Blog' }, // 영문 고정 선호
            { KOR: '월간 리포트', ENG: 'Monthly Report' },
            { KOR: '이벤트', ENG: 'Events' },
            { KOR: '매뉴얼', ENG: 'Guides' }
          ]
        }
      ]
    },
  ];

  return (
    <>
      <header className={`relative w-full border-b transition-colors duration-300 z-50 ${themeClass} ${isDarkMode ? 'border-zinc-800' : 'border-gray-100'}`}>
        <div className="flex justify-between items-center px-12 py-6 max-w-7xl mx-auto">
          {/* 브랜드명은 영문 고정 */}
          <h2 className="font-bold text-2xl tracking-tighter cursor-pointer"><a href='/'>HICE</a></h2>

          <nav className="relative">
            <ul className="flex gap-1 text-[16px] font-bold items-center">
              {menuItems.map((item, index) => (
                <li key={item.ENG} className="py-1">
                  <button
                    onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                    className={`px-6 py-2.5 transition-all duration-200 rounded-full ${activeMenu === index ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white') : 'hover:opacity-60'}`}
                  >
                    {lang === 'KOR' ? item.KOR : item.ENG}
                  </button>
                </li>
              ))}
            </ul>

            {activeMenu !== null && (
              <div className="absolute left-0 right-0 top-full pt-[25px] animate-in fade-in slide-in-from-top-1 duration-200">
                <div className={`w-full p-10 rounded-b-[32px] shadow-2xl border-x border-b ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100'}`}>
                  <div className="flex gap-16">
                    {menuItems[activeMenu].subGroups.map((group, gIdx) => (
                      <div key={gIdx} className="min-w-[140px]">
                        {/* 서브그룹 타이틀 (INVESTMENT, CAREERS 등) */}
                        <h4 className="text-[11px] text-gray-400 mb-6 font-bold tracking-widest uppercase">
                          {lang === 'KOR' ? group.title.KOR : group.title.ENG}
                        </h4>

                        <ul className="space-y-3">
                          {group.list.map((sub, sIdx) => (
                            <li
                              key={sIdx}
                              className="text-[15px] font-bold hover:text-blue-500 cursor-pointer transition-colors"
                            >
                              {/* 리스트 아이템 한영 전환 */}
                              {lang === 'KOR' ? sub.KOR : sub.ENG}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>

          <div className="flex gap-2 items-center">
            <button onClick={() => setIsSearchOpen(true)} className={`p-2 rounded-full transition-all ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
              <Search size={22} />
            </button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:opacity-60 transition-all">
              {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button onClick={() => setLang(lang === 'KOR' ? 'ENG' : 'KOR')} className="flex items-center gap-2 px-3 py-2 rounded-full hover:opacity-60">
              <Globe size={18} /><span className="text-xs font-bold">{lang}</span>
            </button>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center animate-in fade-in duration-300 ${isDarkMode ? 'bg-black/95 text-white' : 'bg-white/95 text-black'} backdrop-blur-md`}>
          <div className="w-full flex justify-between items-center px-12 py-6 max-w-7xl">
            <h2 className="font-bold text-2xl tracking-tighter">HICE</h2>
            <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:opacity-50 transition-opacity">
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-top w-full max-w-4xl px-6 -mt-2">
            <div className={`relative w-full flex items-center px-7 py-3.5 rounded-full border-2 transition-all ${isDarkMode ? 'bg-zinc-900 border-zinc-700 focus-within:border-white' : 'bg-gray-50 border-gray-200 focus-within:border-black shadow-sm'}`}>
              <Search size={22} className="text-gray-400 mr-4" />
              <input
                autoFocus
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent text-xl font-bold outline-none placeholder:text-gray-300 dark:placeholder:text-zinc-600"
              />
            </div>
          </div>
        </div>
      )}

      
    </>
  );
}