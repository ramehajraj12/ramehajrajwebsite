import React from 'react';
import { motion } from 'motion/react';

const formulas = [
  "Y = β₀ + β₁X + ε",
  "β̂ = (X'X)⁻¹X'Y",
  "E(ε|X) = 0",
  "R² = 1 - (RSS/TSS)",
  "Var(ε|X) = σ²I",
  "t = (β̂ - β) / SE(β̂)",
  "F = MSR / MSE",
  "Cov(X, Y) = E[XY] - E[X]E[Y]",
  "ρ_{xy} = Cov(X,Y)/σ_Xσ_Y"
];

export const FloatingFormulas = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {formulas.map((formula, idx) => (
        <motion.div
           key={idx}
           className="absolute text-slate-800/[0.03] font-serif text-4xl sm:text-6xl md:text-8xl font-bold whitespace-nowrap"
           initial={{ 
             top: `${(idx * 12)}%`, 
             left: `${(idx % 2 === 0 ? -10 : 70) + (Math.random() * 10)}%`,
             rotate: Math.random() * 20 - 10
           }}
           animate={{
             x: [0, (idx % 2 === 0 ? 100 : -100) + Math.random() * 100, 0],
             y: [0, Math.random() * 100 - 50, 0],
             rotate: [Math.random() * 10 - 5, Math.random() * 20 - 10, Math.random() * 10 - 5]
           }}
           transition={{
             duration: 40 + (idx * 5) + Math.random() * 10,
             repeat: Infinity,
             ease: "linear"
           }}
        >
          {formula}
        </motion.div>
      ))}
    </div>
  );
};
