import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  BarChart, PieChart, FileText, 
  Users, CheckCircle, GraduationCap, 
  Mail, BookOpen, Presentation, 
  Briefcase, Target, Building2,
  LineChart, Menu, X, ArrowRight, ChevronRight,
  Database, Network, Lightbulb, TrendingUp,
  MessageSquareQuote, Star, Plus, Minus,
  Linkedin, Facebook
} from 'lucide-react';
import { FloatingFormulas } from './components/FloatingFormulas';
import { AnimatedTerminal } from './components/AnimatedTerminal';
import { FAQItem } from './components/FAQItem';
import { SpssAcademyAbout } from './components/SpssAcademyAbout';
import { ScrollConnection } from './components/ScrollConnection';
import { MethodMarquee } from './components/MethodMarquee';
import { ScrollToTop } from './components/ScrollToTop';

const navLinks = [
  { name: 'Kreu', id: 'home' },
  { name: 'Rreth Meje', id: 'about' },
  { name: 'SPSS Academy', id: 'academy' },
  { name: 'Shërbimet', id: 'services' },
  { name: 'Metodologjia', id: 'method' },
  { name: 'Kontakt', id: 'contact' }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-[#1E293B] bg-[#F1F5F9] antialiased min-h-screen selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden relative">
      <ScrollConnection />
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center text-teal-400 font-bold text-xl group-hover:bg-[#1E293B] transition-colors">
              SP
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight text-[#0F172A] leading-none">Ramë Hajraj</div>
              <div className="text-[10px] uppercase tracking-widest text-teal-600 font-semibold mt-1">SPSS Academy</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 uppercase tracking-tighter">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                onClick={(e) => scrollTo(e, link.id)}
                className="hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollTo(e, 'contact')}
              className="bg-[#0F172A] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#1E293B] transition-all shadow-lg shadow-slate-300 active:scale-95"
            >
              Më Kontaktoni
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                  key={link.id} 
                  href={`#${link.id}`}
                  onClick={(e) => scrollTo(e, link.id)}
                  className="text-2xl font-extrabold text-[#0F172A] border-b border-slate-100 pb-4 tracking-tight hover:text-teal-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="mt-4 bg-teal-600 text-white px-8 py-4 rounded-full text-center font-bold shadow-lg shadow-teal-600/30 active:scale-95 transition-all"
              >
                Më Kontaktoni
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 1. Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
          <FloatingFormulas />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50/40 via-white/80 to-white pointer-events-none z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-[10px] font-bold uppercase tracking-widest mb-6 relative z-10">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Konsulencë & Metodologji
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight mb-6 relative z-10">
                Saktësi shkencore, inxhinierim të dhënash dhe analizë thelbësore <span className="text-teal-600 underline decoration-2 underline-offset-4">kërkimore</span>
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 italic relative z-10">
                "Unë jam Ramë Hajraj, thekues i metodologjisë kërkimore dhe inxhinier i të dhënave, duke ofruar infrastrukturë statistikore rigoroze, saktësi shkencore dhe konsulencë akademike për institucione dhe kërkuesit sfidantë."
              </p>
              
              <div className="flex flex-wrap items-center gap-3 relative z-10">
                <a 
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                  className="flex items-center gap-2 bg-[#0F172A] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-slate-300 active:scale-95 group hover:bg-[#1E293B]"
                >
                  Shfleto Shërbimet
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => scrollTo(e, 'contact')}
                  className="flex items-center gap-2 bg-white text-[#0F172A] border border-slate-200 px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-50 transition-all active:scale-95"
                >
                  Më Kontaktoni
                </a>
              </div>
            </motion.div>

            {/* Abstract Decorative Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-[32px] bg-white border border-slate-100 relative flex items-center justify-center p-12 shadow-sm">
                <div className="absolute top-10 right-10 w-24 h-24 bg-teal-50 rounded-2xl flex items-center justify-center rotate-12 shadow-sm animate-[bounce_8s_infinite]">
                  <BarChart className="w-10 h-10 text-teal-600" />
                </div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center -rotate-6 shadow-sm animate-[bounce_6s_infinite_0.5s]">
                  <LineChart className="w-14 h-14 text-teal-600" />
                </div>
                <div className="absolute top-1/3 left-4 w-28 h-28 bg-teal-50/50 rounded-2xl flex items-center justify-center -rotate-12 shadow-sm animate-[bounce_7s_infinite_1s]">
                  <Network className="w-12 h-12 text-teal-600" />
                </div>
                
                <div className="w-48 h-48 rounded-[32px] bg-[#0F172A] relative flex items-center justify-center shadow-lg z-10">
                  <Database className="w-20 h-20 text-teal-400" strokeWidth={1.5} />
                </div>
                
                {/* Decorative circles */}
                <div className="absolute inset-0 border border-slate-200 rounded-full scale-[1.15] opacity-50"></div>
                <div className="absolute inset-0 border border-slate-200 rounded-full scale-[1.3] opacity-30"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ticker i metodave */}
        <MethodMarquee />

        {/* 2. Rreth Meje */}
        <section id="about" className="py-20 lg:py-32 relative">
          <div className="absolute top-1/2 -left-32 w-64 h-64 bg-teal-100 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="lg:col-span-2 relative"
              >
                <div className="absolute inset-0 bg-teal-500 rounded-[32px] translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                <div className="aspect-[4/5] rounded-[32px] bg-[#0F172A] overflow-hidden relative shadow-2xl group border-[4px] border-white">
                   <div className="absolute inset-0 z-10 hidden" id="about-fallback">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] to-[#1E293B]"></div>
                     <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                     <div className="absolute inset-x-6 bottom-6 text-white text-center">
                        <div className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">Ngarkoni Foton Tuaj</div>
                        <div className="text-xs leading-relaxed text-slate-400">
                          Ju lutemi ngarkoni foton në dosjen "public" me emrin `profile.jpg`.
                        </div>
                     </div>
                   </div>
                   <motion.img 
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.5 }}
                     src="/profile.jpg" 
                     alt="Ramë Hajraj" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                     onError={(e) => {
                       e.currentTarget.style.display = 'none';
                       const fallback = document.getElementById('about-fallback');
                       if (fallback) fallback.classList.remove('hidden');
                     }}
                   />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="lg:col-span-3 space-y-6"
              >
                <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-teal-600"></div>
                  Rreth Meje
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
                  Ekspertizë shkencore që ndërlidh kornizën teorike me inxhinierinë sasiore.
                </h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl mt-6 lg:mt-10">
                  <strong className="text-[#0F172A]">Ramë Hajraj</strong> është themelues i SPSS Academy dhe hulumtues i specializuar në fushën e analizës statistikore empirike, metodologjisë së kërkimit shkencor dhe definimit rigoroz të punimeve akademike.
                </p>
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  Me formim rresor akademik në kontabilitet, financa, administrim biznesi dhe strategji menaxheriale, ai theksueshëm operon si urë lidhëse me profilet si studentë të post-diplomik, kërkuesit të pavarur si dhe profesionistët gjatë vizatimit dhe përdorimit të platformës hulumtuese për një analizim thelbësor dhe mbrojtje koherente analitike.
                </p>
                
                <div className="pt-4 flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#0F172A]">10+</span>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Vite Përvojë</span>
                  </div>
                  <div className="w-px h-12 bg-slate-200 mx-4"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#0F172A]">100%</span>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Saktësi</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. SPSS Academy */}
        <section id="academy" className="py-20 lg:py-32 bg-[#0F172A] text-white relative overflow-hidden rounded-[40px] mx-6 lg:mx-8 mb-20 shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/30 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-4xl mx-auto"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">SPSS Academy</h2>
              
              <SpssAcademyAbout />
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
            >
               {[
                 { title: "Trajnime SPSS", desc: "Praktikë reale, nga baziket te avancuarat." },
                 { title: "Analiza Statistike", desc: "Testime precize të të dhënave." },
                 { title: "Dizajn Pyetësorësh", desc: "Konstruksion i vlefshëm dhe i besueshëm." },
                 { title: "Raporte Akademike", desc: "Strukturim dhe interpretim superior." }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                   <div className="h-1.5 w-8 bg-teal-500 rounded-full mb-4"></div>
                   <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                   <p className="text-slate-300 text-[11px] leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </motion.div>
          </div>
        </section>

        {/* 4. Services Section */}
        <section id="services" className="py-20 lg:py-40 bg-slate-50/80 backdrop-blur-3xl relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50/80 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-28">
              <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 flex items-center justify-center gap-2">
                <div className="w-8 h-[2px] bg-teal-400"></div>
                Vlera e Sistematizimit të të Dhënave
                <div className="w-8 h-[2px] bg-teal-400"></div>
              </h2>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mb-8 tracking-tight">Katalogu i Shërbimeve Akademike</h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">Konsulencë e profilizuar, e skicuar për të përmbushur çdo nevojë akademike dhe shkencore me saktësi metrikore dhe standarde të larta etiko-profesionale.</p>
            </div>

            {/* Bento Grid Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
              {[
                {
                  col: "lg:col-span-8",
                  icon: <BarChart className="w-8 h-8 text-teal-600" strokeWidth={1.5} />,
                  title: "Analiza statistikore nëpërmjet SPSS",
                  desc: "Përpunim, pastrim, analizë dhe interpretim kompleks i të dhënave sasiore për teza të ciklit universitar dhe pasuniversitar, si dhe për kërkime shkencore të pavarura."
                },
                {
                  col: "lg:col-span-4",
                  icon: <Target className="w-8 h-8 text-[#0F172A]" strokeWidth={1.5} />,
                  title: "Metodologji e Kërkimit Shkencor",
                  desc: "Asistencë rreshtore në definimin e kornizës teorike, shtjellimin e problemit kërkimor, ngritjen e hipotezave dhe derivimin e kampionit (mostrës)."
                },
                {
                  col: "lg:col-span-4",
                  icon: <FileText className="w-8 h-8 text-[#0F172A]" strokeWidth={1.5} />,
                  title: "Strukturimi i Instrumenteve Matëse",
                  desc: "Krijim dhe validim i instrumenteve matëse empirike thelbësore për matje kuantitative dhe hulumtime në terren."
                },
                {
                  col: "lg:col-span-4",
                  icon: <LineChart className="w-8 h-8 text-teal-600" strokeWidth={1.5} />,
                  title: "Zbërthimi dhe Interpretimi i Gjetjeve",
                  desc: "Interpretim thelbësor dhe shkencor i rezultateve: nga korrelacionet e thjeshta te modelet e avancuara të regresionit (lineare ose jo parametrike)."
                },
                {
                  col: "lg:col-span-4",
                  icon: <BookOpen className="w-8 h-8 text-[#0F172A]" strokeWidth={1.5} />,
                  title: "Raportimi Akademik",
                  desc: "Strukturimi dhe inkorporimi i gjetjeve në kapitujt konkludues, të draftuara në pajtim të plotë me rregulloret dhe manualet stilistike (p.sh., APA)."
                },
                {
                  col: "lg:col-span-12",
                  icon: <Presentation className="w-10 h-10 text-teal-600" strokeWidth={1.5} />,
                  title: "Programe Aftësuese në SPSS",
                  desc: "Sesione mentoringu individuale dhe formacion në grupe të ngushta. Duke rrokur zanafillën e futjes së të dhënave deri tek modelimet e avancuara statistikore, përmes një qasjeje ekskluzivisht pragmatike të aplikueshme për tregun e punës dhe atë shkencor."
                }
              ].map((service, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  key={idx}
                  className={`${service.col} bg-white p-8 lg:p-12 rounded-[40px] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(20,184,166,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between`}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 text-teal-900 scale-150">
                    {service.icon}
                  </div>
                  
                  <div className="w-16 h-16 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-500">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-extrabold text-[#0F172A] mb-4 tracking-tight group-hover:text-teal-600 transition-colors">{service.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{service.desc}</p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl from-teal-50 to-transparent rounded-tl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Method Section - Spiral Pathway */}
        <section id="method" className="py-20 lg:py-40 bg-white relative overflow-hidden">
          {/* Subtle scroll spiral decorative circle */}
          <motion.div 
            className="absolute top-0 right-[-10%] w-[60vw] h-[100%] border-[2px] border-dashed border-teal-100 rounded-full opacity-50 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            style={{ borderLeftColor: 'transparent', borderTopColor: 'transparent' }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-3">Metodika e Veprimit</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-12">Shtegu drejt saktësisë analitike.</h3>
                
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-teal-200 before:via-teal-400 before:to-transparent">
                  {[
                    { num: "01", title: "Qartësimi Konceptual", ref: "Shqyrtim i thelluar fillestar për stazhonimin e nevojave dhe definimin e mjedisit teorik kërkimor." },
                    { num: "02", title: "Sistematizimi i të Dhënave", ref: "Validimi, kodimi paraprak dhe skanimi dimensional i instrumenteve dhe bazës së të dhënave." },
                    { num: "03", title: "Ezekutimi i Modeleve Statistikore", ref: "Implementimi metrik në SPSS duke respektuar variancat dhe supozimet e testeve përkatëse." },
                    { num: "04", title: "Sinteza dhe Konkluzioni", ref: "Ekstraktimi i domethënies shkencore i kodifikuar theksueshëm në formatin akademik të dakorduar." }
                  ].map((step, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring' }}
                      className={`relative flex items-center gap-6 group ${idx % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-12 h-12 rounded-full md:absolute md:left-1/2 md:-translate-x-1/2 bg-white border-[3px] border-teal-50 flex items-center justify-center font-extrabold text-teal-600 shadow-md z-10 shrink-0 group-hover:bg-teal-600 group-hover:border-teal-200 group-hover:text-white transition-all duration-300"
                      >
                        {step.num}
                      </motion.div>
                      <div className={`pt-1 w-full md:w-[calc(50%-3rem)] ${idx % 2 === 1 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <h4 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h4>
                        <p className="text-slate-600 text-[13px] leading-relaxed">{step.ref}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative mt-12 lg:mt-0"
              >
                <div className="aspect-square bg-[#F1F5F9]/80 backdrop-blur-xl rounded-[40px] flex items-center justify-center p-8 md:p-12 border border-slate-100 shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)] overflow-hidden relative">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-200/30 via-transparent to-transparent"></div>
                   
                   <motion.div 
                     animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                     className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)] w-full max-w-sm relative z-10 border border-slate-100"
                   >
                     <div className="flex gap-2 mb-6">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                       <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
                     </div>
                     <div className="space-y-4">
                       <div className="h-4 bg-slate-100 rounded-full w-3/4 overflow-hidden relative">
                         <motion.div className="absolute top-0 left-0 bottom-0 bg-teal-400" initial={{width: '0%'}} whileInView={{width: '100%'}} transition={{duration: 1.5}}/>
                       </div>
                       <div className="h-4 bg-slate-100 rounded-full w-full overflow-hidden relative">
                         <motion.div className="absolute top-0 left-0 bottom-0 bg-teal-300" initial={{width: '0%'}} whileInView={{width: '80%'}} transition={{duration: 1.5, delay: 0.2}}/>
                       </div>
                       <div className="h-4 bg-slate-100 rounded-full w-5/6 overflow-hidden relative">
                         <motion.div className="absolute top-0 left-0 bottom-0 bg-[#0F172A]" initial={{width: '0%'}} whileInView={{width: '100%'}} transition={{duration: 1.5, delay: 0.4}}/>
                       </div>
                       <AnimatedTerminal />
                     </div>
                   </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. Why Choose Me */}
        <section className="py-20 lg:py-40 bg-[#0F172A] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-900/40 via-[#0F172A] to-[#0F172A] opacity-80"></div>
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[80vw] max-w-4xl aspect-square bg-teal-600/30 rounded-[100px] blur-[150px] pointer-events-none -mt-[20%]"
          />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20 lg:mb-24">
              <div className="max-w-3xl">
                <h2 className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-teal-400"></div>
                  Përse të Bashkëpunoni me SPSS Academy?
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">Merencë sublime në kurorëzimin e vokacionit tuaj shkencor.</h3>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {[
                { col: "lg:col-span-5", title: "Diskurs Profesional dhe Rigoroz", desc: "Çdo procedurë veprimi u bindet thellësisht postullateve të metodologjisë bashkëkohore të kërkimit, duke e ngjitur punimin tuaj në nivele të pashoqe reference.", icon: <BookOpen className="text-teal-400 w-8 h-8" /> },
                { col: "lg:col-span-7", title: "Demistifikim i Kompleksitetit Statistikor", desc: "Përfundimet tejkalojnë radhitjen mekanike të shifrave. Secili test, vlerë e p (p-value) dhe trend variativ i nënshtrohet një interpretimi racional, të qartë dhe koherent.", icon: <LineChart className="text-teal-400 w-8 h-8" /> },
                { col: "lg:col-span-4", title: "Rigorozitet Akademik", desc: "Përkushtim thelbësor te interpretimi eksakt, vërtetësia shkencore dhe boshti strukturor.", icon: <CheckCircle className="text-teal-400 w-8 h-8" /> },
                { col: "lg:col-span-4", title: "Përvojë e Avancuar", desc: "Mbi një dekadë asistence dhe mbarëvajtjeje projektesh me qindra hulumtues dhe entitete akademike.", icon: <Briefcase className="text-teal-400 w-8 h-8" /> },
                { col: "lg:col-span-4", title: "Konsulencë Konsistente", desc: "Mbështetje interaktive, vlerësim i përsëritur dhe prani e palëkundur deri në aktin e mbrojtjes apo dorëzimit final.", icon: <Users className="text-teal-400 w-8 h-8" /> }
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={idx} 
                  className={`${item.col} bg-[#1E293B]/50 backdrop-blur-sm border border-white/5 p-8 lg:p-12 rounded-[40px] hover:bg-[#1E293B] hover:border-teal-500/30 hover:shadow-[0_20px_50px_-12px_rgba(20,184,166,0.1)] transition-all group duration-500 relative overflow-hidden`}
                >
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-[28px] bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-teal-300 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-base leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Target Audience */}
        <section className="py-20 lg:py-40 bg-slate-50/50 backdrop-blur-3xl relative overflow-hidden">
          {/* Abstract background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center mb-20 lg:mb-24">
               <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 flex items-center justify-center gap-2">
                 <div className="w-8 h-[2px] bg-teal-400"></div>
                 Auditori i Synuar
                 <div className="w-8 h-[2px] bg-teal-400"></div>
               </h2>
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight">Për kë është ngritur kjo platformë mbështetëse?</h3>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto">
                {[
                  { name: "Studentëve (Cikli I dhe II)", title: "Asistencë Metodologjike për Teza Diplome", icon: <GraduationCap size={24} strokeWidth={1.5} /> },
                  { name: "Pretendentëve për Grada Shkencore", title: "Shtim Vlere përmes Modeleve Komplekse", icon: <BookOpen size={24} strokeWidth={1.5} /> },
                  { name: "Kërkuesve Shkencorë dhe Akademikëve", title: "Rishikim dhe Validim Strukturor", icon: <Lightbulb size={24} strokeWidth={1.5} /> },
                  { name: "Drejtimeve Universitare dhe Institucioneve", title: "Procesim e Menaxhim i Përqendruar", icon: <Building2 size={24} strokeWidth={1.5} /> },
                  { name: "Organiza Jo-qeveritare", title: "Sondazhe & Analiza Sasiore Thelbësore", icon: <Users size={24} strokeWidth={1.5} /> },
                  { name: "Sektorit Privat", title: "Intelekt Inteligjent i të Dhënave", icon: <Briefcase size={24} strokeWidth={1.5} /> }
                ].map((tag, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    key={idx} 
                    className="flex flex-col items-center text-center bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-[0_10px_40px_-15px_rgba(20,184,166,0.2)] hover:-translate-y-2 hover:border-teal-100 transition-all duration-500 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-200 transition-colors duration-300">
                      {tag.icon}
                    </div>
                    <div className="text-[#0F172A] font-extrabold text-lg mb-2">{tag.name}</div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-widest leading-relaxed">
                      {tag.title}
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 7.5 Success Stats & Përshtypjet */}
        <section className="py-20 lg:py-40 bg-white relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-teal-50 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-teal-400"></div>
                  Kredibilitet i Verifikuar
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-8 leading-tight">Pasqyrimi i angazhimit përmes fakteve dhe feedback-ut empirik.</h3>
                <p className="text-base text-slate-600 leading-relaxed mb-12 max-w-xl">
                  Piramida e cilësisë sime nuk matet veçmas nga përpikmëria e output-it statistikor, por pasqyrohet në vërtetësinë e vlerësimeve nga ata që më besuan materialin bazë të gjurmimit shkencor.
                </p>

                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <motion.div whileHover={{ y: -5 }} className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-100 rounded-bl-[100px] opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-2 font-serif">500+</div>
                    <div className="text-xs font-bold text-teal-600 uppercase tracking-widest">Gjurmime të Përfunduara</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="bg-teal-500 text-white p-8 rounded-[32px] overflow-hidden relative group">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-[100px] opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="text-4xl md:text-5xl font-extrabold mb-2 font-serif">99%</div>
                    <div className="text-xs font-bold text-teal-100 uppercase tracking-widest">Aprovim Akademik</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="bg-[#0F172A] text-white p-8 rounded-[32px] overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/20 rounded-bl-[100px] opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="text-4xl md:text-5xl font-extrabold mb-2 font-serif">50+</div>
                    <div className="text-xs font-bold text-teal-400 uppercase tracking-widest">Sesione Formësimi</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] overflow-hidden relative group">
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100 rounded-tr-[100px] opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-2 font-serif">24/7</div>
                    <div className="text-xs font-bold text-teal-600 uppercase tracking-widest">Suport Pandërprerë</div>
                  </motion.div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 text-teal-100/50 rotate-12 pointer-events-none">
                  <MessageSquareQuote size={180} strokeWidth={1} />
                </div>
                <div className="space-y-6 relative z-10 w-full md:w-[90%] md:ml-auto">
                  {[
                    { text: "Bashkëpunimi me Ramën ishte pika kthesë në punimin tim të masterit. Shpjegimi rreth regresionit ishte i qartë dhe jo thjesht një listë me numra.", name: "Student, UBT", role: "Master në Menaxhim" },
                    { text: "Jashtëzakonisht profesional! Ai e kupton saktësisht se çfarë kërkojnë mentorët dhe rregullon të dhënat që raporti të flasë gjuhën akademike.", name: "Kandidat për PhD", role: "Universiteti i Tiranës" }
                  ].map((review, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      key={i} 
                      className="bg-white/80 backdrop-blur-md p-8 lg:p-10 rounded-[40px] border border-slate-100 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(20,184,166,0.2)] transition-all duration-500 group"
                    >
                      <div className="flex text-amber-400 mb-6">
                        {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" strokeWidth={0} />)}
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed font-serif italic mb-8">"{review.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-extrabold text-lg border border-teal-100 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-base font-bold text-[#0F172A]">{review.name}</div>
                          <div className="text-[11px] uppercase tracking-widest text-teal-600 mt-1 font-bold">{review.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7.6 FAQ Section */}
        <section className="py-20 lg:py-40 bg-slate-50/50 backdrop-blur-3xl relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 flex items-center justify-center gap-2">
                 <div className="w-8 h-[2px] bg-teal-400"></div>
                 Seksioni Informativ
                 <div className="w-8 h-[2px] bg-teal-400"></div>
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F172A]">Pyetje të Shpeshta dhe Përgjigje Konstruktive</h3>
            </div>
            
            <div className="space-y-4">
              <FAQItem 
                question="A përfshihet hartimi i plotë tekstual i tezës pranë shërbimeve tuaja?" 
                answer="Jo. SPSS Academy fokusohet rreptësisht në inxhinierinë e të dhënave, trajtimin statistikor dhe interpretimin shkencor të gjetjeve. Pjesën rishikuese të literaturës dhe mbrujtjen unifikuese metodologjike të tekstit e menaxhon i zoti i punimit."
              />
              <FAQItem 
                question="Sa kohëzgjatje implikon konvertimi dhe përpunimi sasior i të dhënave?" 
                answer="Baza parametrike kohore deduktohet nga niveli i kompleksitetit, vëllimi i makro-variablave dhe faza e pastrimit të instaluar paraprakisht. Nën kondita standarde, afatet përkufizohen ndërmjet një dritareje 3 deri 7 ditë pune."
              />
              <FAQItem 
                question="A mbulon aspekti gjeografik ofrimin e formimit jashtë territorit të Kosovës?" 
                answer="Pohueshëm. Infrastruktura jonë i zhvillon konsultat dhe seancat mësimore po aq intensivisht në areale virtuale (Zoom / Google Meet), duke iu ekspozuar klientelës kudo që stacionohet pa deficite kualitative."
              />
              <FAQItem 
                question="Në cilën gjuhë dorëzohen strukturat finale të raporteve statistikore?" 
                answer="E gjithë mbështjellja thelbësore raportuese, indikatorët me tabelat, si dhe sqarimet interpretuese formësohen përmes platformës APA (ose manualut të preferuar) dhe ofrohen sipas kërkesave: në gjuhën Shqipe apo atë Angleze."
              />
              <FAQItem 
                question="Mbi çfarë matësish hartohet oferta e shërbimit dhe politikat aktuale të çmimit?" 
                answer="Konstrukti normativ përcaktohet nga metrika të tilla si: numri i modeleve të testuara, grada e nivelit (Bachelor, Master, PhD), kampionimi si dhe presioni kohor. Për këtë shkak, praktikohet një shqyrtim primar pa detyrime i vlerësuar thellësisht para fillimit."
              />
            </div>
          </div>
        </section>

        {/* 8. Contact Section */}
        <section id="contact" className="py-20 lg:py-40 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent opacity-50"></div>
          
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0F172A] rounded-[40px] p-8 md:p-16 text-white text-center shadow-[0_20px_50px_-12px_rgba(15,23,42,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="w-20 h-20 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 backdrop-blur-md relative z-10">
                <Mail className="w-10 h-10 text-teal-400" />
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight relative z-10">
                Sipërmarrje për një Bashkëpunim të Frytshëm
              </h2>
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-16 relative z-10 font-medium">
                Për konsultime të thelluara, aplikime makro të analizave sasiore apo forma trajnimi empirike në SPSS dhe metodikë kërkimore, inkurajoheni të adresoheni përmes rrugëve kontaktuese.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 relative z-10">
                 <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[24px] hover:bg-white/10 transition-colors">
                   <div className="text-[10px] font-bold tracking-widest text-teal-400 uppercase mb-2">Profil Konsulenti</div>
                   <div className="text-lg font-bold text-white">Ramë Hajraj</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[24px] hover:bg-teal-500 hover:border-teal-400 hover:scale-105 transition-all duration-300 group cursor-pointer" onClick={() => window.location.href = 'mailto:rame.hajraj@unhz.eu'}>
                   <div className="text-[10px] font-bold tracking-widest text-teal-400 group-hover:text-teal-100 uppercase mb-2">Kanal i Komunikimit Direkt</div>
                   <div className="text-lg font-bold text-white group-hover:text-white truncate">
                     rame.hajraj@unhz.eu
                   </div>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[24px] hover:bg-white/10 transition-colors sm:col-span-2 md:col-span-1">
                   <div className="text-[10px] font-bold tracking-widest text-teal-400 uppercase mb-2">Shtrirja Kohore dhe Hapësinore</div>
                   <div className="text-lg font-bold text-white">Sesione Konsulence Virtale</div>
                 </div>
              </div>
              
              <div className="flex justify-center gap-4 relative z-10 mt-8">
                <a href="https://www.facebook.com/ramehajraj/" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 w-14 h-14 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 transition-all duration-300 text-teal-400 hover:text-white" aria-label="Facebook">
                  <Facebook size={24} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/in/ramehajraj/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 w-14 h-14 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 transition-all duration-300 text-teal-400 hover:text-white" aria-label="LinkedIn">
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <ScrollToTop />

      {/* 9. Footer */}
      <footer className="bg-white text-slate-500 py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-medium uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
            &copy; {new Date().getFullYear()} <strong className="text-teal-600">Ramë Hajraj</strong> &ndash; SPSS Academy
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#0F172A]">
              <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-teal-600 transition-colors">Rreth meje</a>
              <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-teal-600 transition-colors">Shërbimet</a>
              <a href="#academy" onClick={(e) => scrollTo(e, 'academy')} className="hover:text-teal-600 transition-colors">SPSS Academy</a>
            </div>
            
            <div className="w-px h-6 bg-slate-200 mx-2 hidden md:block"></div>
            
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.facebook.com/ramehajraj/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={2} />
              </a>
              <a href="https://www.linkedin.com/in/ramehajraj/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
