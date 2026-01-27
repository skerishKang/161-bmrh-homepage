import React from 'react';
import { Vote, CalendarCheck, Car, Key, MapPin, Building2, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import heroImage from '../assets/images/hero.png';

const Hero = ({ t, actionsT }) => {
    const quickActions = [
        { id: 'vote', name: actionsT.voting, icon: <Vote size={24} />, desc: actionsT.votingDesc },
        { id: 'book', name: actionsT.booking, icon: <CalendarCheck size={24} />, desc: actionsT.bookingDesc },
        { id: 'car', name: actionsT.parking, icon: <Car size={24} />, desc: actionsT.parkingDesc },
        { id: 'complain', name: actionsT.complaint, icon: <Key size={24} />, desc: actionsT.complaintDesc },
    ];

    return (
        <div className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Dynamic Background with Overlays */}
            <div className="absolute inset-0 z-0 scale-110">
                <img
                    src={heroImage}
                    alt="Bangrim Myeongji Roadhill"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-12 gap-12 px-4 items-center">
                {/* Left Content - Typography Focus */}
                <div className="lg:col-span-8 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30 mb-8">
                        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        <span className="text-secondary text-sm font-black tracking-widest uppercase">{t.subtitle}</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-black leading-[0.95] mb-10 drop-shadow-2xl tracking-tighter">
                        {t.subtitle === 'Bangrim Myeongji Roadhill' ? (
                            <>
                                Modern <br />
                                Aesthetics <br />
                                <span className="text-secondary">Refined</span>
                            </>
                        ) : (
                            <>
                                방림명의 <br />
                                품격이 <br />
                                <span className="text-secondary">숨쉬다</span>
                            </>
                        )}
                    </h1>

                    <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-medium drop-shadow-lg">
                        {t.description}
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8">
                        <button
                            onClick={() => document.getElementById('complex-info')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group bg-secondary text-primary px-12 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-2xl flex items-center gap-3"
                        >
                            {t.cta1}
                            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-white/10 bg-slate-300 overflow-hidden shadow-xl" />
                            ))}
                            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-bold text-xs border border-white/20">
                                +197
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Vertical Action Stack inspired by reference */}
                <div className="lg:col-span-4 flex flex-col gap-4 lg:ml-auto w-full max-w-sm">
                    {quickActions.map((action, i) => (
                        <div
                            key={action.id}
                            className="group bg-white/10 backdrop-blur-3xl p-6 rounded-[2rem] border border-white/20 hover:bg-white hover:scale-105 transition-all duration-500 cursor-pointer flex items-center gap-6 shadow-2xl relative overflow-hidden"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-inner">
                                {action.icon}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors tracking-tight">{action.name}</h3>
                                <p className="text-white/50 text-xs group-hover:text-text-muted transition-colors font-bold uppercase tracking-widest leading-none mt-1">{action.desc}</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                <ChevronRight className="text-secondary" size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hero Stats Overlay */}
            <div className="absolute bottom-12 left-12 hidden xl:flex gap-16 text-white/40 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div>
                    <span className="block text-2xl font-black text-white tracking-tighter">197 Units</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Total Households</span>
                </div>
                <div className="w-px h-10 bg-white/10 self-center" />
                <div>
                    <span className="block text-2xl font-black text-white tracking-tighter">24 Floors</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Building Height</span>
                </div>
                <div className="w-px h-10 bg-white/10 self-center" />
                <div>
                    <span className="block text-2xl font-black text-white tracking-tighter">Gwangju</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Location</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
