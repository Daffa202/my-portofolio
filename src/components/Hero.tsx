'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDownRight, FileDown, Globe, BriefcaseBusiness, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portofolioData';

export default function HeroSection({ darkMode }: { darkMode: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-left sm:text-center flex flex-col items-start sm:items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border backdrop-blur-md shadow-sm ${
              darkMode
                ? 'bg-slate-800/80 border-slate-700/80 text-blue-400'
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{PORTFOLIO_DATA.personal.status}</span>
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.15] mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Otomasi Industri & <br className="hidden sm:inline" />
          Sistem Kontrol Berbasis <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400">
            PLC, SCADA & IoT.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-xl font-normal leading-relaxed max-w-2xl mb-10 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Halo, iam <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{PORTFOLIO_DATA.personal.name}</strong>, lulusan <strong className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Teknik Otomasi</strong> yang siap membantu integrasi hardware, pemrograman PLC, dan sistem pemantauan berbasis IoT secara efisien.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-14"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 active:scale-95"
          >
            <span>Lihat Proyek Otomasi</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download
            className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border font-semibold text-sm transition-all active:scale-95 ${
              darkMode
                ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 text-slate-200'
                : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-sm'
            }`}
          >
            <FileDown className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
            <span>Download CV (PDF)</span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`pt-8 border-t w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs ${
            darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-500'
          }`}
        >
          <span className="font-semibold tracking-wider uppercase text-slate-400">Kontak & Portofolio:</span>
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2.5 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-800/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2.5 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-800/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <BriefcaseBusiness className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Email"
              className={`p-2.5 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-800/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}