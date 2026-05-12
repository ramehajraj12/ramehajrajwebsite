import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

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
  const { scrollYProgress } = useScroll();
  // We'll create a spiral effect twisting based on scroll position!
  const spin = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none perspective-1000">
      {formulas.map((formula, idx) => {
        // Vary rotation speed and direction
        const multiplier = idx % 2 === 0 ? 1 : -1;
        const spinTransform = useTransform(scrollYProgress, [0, 1], [0, 360 * multiplier * ((idx+1)*0.5)]);
        const yTransform = useTransform(scrollYProgress, [0, 1], [0, idx * 50]);

        return (
          <motion.div
            key={idx}
            className="absolute text-slate-800/[0.04] font-serif text-3xl sm:text-5xl md:text-7xl font-bold whitespace-nowrap"
            style={{
              top: `${5 + (idx * 10)}%`,
              left: `${(idx % 2 === 0 ? 5 : 65) + (Math.random() * 15)}%`,
              rotateZ: spinTransform,
              y: yTransform
            }}
          >
            {formula}
          </motion.div>
        );
      })}
    </div>
  );
};
