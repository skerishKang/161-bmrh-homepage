import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Bell, Users, Calendar, Info, Globe } from 'lucide-react';

const Navbar = ({ lang, setLang, t }) => {
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
    { name: t.home, icon: <Home size={18} />, href: '#' },
    { name: t.notice, icon: <Bell size={18} />, href: '#' },
    { name: t.community, icon: <Users size={18} />, href: '#' },
    { name: t.services, icon: <Calendar size={18} />, href: '#' },
    { name: t.about, icon: <Info size={18} />, href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-dark py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-primary font-black text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            A
          </div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-white' : 'text-primary'}`}>
            AURUM <span className="text-secondary">RESIDENCES</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 font-bold text-lg transition-all hover:text-secondary hover:-translate-y-0.5 ${isScrolled ? 'text-white' : 'text-primary drop-shadow-sm'
                }`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}

          <div className="w-px h-6 bg-white/20 mx-2" />

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className={`flex items-center gap-2 font-black px-4 py-2 rounded-xl transition-all border ${isScrolled
                ? 'text-white border-white/20 hover:bg-white/10'
                : 'text-primary border-primary/10 hover:bg-primary/5'
              }`}
          >
            <Globe size={18} />
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>

          <button className="bg-secondary text-primary px-8 py-3 rounded-full font-black text-lg hover:bg-secondary-light hover:shadow-xl hover:scale-105 transition-all shadow-lg active:scale-95">
            {t.login}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-6 md:hidden">
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className={`font-black text-lg ${isScrolled ? 'text-white' : 'text-primary'}`}
          >
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>
          <button
            className={`${isScrolled ? 'text-white' : 'text-primary'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden glass-dark absolute top-full left-0 right-0 p-8 flex flex-col gap-6 animate-fade-in shadow-2xl border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-4 text-white text-xl font-bold p-4 rounded-2xl hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-secondary">{link.icon}</span>
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <button className="bg-secondary text-primary w-full py-5 rounded-2xl font-black text-xl shadow-xl">
            {t.login}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
