import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ lang, setLang, t, activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: t.home },
    { id: 'notice', name: t.notice },
    { id: 'community', name: t.community },
    { id: 'services', name: t.services },
    { id: 'about', name: t.about },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass-dark py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center px-4">
        {/* Brand Section - Balanced Branding */}
        <div
          onClick={() => setActiveTab('home')}
          className="flex flex-col cursor-pointer group shrink-0"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-primary font-black text-sm shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              BM
            </div>
            <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              방림명지로드힐
            </span>
          </div>
          <span className="text-[10px] text-secondary font-bold tracking-[0.2em] uppercase opacity-80 mt-0.5">
            Aurum Residences
          </span>
        </div>

        {/* Desktop Menu - Single Line */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`text-base font-bold transition-all hover:text-secondary relative group ${activeTab === link.id
                  ? 'text-secondary font-black'
                  : (isScrolled ? 'text-white' : 'text-white drop-shadow-md')
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-secondary transition-transform duration-300 ${activeTab === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          ))}

          <div className="flex items-center gap-4 ml-6 pl-6 border-l border-white/20">
            <button
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className={`text-xs font-black px-3 py-1.5 rounded-lg border transition-all ${isScrolled
                  ? 'text-white border-white/20 hover:bg-white/10'
                  : 'text-white border-white/40 hover:bg-white/10'
                }`}
            >
              {lang === 'ko' ? 'EN' : 'KO'}
            </button>
            <button className="bg-secondary text-primary px-6 py-2 rounded-full font-black text-sm hover:bg-white hover:text-primary transition-all shadow-lg active:scale-95">
              {t.login}
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="text-white text-xs font-black border border-white/20 px-2 py-1 rounded"
          >
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Using display: none when closed to prevent redundancy issues */}
      <div className={`lg:hidden fixed inset-0 z-[-1] bg-primary/98 transition-all duration-500 ${isMenuOpen ? 'flex flex-col opacity-100' : 'hidden opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsMenuOpen(false);
              }}
              className={`text-2xl font-black ${activeTab === link.id ? 'text-secondary' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <button className="mt-4 bg-secondary text-primary px-10 py-4 rounded-full font-black text-xl">
            {t.login}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
