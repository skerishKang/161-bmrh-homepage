import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { translations } from './constants/translations';
import { Info, MapPin, Home, Calendar, Thermometer, Building, ExternalLink, Image as ImageIcon, MessageSquare, ChevronRight } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('ko');
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'notice', 'community', 'services', 'about'
  const t = translations[lang];

  // Helper to render dynamic content based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero t={t.hero} actionsT={t.actions} />

            {/* Complex Info Section */}
            <section className="mt-40 container scroll-mt-32" id="complex-info">
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

              {/* Specific Location Strengths */}
              <div className="mt-16 grid md:grid-cols-3 gap-8 px-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-border">
                  <h4 className="font-black text-primary mb-3">#사통팔달 교통망</h4>
                  <p className="text-text-muted text-sm leading-relaxed">대남대로와 광주순환도로가 인접하여 광주 전역으로의 이동이 매우 편리합니다.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-border">
                  <h4 className="font-black text-primary mb-3">#우수한 교육학군</h4>
                  <p className="text-text-muted text-sm leading-relaxed">방림초, 봉선중 등 도보권 내 우수한 학군이 형성되어 있어 자녀 교육에 최적화되어 있습니다.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-border">
                  <h4 className="font-black text-primary mb-3">#풍부한 생활인프라</h4>
                  <p className="text-text-muted text-sm leading-relaxed">인근 대형마트와 남구청, 광주기독병원 등 생활 편의 시설이 밀집되어 있습니다.</p>
                </div>
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

            {/* Album-style Gallery Section */}
            <section className="mt-40 container">
              <div className="text-center mb-16">
                <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">PREMIUM ALBUM</h2>
                <h3 className="text-4xl font-extrabold text-primary">{lang === 'ko' ? '단지 갤러리' : 'Complex Gallery'}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 px-4">
                {[
                  { title: lang === 'ko' ? '단지 전경' : 'Complex Overview', desc: '웅장하고 모던한 방림명지로드힐의 건축 미학', bg: 'bg-slate-800' },
                  { title: lang === 'ko' ? '조경 및 산책로' : 'Landscaping & Trails', desc: '자연과 어우러진 도심 속 휴식 공간', bg: 'bg-emerald-900' },
                  { title: lang === 'ko' ? '입주민 커뮤니티' : 'Community Center', desc: '품격 있는 라이프스타일을 위한 전용 시설', bg: 'bg-indigo-950' },
                  { title: lang === 'ko' ? '스마트 주거' : 'Smart Living', desc: '최첨단 시스템으로 완성되는 미래형 주거', bg: 'bg-slate-900' }
                ].map((album, i) => (
                  <div key={i} className="group relative h-[450px] overflow-hidden rounded-[2rem] shadow-2xl cursor-pointer">
                    <div className={`absolute inset-0 ${album.bg} transition-transform duration-1000 group-hover:scale-110`}>
                      {/* Placeholder Visuals */}
                      <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <ImageIcon size={120} strokeWidth={0.5} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-10 left-10 right-10 text-white">
                      <span className="text-secondary text-[10px] font-black tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">Vol. {i + 1}</span>
                      <h4 className="text-4xl font-black mb-3 tracking-tighter">{album.title}</h4>
                      <p className="text-white/60 text-sm max-w-xs font-medium line-clamp-2">{album.desc}</p>
                      <div className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        );
      case 'notice':
        return <PageIntro title={t.nav.notice} subtitle="LATEST UPDATES" desc="입주민을 위한 아파트 소식과 공지사항을 확인하세요." />;
      case 'community':
        return <PageIntro title={t.nav.community} subtitle="Vibrant Living" desc="이웃과 소통하고 정보를 나누는 활발한 입주민 게시판입니다." />;
      case 'services':
        return <PageIntro title={t.nav.services} subtitle="Smart Services" desc="투표, 예약, 주차 관리 등 스마트한 입주민 편의 기능을 이용하세요." />;
      case 'about':
        return <PageIntro title={t.nav.about} subtitle="Our Vision" desc="방림명지로드힐이 추구하는 주거 가치와 단지 철학을 소개합니다." />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t.nav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="animate-fade-in">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="mt-40 bg-primary py-24 text-white">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-16 px-4">
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-black mb-6 text-white tracking-tighter">AURUM <span className="text-secondary">RESIDENCES</span></h3>
            <p className="text-white/40 mb-10 max-w-md text-lg leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'YT'].map((sns) => (
                <div key={sns} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all cursor-pointer font-black text-xs">
                  {sns}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-secondary uppercase tracking-widest text-xs">{t.footer.office}</h4>
            <ul className="space-y-4 text-white/50">
              <li>{t.footer.contact}</li>
              <li>{t.footer.hours}</li>
              <li>{t.footer.holiday}</li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-secondary uppercase tracking-widest text-xs">{t.footer.services}</h4>
            <ul className="space-y-4 text-white/50">
              <li className="hover:text-secondary cursor-pointer transition-colors">{t.actions.booking}</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">{t.actions.voting}</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">{t.actions.parking}</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">{t.actions.complaint}</li>
            </ul>
          </div>
        </div>
        <div className="container mt-20 pt-10 border-t border-white/5 text-center text-white/20 text-sm">
          &copy; 2026 Aurum Residences (Bangrim Myeongji Roadhill). All Rights Reserved.
        </div>
      </footer>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const InfoCard = ({ icon, label, value }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all group">
    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <p className="text-text-muted text-xs font-black uppercase tracking-widest mb-2 opacity-50">{label}</p>
    <p className="text-primary font-black text-2xl tracking-tight">{value}</p>
  </div>
);

const PageIntro = ({ title, subtitle, desc }) => (
  <section className="pt-48 pb-32 container px-4 animate-fade-in">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-secondary font-black tracking-widest uppercase mb-4 text-lg">{subtitle}</h2>
      <h3 className="text-7xl md:text-9xl font-black text-primary mb-12 tracking-tighter leading-none">{title}</h3>
      <p className="text-2xl md:text-3xl text-text-muted leading-relaxed font-medium">{desc}</p>

      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mt-32 p-20 bg-slate-50 rounded-[4rem] border border-dashed border-border flex flex-col items-center gap-8">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
          <MessageSquare className="text-secondary" size={32} />
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-black text-primary mb-2">컨텐츠 준비 중</h4>
          <p className="text-text-muted">실제 입주민 데이터 연동 작업이 진행 중입니다.</p>
        </div>
      </div>
    </div>
  </section>
);

export default App;
