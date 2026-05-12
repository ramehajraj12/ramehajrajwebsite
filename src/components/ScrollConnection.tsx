import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Sigma } from 'lucide-react';

export const ScrollConnection = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-600 to-[#0F172A] origin-left z-[100]"
        style={{ scaleX: scaleY }}
      />
      
      {/* Central visual spiral / spine connecting entire app (moved strictly right) */}
      <div className="fixed top-0 right-[4%] w-px h-screen z-50 hidden xl:block opacity-60 pointer-events-none mix-blend-difference">
        
        {/* Background track */}
        <div className="absolute top-0 left-0 w-full h-full border-l-[2px] border-dashed border-teal-300/30"></div>
        
        {/* Fill track based on scroll */}
        <motion.div 
          className="absolute top-0 left-[-1px] w-[3px] bg-teal-400 origin-top shadow-[0_0_15px_3px_rgba(20,184,166,0.8)]"
          style={{ height: useTransform(scaleY, [0, 1], ["0%", "100%"]) }}
        />
        
        {/* Glowing Sigma tracking end */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0F172A] border-[3px] border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.9)] z-10 flex items-center justify-center text-teal-400"
          style={{ top: useTransform(scaleY, [0, 1], ["0%", "100%"]), y: '-50%' }}
        >
           <Sigma size={16} strokeWidth={3} />
        </motion.div>
      </div>

      {/* Decorative side tracker shapes - abstract spirals on the right side */}
      <div className="fixed top-1/4 right-[2%] w-[10vw] h-[50vh] z-0 hidden 2xl:block opacity-[0.04] pointer-events-none overflow-hidden">
         <motion.div 
           className="w-[20vw] h-[20vw] absolute -right-[10vw] top-1/2 -translate-y-1/2 border-[3px] border-solid border-teal-400 rounded-full"
           style={{
             scale: useTransform(scaleY, [0, 1], [0.8, 1.5]),
             rotate: useTransform(scaleY, [0, 1], [0, 360]),
             borderTopColor: 'transparent',
             borderBottomColor: 'transparent'
           }}
         />
      </div>
    </>
  );
};

