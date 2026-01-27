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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass-dark py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}>
      <div className="container flex justify-between items-center px-4">
        {/* Logo Section */}
        <div
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-primary font-black text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            A
          </div>
          <span className={`text-2xl font-black tracking-tighter hidden sm:block ${isScrolled ? 'text-white' : 'text-white drop-shadow-lg'}`}>
            AURUM <span className="text-secondary tracking-widest font-bold ml-1">RESIDENCES</span>
          </span>
        </div>

        {/* High Profile Single Line Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12 lg:gap-16">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`text-lg font-black transition-all hover:text-secondary relative overflow-hidden group ${activeTab === link.id
                  ? 'text-secondary'
                  : (isScrolled ? 'text-white' : 'text-white drop-shadow-md')
                }`}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transition-transform duration-500 ${activeTab === link.id ? 'translate-x-0' : '-translate-x-[101%] group-hover:translate-x-0'}`} />
            </button>
          ))}

          <div className="flex items-center gap-6 border-l border-white/20 pl-16">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className={`flex items-center gap-2 font-black text-sm px-4 py-2 rounded-xl transition-all border ${isScrolled
                  ? 'text-white border-white/20 hover:bg-white/10'
                  : 'text-white border-white/40 hover:bg-white/10 drop-shadow-lg'
                }`}
            >
              <Globe size={18} />
              {lang === 'ko' ? 'ENGLISH' : 'KOREAN'}
            </button>

            <button className="bg-secondary text-primary px-8 py-3 rounded-full font-black text-lg hover:bg-white hover:text-primary transition-all shadow-xl active:scale-95">
              {t.login}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-6 lg:hidden">
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="text-white font-black text-sm drop-shadow-lg border border-white/20 px-3 py-1 rounded-lg"
          >
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>
          <button
            className="text-white drop-shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[-1] bg-primary/95 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsMenuOpen(false);
              }}
              className={`text-3xl font-black ${activeTab === link.id ? 'text-secondary' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="h-px w-20 bg-white/20 my-4" />
          <button className="bg-secondary text-primary px-12 py-5 rounded-full font-black text-2xl shadow-2xl">
            {t.login}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
