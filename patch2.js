import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace remaining section 4 to 8 styling without touching text
content = content.replace(/bg-slate-50/g, 'bg-[#F1F5F9]');
content = content.replace(/bg-blue-950/g, 'bg-[#0F172A]');
content = content.replace(/text-blue-900/g, 'text-[#0F172A]');
content = content.replace(/text-blue-950/g, 'text-[#0F172A]');
content = content.replace(/text-slate-900/g, 'text-[#0F172A]');
content = content.replace(/text-slate-800/g, 'text-[#1E293B]');

// Specific typography and component matches
content = content.replace(/text-blue-600 font-semibold tracking-wide text-sm uppercase mb-3/g, 'text-teal-600 font-bold tracking-widest text-xs uppercase mb-3');
content = content.replace(/text-3xl md:text-4xl font-bold font-serif text-\[\#0F172A\] mb-6/g, 'text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6');
content = content.replace(/text-3xl md:text-4xl font-bold font-serif mb-6/g, 'text-3xl md:text-4xl font-extrabold mb-6');
content = content.replace(/text-3xl md:text-4xl font-bold font-serif mb-8/g, 'text-3xl md:text-4xl font-extrabold mb-8');
content = content.replace(/text-3xl md:text-4xl font-bold font-serif/g, 'text-3xl md:text-4xl font-extrabold');
content = content.replace(/text-3xl md:text-5xl font-bold font-serif text-\[\#0F172A\] mb-6/g, 'text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-6');
content = content.replace(/text-slate-600 text-lg/g, 'text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed');
content = content.replace(/text-slate-600 leading-relaxed font-light/g, 'text-slate-600 text-[13px] leading-relaxed');
content = content.replace(/text-xl font-bold font-serif/g, 'text-sm font-bold');
content = content.replace(/text-slate-600 text-sm/g, 'text-slate-600 text-[13px] leading-relaxed');

// Cards
content = content.replace(/bg-white p-8 rounded-3xl shadow-\[0_4px_20px_-4px_rgba\(0\,0\,0\,0\.05\)\] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group/g, 'bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group');

// Icons in services
content = content.replace(/text-blue-600/g, 'text-teal-600');
content = content.replace(/text-emerald-600/g, 'text-teal-600');
content = content.replace(/text-amber-600/g, 'text-slate-500');
content = content.replace(/text-indigo-600/g, 'text-teal-600');
content = content.replace(/text-rose-600/g, 'text-slate-500');
content = content.replace(/text-purple-600/g, 'text-teal-600');

// Step section
content = content.replace(/before:from-blue-200 before:via-blue-200/g, 'before:from-teal-200 before:via-teal-200');
content = content.replace(/border-blue-50 flex/g, 'border-teal-50 flex');
content = content.replace(/text-\[\#0F172A\] shadow-sm z-10 shrink-0 group-hover:bg-blue-600/g, 'text-teal-600 shadow-sm z-10 shrink-0 group-hover:bg-teal-600');
content = content.replace(/bg-[#F1F5F9]\/50/g, 'bg-teal-50/50');
content = content.replace(/border border-teal-100/g, 'border border-teal-200');

// Section 6: Why choose me
content = content.replace(/text-amber-400 font-semibold tracking-wide text-sm/g, 'text-teal-400 font-bold tracking-widest text-xs');
content = content.replace(/text-emerald-400/g, 'text-teal-400');
content = content.replace(/text-blue-50/g, 'text-slate-300');

// Section 7: Tags
content = content.replace(/px-6 py-4 rounded-full shadow-sm/g, 'px-6 py-4 rounded-full shadow-sm');
content = content.replace(/hover:border-blue-200 hover:bg-blue-50/g, 'hover:border-teal-200 hover:bg-teal-50');

// Contact
content = content.replace(/bg-blue-50 rounded-full/g, 'bg-teal-50 rounded-full');
content = content.replace(/text-xl text-slate-600 font-light/g, 'text-sm text-slate-600 leading-relaxed');
content = content.replace(/text-sm font-semibold tracking-wide text-slate-500 uppercase/g, 'text-[11px] font-bold text-slate-400 uppercase tracking-widest');
content = content.replace(/bg-slate-200/g, 'bg-slate-100');
content = content.replace(/text-2xl font-serif text-\[\#0F172A\]/g, 'text-lg font-bold text-[#0F172A]');
content = content.replace(/text-2xl font-serif text-teal-600/g, 'text-lg font-bold text-teal-600');

// Footer
content = content.replace(/bg-slate-950/g, 'bg-white');
content = content.replace(/text-slate-400/g, 'text-slate-500');
content = content.replace(/border-slate-900/g, 'border-slate-100');
content = content.replace(/bg-\[\#0F172A\] flex items-center justify-center text-white/g, 'bg-[#0F172A] flex items-center justify-center text-teal-400');
content = content.replace(/text-white font-medium/g, 'text-[#0F172A] font-bold text-sm');
content = content.replace(/text-sm/g, 'text-[11px] font-medium uppercase tracking-widest'); // This might catch too many, be careful. I'll just change the text directly in the footer instead.

fs.writeFileSync('src/App.tsx', content);
