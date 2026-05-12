const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Global changes (tailwind classes mapped)
code = code.replace(/className="font-sans text-slate-800 bg-slate-50 antialiased min-h-screen selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden"/g, 'className="font-sans text-[#1E293B] bg-[#F1F5F9] antialiased min-h-screen selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden"');

// Navigation
code = code.replace(/bg-white\/90 backdrop-blur-md shadow-sm py-3/g, 'bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200 py-3');
code = code.replace(/w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-800/g, 'w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center text-teal-400 font-bold text-xl group-hover:bg-[#1E293B]');
code = code.replace(/text-xl tracking-tight text-blue-950/g, 'text-lg tracking-tight text-[#0F172A]');
code = code.replace(/text-xs text-slate-500 font-medium tracking-wider uppercase mt-1/g, 'text-[10px] text-teal-600 font-semibold tracking-widest uppercase mt-1');
code = code.replace(/text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors/g, 'text-sm font-medium text-slate-600 uppercase tracking-tighter hover:text-teal-600 transition-colors');
code = code.replace(/bg-blue-950 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition-all shadow-md hover:shadow-lg active:scale-95/g, 'bg-[#0F172A] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#1E293B] transition-all shadow-lg shadow-slate-300 active:scale-95');

// Hero
code = code.replace(/bg-white/g, 'bg-transparent'); // Generic bg-white wipe (careful: will fix specific bg-white later)
code = code.replace(/from-blue-50/g, 'from-teal-50');
code = code.replace(/bg-blue-50/g, 'bg-teal-50');
code = code.replace(/border-blue-100/g, 'border-teal-100');
code = code.replace(/text-blue-800/g, 'text-teal-800');
code = code.replace(/text-blue-700/g, 'text-teal-600 underline decoration-2 underline-offset-4');
code = code.replace(/text-blue-950/g, 'text-[#0F172A]');
code = code.replace(/text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-\[#0F172A\] leading-tight /g, 'text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight ');
code = code.replace(/bg-blue-600/g, 'bg-teal-600');
code = code.replace(/bg-blue-950/g, 'bg-[#0F172A]');
code = code.replace(/hover:bg-blue-800/g, 'hover:bg-[#1E293B]');
code = code.replace(/px-7 py-3\.5 rounded-full font-medium/g, 'px-6 py-2.5 rounded-full text-xs font-semibold');
code = code.replace(/bg-blue-100/g, 'bg-teal-100');
code = code.replace(/text-blue-600/g, 'text-teal-600');

// Rreth Meje
code = code.replace(/bg-slate-50/g, 'bg-transparent');
code = code.replace(/rounded-3xl bg-\[#0F172A\]/g, 'rounded-[32px] bg-[#0F172A]'); // Because bg-blue-950 already changed
code = code.replace(/from-\[#0F172A\] to-blue-800/g, 'from-[#0F172A] to-[#1E293B]');
code = code.replace(/text-blue-200/g, 'text-teal-400');
code = code.replace(/text-teal-600 font-semibold tracking-wide text-sm uppercase/g, 'text-teal-400 text-xs font-bold uppercase tracking-widest'); // Was text-blue-600
code = code.replace(/text-3xl md:text-4xl font-bold font-serif text-slate-900/g, 'text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight');
code = code.replace(/bg-amber-400/g, 'bg-teal-500');

// SPSS Academy section
code = code.replace(/bg-\[#0F172A\] text-white relative overflow-hidden/g, 'bg-[#0F172A] text-white relative overflow-hidden rounded-[32px] mx-6 lg:mx-8 mb-20');
code = code.replace(/text-amber-400/g, 'text-teal-400');
code = code.replace(/text-blue-100/g, 'text-slate-300');
code = code.replace(/bg-blue-500/g, 'bg-teal-500');

// Services Section
code = code.replace(/bg-transparent p-8 rounded-3xl shadow-\[0_4px_20px_-4px_rgba\(0,0,0,0\.05\)\] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group/g, 'bg-white p-5 rounded-2xl shadow-sm border border-slate-100 transition-all hover:border-teal-200');
code = code.replace(/w-14 h-14 rounded-2xl bg-transparent border border-slate-100/g, 'w-10 h-10 rounded-lg bg-teal-50');
code = code.replace(/text-xl font-bold font-serif text-slate-900/g, 'text-sm font-bold text-[#0F172A]');
code = code.replace(/text-slate-600 leading-relaxed font-light/g, 'text-[11px] text-slate-500 leading-snug');

// Restore some white backgrounds that got changed to transparent globally
code = code.replace(/bg-transparent border border-slate-200/g, 'bg-white border border-slate-200');
code = code.replace(/relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent/g, 'relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent');
code = code.replace(/bg-transparent px-6 py-4 rounded-full/g, 'bg-white px-6 py-4 rounded-full');
// And fix services card background:
code = code.replace(/bg-transparent p-5 rounded-2xl/g, 'bg-white p-5 rounded-2xl');
// Fix Method specific box wrapper:
code = code.replace(/bg-transparent p-8 rounded-2xl shadow-xl w-full/g, 'bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm w-full');
// Fix specific white circles
code = code.replace(/w-12 h-12 rounded-full bg-transparent border-4/g, 'w-12 h-12 rounded-full bg-white border-4');

// Method Icons colors mapped
code = code.replace(/text-emerald-600/g, 'text-teal-600');
code = code.replace(/text-amber-600/g, 'text-teal-600');
code = code.replace(/text-indigo-600/g, 'text-teal-600');
code = code.replace(/text-rose-600/g, 'text-teal-600');
code = code.replace(/text-purple-600/g, 'text-teal-600');

// Method specific lines
code = code.replace(/from-blue-200 before:via-blue-200/g, 'from-teal-200 before:via-teal-200');
code = code.replace(/border-blue-50/g, 'border-teal-50');
code = code.replace(/text-blue-900/g, 'text-teal-500');

// Why Choose Me Section
code = code.replace(/bg-\[#0F172A\] text-white/g, 'bg-white border border-slate-100 rounded-[32px] lg:mx-8 mb-20 p-8 shadow-sm text-[#0F172A]');
code = code.replace(/text-blue-50/g, 'text-slate-600');
code = code.replace(/text-emerald-400/g, 'text-teal-600');
code = code.replace(/text-amber-400 font-semibold tracking-wide text-sm uppercase/g, 'text-slate-400 text-xs font-bold uppercase tracking-widest'); // Subheader in Why choose me

// Target Audience
code = code.replace(/text-teal-600 font-semibold tracking-wide text-sm uppercase/g, 'text-teal-600 text-xs font-bold uppercase tracking-widest');
code = code.replace(/text-3xl md:text-4xl font-bold font-serif text-slate-900/g, 'text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight');
code = code.replace(/hover:border-blue-200 hover:bg-teal-50/g, 'hover:border-teal-200 hover:bg-teal-50');

// Contact
code = code.replace(/bg-transparent border-t border-slate-100/g, 'bg-transparent border-t-0');
code = code.replace(/bg-transparent p-8 sm:p-12 rounded-3xl border border-slate-100/g, 'bg-teal-500/10 p-8 sm:p-12 rounded-[32px] border border-teal-200');
code = code.replace(/text-3xl md:text-5xl font-bold font-serif text-slate-900/g, 'text-3xl md:text-5xl font-extrabold text-[#0F172A]');
code = code.replace(/text-slate-900/g, 'text-[#0F172A]');

// Footer
code = code.replace(/bg-slate-900 text-slate-300 py-12 border-t border-slate-800/g, 'bg-white text-slate-400 py-6 px-10 border-t border-slate-100');
code = code.replace(/text-white/g, 'text-slate-600 font-bold');

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx updated');
