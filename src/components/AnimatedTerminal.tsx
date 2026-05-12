import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const terminalSteps = [
  "> INITIALIZING SPSS PROCESSOR...",
  "> IMPORTING DATASET (N=1452)....",
  "> CHECKING ASSUMPTIONS (HETEROSKEDASTICITY: NORMAL).",
  "> RUNNING OLS REGRESSION (DEPENDENT: Y).",
  "> ESTIMATING COEFFICIENTS (β)...",
  "> R-SQUARED: 0.842 | F-STATISTIC: 124.5",
  "========================================",
  "> RESULTS COMPILED SUCCESSFULLY."
];

export const AnimatedTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < terminalSteps.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalSteps[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 800 + 400); // Random delay between 400ms to 1200ms
      return () => clearTimeout(timer);
    } else {
      // Loop the animation after a delay
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="py-4 font-mono text-[10px] md:text-xs text-teal-600 bg-teal-50/50 p-4 rounded-lg mt-6 border border-teal-100 h-48 overflow-hidden relative">
      <div className="space-y-1">
        {lines.map((line, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={idx === terminalSteps.length - 1 ? "text-[#0F172A] font-bold mt-2" : ""}
          >
            {line}
          </motion.div>
        ))}
        <motion.div 
           animate={{ opacity: [1, 0, 1] }} 
           transition={{ repeat: Infinity, duration: 0.8 }}
           className="inline-block w-2 h-3 bg-teal-600 ml-1"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-teal-50/90 to-transparent pointer-events-none"></div>
    </div>
  );
};
