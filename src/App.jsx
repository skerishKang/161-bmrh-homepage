import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { translations } from './constants/translations';
import { Info, MapPin, Home, Calendar, Thermometer, Building, ExternalLink } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('ko');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background pb-32">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <Hero t={t.hero} actionsT={t.actions} />

      {/* Complex Info Section */}
      <section className="mt-40 container scroll-mt-24" id="complex-info">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">{t.complexInfo.subtitle}</h2>
          <h3 className="text-4xl font-extrabold text-primary">{t.complexInfo.title}</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <InfoCard icon={<MapPin />} label={t.complexInfo.address} value={t.complexInfo.addressValue} />
          <InfoCard icon={<Home />} label={t.complexInfo.households} value={t.complexInfo.householdsValue} />
          <InfoCard icon={<Calendar />} label={t.complexInfo.year} value={t.complexInfo.yearValue} />
          <InfoCard icon={<Thermometer />} label={t.complexInfo.heating} value={t.complexInfo.heatingValue} />
          <InfoCard icon={<Building />} label={t.complexInfo.floors} value={t.complexInfo.floorsValue} />
          <InfoCard icon={<Info />} label={t.complexInfo.builder} value={t.complexInfo.builderValue} />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.k-apt.go.kr/kaptinfo/openkaptinfo.do"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-all shadow-lg"
          >
            <ExternalLink size={20} />
            {t.complexInfo.kapt}
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-40 container">
        <div className="flex justify-between items-end mb-10 px-4">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">GALLERY</h2>
            <h3 className="text-4xl font-extrabold text-primary">{lang === 'ko' ? '단지 갤러리' : 'Complex Gallery'}</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 overflow-hidden rounded-[2rem]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-accent overflow-hidden group cursor-pointer relative">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10" />
              <div className="w-full h-full bg-slate-200 flex items-center justify-center text-text-muted italic group-hover:scale-110 transition-transform duration-700">
                Photo {i}
              </div>
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  View Large
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-text-muted px-4">
          {lang === 'ko' ? '* 현재 이미지 검색 및 연동 문제로 인해 실제 사진은 외부 링크를 통해 확인해 주세요.' : '* Please check real photos via external links due to current image integration limitations.'}
        </p>
      </section>

      {/* Community Section Preview */}
      <section className="mt-40 container">
        <div className="flex justify-between items-end mb-10 px-4">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">{t.community.subtitle}</h2>
            <h3 className="text-4xl font-extrabold text-primary">{t.community.title}</h3>
          </div>
          <button className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
            {t.community.viewAll}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[
            { tag: t.community.tags.notice, title: lang === 'ko' ? '단지 내 엘리베이터 정기 점검 안내 (1/30)' : 'Regular Elevator Maintenance Notice (1/30)', date: '2026.01.27' },
            { tag: t.community.tags.news, title: lang === 'ko' ? '설 연휴 공동 현관 주차장 운영 계획 건' : 'Lunar New Year Parking Lot Operation Plan', date: '2026.01.25' },
            { tag: t.community.tags.vote, title: lang === 'ko' ? '[공고] 제4기 입주자대표회의 선거 결과' : '[Notice] 4th Council Election Results', date: '2026.01.24' }
          ].map((item, i) => (
            <div key={i} className="bg-white border-l-4 border-secondary p-8 rounded-r-xl shadow-sm hover:shadow-xl transition-all cursor-pointer border-y border-r border-border">
              <span className="inline-block bg-accent px-3 py-1 rounded text-xs font-bold text-primary mb-4">{item.tag}</span>
              <h4 className="text-xl font-bold mb-4 line-clamp-2 leading-snug">{item.title}</h4>
              <p className="text-text-muted text-sm">{item.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-40 bg-primary py-20 text-white">
        <div className="container grid md:grid-cols-4 gap-12 px-4">
          <div className="col-span-2">
            <h3 className="text-3xl font-black mb-8 text-white">AURUM <span className="text-secondary">RESIDENCES</span></h3>
            <p className="text-white/60 mb-8 max-w-sm text-lg leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all cursor-pointer font-bold">FB</div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all cursor-pointer font-bold">IG</div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all cursor-pointer font-bold">LI</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-secondary uppercase tracking-widest text-sm">{t.footer.office}</h4>
            <ul className="space-y-4 text-white/60 text-lg">
              <li>{t.footer.contact}</li>
              <li>{t.footer.hours}</li>
              <li>{t.footer.holiday}</li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-secondary uppercase tracking-widest text-sm">{t.footer.services}</h4>
            <ul className="space-y-4 text-white/60 text-lg">
              <li className="hover:text-secondary cursor-pointer transition-colors">{t.actions.booking}</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">{lang === 'ko' ? '관리비 조회' : 'Management Fee'}</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">{t.community.title}</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">{t.actions.voting}</li>
            </ul>
          </div>
        </div>
        <div className="container mt-20 pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          &copy; 2026 Aurum Residences. All Rights Reserved.
        </div>
      </footer>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
        
        .flex { display: flex; }
        .grid { display: grid; }
        .inline-flex { display: inline-flex; }
        .hidden { display: none; }
        @media (min-width: 768px) { .md\\:flex { display: flex; } .md\\:grid { display: grid; } .md\\:hidden { display: none; } }
        @media (min-width: 1024px) { .lg\\:grid { display: grid; } }
        
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .items-end { align-items: flex-end; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .flex-col { flex-direction: column; }
        .flex-grow { flex-grow: 1; }
        .flex-wrap { flex-wrap: wrap; }
        
        .bg-white { background-color: white; }
        .bg-white\\/95 { background-color: rgba(255, 255, 255, 0.95); }
        .bg-primary { background-color: var(--primary); }
        .bg-primary-light { background-color: var(--primary-light); }
        .bg-primary\\/5 { background-color: rgba(0, 35, 71, 0.05); }
        .bg-secondary { background-color: var(--secondary); }
        .bg-secondary\\/20 { background-color: rgba(212, 175, 55, 0.2); }
        .bg-accent { background-color: var(--accent); }
        .bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1); }
        .bg-primary\\/90 { background-color: rgba(0, 35, 71, 0.9); }
        .bg-primary\\/30 { background-color: rgba(0, 35, 71, 0.3); }
        .bg-black\\/10 { background-color: rgba(0, 0, 0, 0.1); }
        .bg-slate-200 { background-color: #e2e8f0; }
        .bg-transparent { background-color: transparent; }
        
        .text-white { color: white; }
        .text-primary { color: var(--primary); }
        .text-secondary { color: var(--secondary); }
        .text-text-muted { color: var(--text-muted); }
        .text-white\\/60 { color: rgba(255,255,255,0.6); }
        .text-white\\/40 { color: rgba(255,255,255,0.4); }
        .text-white\\/80 { color: rgba(255,255,255,0.8); }
        
        .p-2 { padding: 0.5rem; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-5 { padding: 1.25rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .pt-10 { padding-top: 2.5rem; }
        .pt-24 { padding-top: 6rem; }
        .pb-1 { padding-bottom: 0.25rem; }
        .pb-32 { padding-bottom: 8rem; }
        
        .m-2 { margin: 0.5rem; }
        .mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mt-12 { margin-top: 3rem; }
        .mt-auto { margin-top: auto; }
        .mt-20 { margin-top: 5rem; }
        .mt-40 { margin-top: 10rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-16 { margin-bottom: 4rem; }
        .max-w-sm { max-width: 24rem; }
        .max-w-xl { max-width: 36rem; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; }
        
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-5 { gap: 1.25rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .gap-10 { gap: 2.5rem; }
        .gap-12 { gap: 3rem; }
        
        .w-2 { width: 0.5rem; }
        .h-2 { height: 0.5rem; }
        .w-px { width: 1px; }
        .h-px { height: 1px; }
        .w-6 { width: 1.5rem; }
        .h-6 { height: 1.5rem; }
        .w-10 { width: 2.5rem; }
        .h-10 { height: 2.5rem; }
        .w-12 { width: 3rem; }
        .h-12 { height: 3rem; }
        .w-16 { width: 4rem; }
        .h-16 { height: 4rem; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .aspect-square { aspect-ratio: 1 / 1; }
        .min-h-screen { min-height: 100vh; }
        .min-h-\[90vh\] { min-height: 90vh; }
        .min-h-\[95vh\] { min-height: 95vh; }
        .scroll-mt-24 { scroll-margin-top: 6rem; }
        
        .rounded { border-radius: 0.25rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-\[2rem\] { border-radius: 2rem; }
        .rounded-r-xl { border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem; }
        .rounded-full { border-radius: 9999px; }
        
        .font-normal { font-weight: 400; }
        .font-medium { font-weight: 500; }
        .font-bold { font-weight: 700; }
        .font-black { font-weight: 900; }
        .font-extrabold { font-weight: 800; }
        
        .text-xs { font-size: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .text-base { font-size: 1rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-5xl { font-size: 3rem; }
        .text-7xl { font-size: 4.5rem; }
        .text-8xl { font-size: 6rem; }
        .italic { font-style: italic; }
        
        .shadow-sm { box-shadow: var(--shadow-sm); }
        .shadow-md { box-shadow: var(--shadow); }
        .shadow-lg { box-shadow: var(--shadow-lg); }
        .shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
        
        .fixed { position: fixed; }
        .absolute { position: absolute; }
        .relative { position: relative; }
        .top-0 { top: 0; }
        .bottom-4 { bottom: 1rem; }
        .left-0 { left: 0; }
        .left-4 { left: 1rem; }
        .right-0 { right: 0; }
        .top-full { top: 100%; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .z-0 { z-index: 0; }
        .z-10 { z-index: 10; }
        .z-20 { z-index: 20; }
        .z-50 { z-index: 50; }
        
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-300 { transition-duration: 300ms; }
        .duration-500 { transition-duration: 500ms; }
        .duration-700 { transition-duration: 700ms; }
        
        .scale-105 { transform: scale(1.05); }
        .scale-110 { transform: scale(1.1); }
        .hover\\:scale-105:hover { transform: scale(1.05); }
        .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
        .hover\\:-translate-y-0.5:hover { transform: translateY(-0.125rem); }
        .hover\\:-translate-y-4:hover { transform: translateY(-1rem); }
        .hover\\:rotate-12:hover { transform: rotate(12deg); }
        .group-hover\\:rotate-\\[10deg\\] { transition: transform 0.5s; }
        .group:hover .group-hover\\:rotate-\\[10deg\\] { transform: rotate(10deg); }
        
        .border { border-width: 1px; }
        .border-t { border-top-width: 1px; }
        .border-y { border-top-width: 1px; border-bottom-width: 1px; }
        .border-r { border-right-width: 1px; }
        .border-l-4 { border-left-width: 4px; }
        .border-b-2 { border-bottom-width: 2px; }
        .border-border { border-color: var(--border); }
        .border-white { border-color: white; }
        .border-white\\/10 { border-color: rgba(255,255,255,0.1); }
        .border-white\\/20 { border-color: rgba(255,255,255,0.2); }
        .border-secondary\\/30 { border-color: rgba(212, 175, 55, 0.3); }
        .border-primary\\/10 { border-color: rgba(0, 35, 71, 0.1); }
        
        .overflow-hidden { overflow: hidden; }
        .backdrop-blur { backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
        .backdrop-blur-md { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .backdrop-blur-xl { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
        .drop-shadow-sm { filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)); }
        .drop-shadow-md { filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); }
        .drop-shadow-2xl { filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)); }
        
        .tracking-tight { letter-spacing: -0.025em; }
        .tracking-tighter { letter-spacing: -0.05em; }
        .tracking-widest { letter-spacing: 0.1em; }
        .uppercase { text-transform: uppercase; }
        .leading-relaxed { line-height: 1.625; }
        .leading-snug { line-height: 1.375; }
        .object-cover { object-fit: cover; }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        .opacity-0 { opacity: 0; }
        .group:hover .group-hover\\:opacity-100 { opacity: 1; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </div>
  );
}

const InfoCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-text-muted text-sm font-medium mb-1">{label}</p>
      <p className="text-primary font-bold text-lg leading-tight">{value}</p>
    </div>
  </div>
);

export default App;
