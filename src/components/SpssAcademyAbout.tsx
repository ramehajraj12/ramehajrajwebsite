import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Presentation, CheckCircle, GraduationCap, Users } from 'lucide-react';

const content = {
  sq: {
    title: "Rreth SPSS Academy",
    p1: "SPSS Academy përbën një instancë të profilizuar në ofrimin e asistencës ekspertizore për individë, grupe kërkimore dhe entitete organizative në aplikimin metrik të platformës software-ike SPSS (Statistical Package for the Social Sciences). Kjo kornizë veprimi ngërthen konsulencën thelbësore për projektet e analizës sasiore, si dhe programe trajnuese të dizajnuara ngushtësisht për përvetësimin analitik të SPSS.",
    p2: "Shtrirja e shërbimeve tona ofron mbështetje strukturore duke pasur një spektër të gjerë inkuadrimi:",
    list: [
      "Mentoring i thelluar për lundrim dhe aplikim ndërhyrës në SPSS, duke përfshirë konfigurimin e koncepteve modeluese empirike, inxhinierimin e raporteve shkencore dhe prezantimin e standardizuar të variancave e rezultateve.",
      "Konsulencë metodologjike për nismat e inxhinierisë së të dhënave, duke udhëhequr drejt seleksionimit determinist të testeve statistikore dhe analizimit konceptual të mbetjeve dhe thelbit të gjetjeve.",
      "Mbështetje e drejtpërdrejtë operacionale (troubleshooting) në rastet e defekteve të integrimit ose ndërhyrjeve infrastrukturore të instalimit të programit SPSS."
    ],
    p3: "Këto postulate shërbimesh gjejnë zbatim efiçient në një areal ndërdisiplinor fushash, si: shkencat defikultative e shoqërore, sektorin e shëndetësisë, rrafshet analitike të marketingut biznesor si dhe menaxhimin financiar.",
    p4: "Gjithashtu, platforma siguron zhvillimin e seancave transmetuese online dhe in vivo (offline), duke modeluar formate komunikimi në sinkron me imperativat specifike të klientelës studimore dhe asaj ndërmarrëse.",
    p5: "Në përmbyllje, SPSS Academy trupëzohet si një katalizator i pazëvendësueshëm e i besueshëm për individët dhe institucionet që aspirojnë të sublimojnë diskursin e tyre metrik në menaxhimin e të dhënave sasiore ndërmjet platformës SPSS."
  },
  en: {
    title: "About SPSS Academy",
    p1: "SPSS Academy represents a specialized platform dedicated to providing expert assistance to individuals, research groups, and organizational entities in the empirical application of SPSS (Statistical Package for the Social Sciences). This operational framework encompasses profound consultancy for quantitative data analysis projects, alongside highly customizable training programs tailored to master SPSS metrics.",
    p2: "The scope of our academic and structural support extends across a wide spectrum of functional areas, specifically:",
    list: [
      "Deep mentoring in SPSS navigation and intervention, encompassing the configuration of empirical modeling concepts, the engineering of scientific reports, and the standardized presentation of variances and research findings.",
      "Methodological consultancy for data engineering initiatives, guiding clients towards the deterministic selection of statistical tests and the conceptual extraction of core findings.",
      "Direct operational support (troubleshooting) in addressing integration challenges or infrastructural issues pertaining to SPSS installation."
    ],
    p3: "These service postulates present efficient applicability across an interdisciplinary array of domains, including social and behavioral sciences, the healthcare sector, analytical tiers of corporate marketing, and financial management.",
    p4: "Furthermore, the academy assures the execution of instructional sessions both via digital mediums (online) and in vivo (offline), modulating communication formats synchronously with the distinct imperatives of scholarly and corporate clientele.",
    p5: "In synthesis, SPSS Academy embodies an indispensable and creditable catalyst for individuals and institutions aspiring to sublimate their metric proficiency in quantitative data management through the SPSS platform."
  }
};

export const SpssAcademyAbout = () => {
  const [lang, setLang] = useState<'sq' | 'en'>('sq');
  const t = content[lang];

  return (
    <div className="bg-[#1E293B] rounded-3xl border border-white/10 p-8 md:p-12 mb-16 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white">{t.title}</h3>
        <div className="flex bg-white/5 rounded-full p-1 border border-white/10 shrink-0 self-start">
          <button 
            onClick={() => setLang('sq')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${lang === 'sq' ? 'bg-teal-500 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Shqip
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${lang === 'en' ? 'bg-teal-500 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            English
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 text-slate-300 text-sm leading-relaxed relative z-10"
        >
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <ul className="space-y-4 my-6">
            {t.list.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={14} className="text-teal-400" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>{t.p3}</p>
          <div className="grid sm:grid-cols-2 gap-4 py-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                 <Presentation size={20} className="text-blue-400" />
               </div>
               <span className="font-semibold text-white text-xs">{lang === 'sq' ? 'Trajnime Online & Offline' : 'Online & Offline Trainings'}</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                 <Users size={20} className="text-teal-400" />
               </div>
               <span className="font-semibold text-white text-xs">{lang === 'sq' ? 'Qasje e Personalizuar' : 'Customized Approach'}</span>
            </div>
          </div>
          <p>{t.p4}</p>
          <p className="font-medium text-white italic border-l-2 border-teal-500 pl-4 py-1">{t.p5}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
