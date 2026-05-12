import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  BarChart, PieChart, FileText, 
  Users, CheckCircle, GraduationCap, 
  Mail, BookOpen, Presentation, 
  Briefcase, Target, Building2,
  LineChart, Menu, X, ArrowRight, ChevronRight,
  Database, Network, Lightbulb, TrendingUp
} from 'lucide-react';
import { FloatingFormulas } from './components/FloatingFormulas';
import { AnimatedTerminal } from './components/AnimatedTerminal';

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
    <div className="font-sans text-[#1E293B] bg-[#F1F5F9] antialiased min-h-screen selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden">
      
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
              Më Kontakto
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
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => scrollTo(e, link.id)}
              className="text-xl font-medium text-slate-800 border-b border-slate-100 pb-4"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

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
                Konsulencë profesionale në <span className="text-teal-600 underline decoration-2 underline-offset-4">SPSS</span> dhe <span className="text-teal-600 underline decoration-2 underline-offset-4">metodologji</span> të hulumtimit shkencor
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 italic relative z-10">
                "Unë jam Ramë Hajraj, themelues i SPSS Academy dhe konsulent i pavarur për analiza statistikore, metodologji kërkimore dhe strukturim profesional të punimeve akademike."
              </p>
              
              <div className="flex flex-wrap items-center gap-3 relative z-10">
                <a 
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                  className="flex items-center gap-2 bg-[#0F172A] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-slate-300 active:scale-95 group hover:bg-[#1E293B]"
                >
                  Shiko shërbimet
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => scrollTo(e, 'contact')}
                  className="flex items-center gap-2 bg-white text-[#0F172A] border border-slate-200 px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-50 transition-all active:scale-95"
                >
                  Më kontakto
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

        {/* 2. Rreth Meje */}
        <section id="about" className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="aspect-[4/5] rounded-[32px] bg-[#0F172A] overflow-hidden relative shadow-sm group">
                   <div className="absolute inset-0 z-10 hidden" id="about-fallback">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] to-[#1E293B]"></div>
                     <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                     <div className="absolute inset-x-6 bottom-6 text-white text-center">
                        <div className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">Ngarkoni Foton Tuaj</div>
                        <div className="text-xs leading-relaxed text-slate-400">
                          Keni dhënë një link drejt faqes së Facebook, jo foto direkt. <br/><br/>
                          Ju lutemi shkarkoni foton nga Facebook dhe **ngarkojeni atë në dosjen "public"** me emrin `profile.jpg` për ta shfaqur këtu.
                        </div>
                     </div>
                   </div>
                   <img 
                     src="/profile.jpg" 
                     alt="Ramë Hajraj" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     onError={(e) => {
                       e.currentTarget.style.display = 'none';
                       const fallback = document.getElementById('about-fallback');
                       if (fallback) fallback.classList.remove('hidden');
                     }}
                   />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 space-y-6"
              >
                <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase">Rreth Meje</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
                  Ekspertizë që ndërlidh teorinë akademike me zbatimin praktik.
                </h3>
                <div className="w-8 h-1 bg-teal-500 rounded-full"></div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mt-6">
                  Ramë Hajraj është themelues i SPSS Academy dhe konsulent i pavarur në fushën e analizës statistikore me SPSS, metodologjisë së hulumtimit shkencor dhe strukturimit të punimeve akademike.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Me formim akademik në menaxhim, administrim biznesi, kontabilitet dhe financa, ai ndihmon studentë, studiues dhe profesionistë të kuptojnë, analizojnë dhe prezantojnë të dhënat e tyre në mënyrë të qartë, shkencore dhe profesionale.
                </p>
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
               className="max-w-3xl mx-auto"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">SPSS Academy</h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
                Një iniciativë edukative dhe konsulente e dedikuar për të mbështetur studentët, kërkuesit dhe akademikët në rrugëtimin e tyre shkencor.
              </p>
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
        <section id="services" className="py-20 lg:py-32 bg-[#F1F5F9]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-3">Shpërblimi i të dhënave</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">Katalogu i Shërbimeve</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Konsulencë e specializuar për të përmbushur çdo nevojë akademike dhe kërkimore me saktësi absolute.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart className="w-6 h-6 text-[#0F172A]" />,
                  title: "Analiza statistikore me SPSS",
                  desc: "Përgatitje, analizë dhe interpretim i të dhënave për punime bachelor, master, doktoraturë dhe projekte kërkimore."
                },
                {
                  icon: <Target className="w-6 h-6 text-teal-600" />,
                  title: "Metodologji e hulumtimit shkencor",
                  desc: "Mbështetje në përcaktimin e problemit kërkimor, pyetjeve kërkimore, hipotezave, mostrës dhe metodave të analizës."
                },
                {
                  icon: <FileText className="w-6 h-6 text-slate-500" />,
                  title: "Dizajnimi i pyetësorëve",
                  desc: "Hartim dhe strukturim profesional i pyetësorëve për hulumtime akademike dhe praktike."
                },
                {
                  icon: <LineChart className="w-6 h-6 text-teal-600" />,
                  title: "Interpretimi i rezultateve",
                  desc: "Shpjegim i qartë dhe akademik i tabelave, grafikëve, korelacioneve, regresioneve dhe testeve statistikore."
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-slate-500" />,
                  title: "Raporte akademike",
                  desc: "Ndihmë në përgatitjen e kapitullit të rezultateve, diskutimit dhe përfundimeve sipas standardeve akademike."
                },
                {
                  icon: <Presentation className="w-6 h-6 text-[#0F172A]" />,
                  title: "Trajnime në SPSS",
                  desc: "Trajnime individuale ose grupore për përdorimin praktik të SPSS nga niveli bazë deri te analizat më të avancuara."
                }
              ].map((service, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F1F5F9] border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] mb-3">{service.title}</h4>
                  <p className="text-slate-600 text-[13px] leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Method Section */}
        <section id="method" className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-3">Si punoj?</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-8">Nga koncepti abstrakt tek raporti final dhe thekset kryesore.</h3>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-200 before:via-teal-200 before:to-transparent">
                  {[
                    { num: "01", title: "Kuptimi i temës dhe qëllimit të hulumtimit", ref: "Diskutimi fillestar për të përcaktuar qartë nevojat dhe kuadrin teorik." },
                    { num: "02", title: "Kontrollimi i të dhënave dhe strukturës metodologjike", ref: "Verifikim i pyetësorëve dhe validimi i strukturës." },
                    { num: "03", title: "Analiza statistikore dhe interpretimi profesional", ref: "Zbatimi i modeleve në SPSS me saktësi absolute." },
                    { num: "04", title: "Përgatitja e raportit final me rekomandime të qarta", ref: "Dokumentim rigoroz sipas formateve të pranuara akademike." }
                  ].map((step, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="relative flex items-start gap-6 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-teal-50 flex items-center justify-center font-bold text-teal-600 shadow-sm z-10 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        {step.num}
                      </div>
                      <div className="pt-2.5">
                        <h4 className="text-sm font-bold text-[#0F172A] mb-1">{step.title}</h4>
                        <p className="text-slate-600 text-[13px] leading-relaxed">{step.ref}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-[#F1F5F9] rounded-full flex items-center justify-center p-12 border border-slate-100">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent"></div>
                   
                   <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm relative z-10 border border-slate-100 transform -rotate-3 hover:rotate-0 transition-all">
                     <div className="flex gap-2 mb-4">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                       <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                     </div>
                     <div className="space-y-4">
                       <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                       <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                       <div className="h-4 bg-slate-100 rounded-full w-5/6"></div>
                       <AnimatedTerminal />
                     </div>
                   </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why Choose Me */}
        <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video bg-teal-600/20 rounded-full blur-[120px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between mb-16">
              <div className="max-w-xl">
                <h2 className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-3">Pse të zgjedhësh SPSS Academy?</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold">Vlerë e shtuar për rrugëtimin tuaj akademik dhe profesional.</h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {[
                { title: "Qasje profesionale dhe akademike", icon: <CheckCircle className="text-teal-400 w-5 h-5" /> },
                { title: "Shpjegim i thjeshtë i analizave komplekse", icon: <CheckCircle className="text-teal-400 w-5 h-5" /> },
                { title: "Fokus në cilësi, strukturë dhe interpretim", icon: <CheckCircle className="text-teal-400 w-5 h-5" /> },
                { title: "Mbështetje për studentë dhe studiues", icon: <CheckCircle className="text-teal-400 w-5 h-5" /> },
                { title: "Përvojë në menaxhim, të dhëna dhe metodologji", icon: <CheckCircle className="text-teal-400 w-5 h-5" /> },
                { title: "Komunikim i qartë dhe praktik", icon: <CheckCircle className="text-teal-400 w-5 h-5" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div className="text-sm font-semibold text-slate-300">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Target Audience */}
        <section className="py-20 lg:py-32 bg-[#F1F5F9]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
             <h2 className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-3">Segmenti i Mbështetjes</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-16">Kujt i shërben kjo faqe?</h3>

             <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "Studentëve (Bachelor / Master)", icon: <GraduationCap size={18}/> },
                  { name: "Kandidatëve për Doktoraturë", icon: <BookOpen size={18}/> },
                  { name: "Studiuesve të Pavarur", icon: <Lightbulb size={18}/> },
                  { name: "Profesorëve & Institucioneve", icon: <Building2 size={18}/> },
                  { name: "Organizatave (Anketa)", icon: <Users size={18}/> },
                  { name: "Bizneseve (Analiza të dhënash)", icon: <Briefcase size={18}/> }
                ].map((tag, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx} 
                    className="flex items-center gap-2 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100 font-medium text-slate-700 hover:border-teal-200 hover:bg-teal-50 transition-colors"
                  >
                    <span className="text-teal-600">{tag.icon}</span>
                    {tag.name}
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 8. Contact Section */}
        <section id="contact" className="py-20 lg:py-32 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal-100">
              <Mail className="w-10 h-10 text-teal-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-6">Më kontaktoni</h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
              Për bashkëpunim, konsulencë ose trajnim në SPSS dhe metodologji kërkimore, mund të më kontaktoni drejtpërdrejt përmes emailit.
            </p>

            <div className="bg-[#F1F5F9] p-8 sm:p-12 rounded-[32px] border border-slate-100 inline-block text-left w-full max-w-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="space-y-6">
                 <div>
                   <div className="text-[10px] font-bold tracking-widest text-teal-600 uppercase mb-1">Emri i plotë</div>
                   <div className="text-xl font-bold text-[#0F172A]">Ramë Hajraj</div>
                 </div>
                 <div className="w-full h-px bg-slate-200"></div>
                 <div>
                   <div className="text-[10px] font-bold tracking-widest text-teal-600 uppercase mb-1">Email Profesional</div>
                   <a href="mailto:rame.hajraj@unhz.eu" className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
                     rame.hajraj@unhz.eu
                   </a>
                 </div>
                 <div className="w-full h-px bg-slate-200"></div>
                 <div>
                   <div className="text-[10px] font-bold tracking-widest text-teal-600 uppercase mb-1">Zona e Shërbimit</div>
                   <div className="text-sm font-semibold text-slate-700">Konsulencë Online (Shqip & Anglisht)</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* 9. Footer */}
      <footer className="bg-white text-slate-500 py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-medium uppercase tracking-widest text-[#0F172A]">
            &copy; 2026 <strong className="text-teal-600">Ramë Hajraj</strong> &ndash; SPSS Academy. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-[#0F172A]">
            <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-teal-600 transition-colors">Rreth meje</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-teal-600 transition-colors">Shërbimet</a>
            <a href="#academy" onClick={(e) => scrollTo(e, 'academy')} className="hover:text-teal-600 transition-colors">SPSS Academy</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-teal-600 transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
