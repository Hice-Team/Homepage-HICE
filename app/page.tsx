'use client';

import { useState } from 'react';
import { useGlobal } from '@/components/providers/GlobalProvider';
import { ArrowRight, Target, Users, Shield, Activity, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function HiceLandingPage() {
  
  const { isDarkMode, setIsDarkMode, lang, setLang } = useGlobal();

  const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black';
  const cardBgClass = isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100';

  // Animation variants
  const fadeIn: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const t = {
    slogan1: lang === 'KOR' ? '사람에 공감합니다,' : 'Empathizing with people,',
    slogan2: lang === 'KOR' ? '사람과 기술을 연결하다.' : 'Connecting people and technology.',
    intro: lang === 'KOR'
      ? 'HICE는 인공지능 연구부터 일상에 녹아드는 애플리케이션 서비스까지, 기술의 온기를 통해 사람들의 삶을 긍정적으로 변화시키는 스타트업입니다.'
      : 'HICE is a startup that positively changes people\'s lives through the warmth of technology, from AI research to everyday application services.',
    techTitle: lang === 'KOR' ? '우리의 기술과 서비스' : 'Our Tech & Services',
    stats: [
      { num: "1M+", label: lang === 'KOR' ? '생성된 AI 모델 방어' : 'AI Models Secured', icon: Shield },
      { num: "50+", label: lang === 'KOR' ? '글로벌 파트너스' : 'Global Partners', icon: Users },
      { num: "99.9%", label: lang === 'KOR' ? '서버 안정성' : 'Server Uptime', icon: Activity },
      { num: "24/7", label: lang === 'KOR' ? '지속적인 연구개발' : 'Continuous R&D', icon: Cpu },
    ],
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden ${themeClass}`}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        lang={lang}
        setLang={setLang}
      />

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[100px]"
        />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 pt-44 pb-32">
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-20 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeIn} className="mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide">
              {lang === 'KOR' ? '내일을 향한 끝없는 혁신' : 'Endless Innovation for Tomorrow'}
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[1.05] mb-10">
              {t.slogan1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {t.slogan2}
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className={`text-xl md:text-2xl max-w-3xl leading-relaxed mb-12 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
              {t.intro}
            </motion.p>

            <motion.div variants={fadeIn} className="flex gap-4 flex-col sm:flex-row">
              <a href="#services" className={`px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                {lang === 'KOR' ? '서비스 둘러보기' : 'Explore Services'}
              </a>
              <a href="/about/our-story" className={`px-8 py-4 rounded-full font-bold text-lg border transition-all hover:scale-105 ${isDarkMode ? 'border-zinc-700 hover:border-zinc-500 bg-zinc-900/50' : 'border-gray-200 hover:border-gray-400 bg-white/50'}`}>
                {lang === 'KOR' ? 'HICE에 대하여' : 'About HICE'}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section with Framer Motion Layout */}
        <section className={`py-16 md:py-24 border-y mt-20 ${isDarkMode ? 'border-zinc-800 bg-zinc-950/50' : 'border-gray-100 bg-white/50'}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-200 dark:divide-zinc-800"
            >
              {t.stats.map((stat, idx) => (
                <motion.div key={idx} variants={fadeIn} className={`flex flex-col items-center text-center ${idx % 2 !== 0 ? 'border-l border-gray-200 dark:border-zinc-800 md:border-l-0' : ''} ${idx > 1 ? 'pt-8 border-t border-gray-200 dark:border-zinc-800 md:pt-0 md:border-t-0' : ''} p-4`}>
                  <div className={`p-4 rounded-2xl mb-4 ${isDarkMode ? 'bg-zinc-900 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <stat.icon size={28} />
                  </div>
                  <h4 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tighter">{stat.num}</h4>
                  <p className={`text-sm font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Projects / Cards Section */}
        <section id="services" className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t.techTitle}</h2>
              <p className={`text-xl ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                {lang === 'KOR' ? '세상을 바꾸는 혁신적인 서비스와 연구 결과를 확인하세요.' : 'Discover our innovative services and research that are changing the world.'}
              </p>
            </div>
            <a href="/tech/service/openapp" className="flex items-center gap-2 font-bold text-blue-500 hover:text-blue-600 group">
              {lang === 'KOR' ? '모든 프로젝트 보기' : 'View All Projects'}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Card 1: HICE AI */}
            <motion.a variants={fadeIn} href="/tech/research/ai" className={`group p-8 md:p-12 rounded-[2rem] border transition-all duration-300 block ${cardBgClass}`}>
              <div className="flex justify-between items-start mb-24">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">Research</span>
                <ArrowRight className={`opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black'}`} size={28} />
              </div>
              <h4 className="text-3xl md:text-4xl font-extrabold mb-4 transition-colors group-hover:text-blue-500">HICE AI</h4>
              <p className={`text-lg md:text-xl font-medium leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                {lang === 'KOR' ? '미래를 앞당기는 인공지능 기반 모델 연구 및 고도화' : 'Researching and developing forward-looking AI models'}
              </p>
            </motion.a>

            {/* Card 2: Croffle */}
            <motion.a variants={fadeIn} href="/tech/service/croffle" className={`group p-8 md:p-12 rounded-[2rem] border transition-all duration-300 block ${cardBgClass}`}>
              <div className="flex justify-between items-start mb-24">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400">Service</span>
                <ArrowRight className={`opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black'}`} size={28} />
              </div>
              <h4 className="text-3xl md:text-4xl font-extrabold mb-4 transition-colors group-hover:text-green-500">Croffle</h4>
              <p className={`text-lg md:text-xl font-medium leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                {lang === 'KOR' ? '사생활 침해 걱정 없이, 가장 안전하게 소통할 수 있는 보안 메신저' : 'The most secure messenger for communication without privacy concerns'}
              </p>
            </motion.a>

            {/* Card 3: Planet & OpenApp (Takes full width on large screens) */}
            <motion.a variants={fadeIn} href="/tech/service/openapp" className={`group p-8 md:p-12 rounded-[2rem] border transition-all duration-300 block md:col-span-2 ${cardBgClass} overflow-hidden relative`}>
              <div className="relative z-10 flex flex-col md:flex-row justify-between h-full">
                <div className="md:w-1/2">
                  <div className="flex items-start mb-16 md:mb-32">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400">Platform</span>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-extrabold mb-4 transition-colors group-hover:text-purple-500">HICE OpenApp & Planet</h4>
                  <p className={`text-lg md:text-xl font-medium leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                    {lang === 'KOR' ? '누구나 쉽게 접근하고 확장할 수 있는 범용 애플리케이션 생태계. 한 번의 개발로 모든 플랫폼을 아우릅니다.' : 'A universal application ecosystem that anyone can easily access and expand. Cover all platforms with a single build.'}
                  </p>
                </div>
                <div className="hidden md:flex items-end justify-end w-1/2">
                  <ArrowRight className={`opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black'}`} size={64} strokeWidth={1} />
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
            </motion.a>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 md:py-32 relative overflow-hidden ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8"
            >
              {lang === 'KOR' ? '세상을 바꾸는 여정에 함께하세요' : 'Join the journey to change the world'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-xl mb-12 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}
            >
              {lang === 'KOR' ? 'HICE는 혁신을 현실로 만들 뛰어난 인재를 기다리고 있습니다.' : 'HICE is waiting for exceptional talent to turn innovation into reality.'}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="/business/careers/roles" className="inline-flex items-center gap-3 px-8 py-5 rounded-full font-bold text-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20">
                {lang === 'KOR' ? '진행 중인 채용 공고 보기' : 'View Open Roles'}
                <Target size={20} />
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}