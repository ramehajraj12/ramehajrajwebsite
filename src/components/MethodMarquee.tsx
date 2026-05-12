import React from 'react';
import { motion } from 'motion/react';

const methods = [
  "Regresion Linear & Multiple",
  "Analizë Faktoriale (EFA/CFA)",
  "ANOVA & MANOVA",
  "Korrelacion Pearson & Spearman",
  "Testimi i Hipotezave",
  "T-Test (Independent & Paired)",
  "Chi-Square Test",
  "Reliability (Cronbach's Alpha)",
  "Modele Jo-Parametrike",
  "Regresion Logjistik"
];

export const MethodMarquee = () => {
  return (
    <div className="w-full bg-[#0F172A] py-6 border-y border-teal-500/20 overflow-hidden relative z-30 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.3)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="flex w-full">
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...methods, ...methods, ...methods, ...methods].map((method, idx) => (
            <div key={idx} className="flex items-center text-teal-400/80 font-bold tracking-widest text-[11px] uppercase shrink-0">
              <span className="px-8">{method}</span>
              <span className="text-teal-600/30 text-lg">&bull;</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
