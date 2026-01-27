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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30 mb-8">
                        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        <span className="text-secondary text-[10px] font-black tracking-widest uppercase">{t.subtitle}</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-black leading-[0.95] mb-10 drop-shadow-2xl tracking-tighter whitespace-pre-line">
                        {t.title}
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium drop-shadow-lg opacity-90">
                        {t.description}
                    </p>

                    <div className="flex flex-wrap gap-8 mt-8">
                        <button
                            onClick={() => document.getElementById('complex-info')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group bg-secondary text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-all shadow-2xl flex items-center gap-3"
                        >
                            {t.cta1}
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white/20 bg-slate-400 overflow-hidden shadow-xl" />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-black text-xl leading-none">197세대</span>
                                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">Total Units</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Vertical Action Stack */}
                <div className="lg:col-span-4 flex flex-col gap-4 lg:ml-auto w-full max-w-sm">
                    {quickActions.map((action, i) => (
                        <div
                            key={action.id}
                            className="group bg-white/5 backdrop-blur-3xl p-5 rounded-3xl border border-white/10 hover:bg-white hover:border-white transition-all duration-500 cursor-pointer flex items-center gap-5 shadow-2xl relative overflow-hidden"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {action.icon}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-lg font-black text-white group-hover:text-primary transition-colors tracking-tight leading-tight">{action.name}</h3>
                                <p className="text-white/40 text-[10px] group-hover:text-text-muted transition-colors font-bold uppercase tracking-widest mt-1">{action.desc}</p>
                            </div>
                            <ChevronRight className="text-white/20 group-hover:text-secondary group-hover:translate-x-1 transition-all" size={20} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Hero Information Bar */}
            <div className="absolute bottom-10 left-10 hidden xl:flex gap-12 text-white/40 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex flex-col">
                    <span className="text-sm font-bold uppercase tracking-widest opacity-60">Status</span>
                    <span className="text-xl font-black text-white tracking-tight mt-1">Completed</span>
                </div>
                <div className="w-px h-8 bg-white/10 self-center" />
                <div className="flex flex-col">
                    <span className="text-sm font-bold uppercase tracking-widest opacity-60">Type</span>
                    <span className="text-xl font-black text-white tracking-tight mt-1">Premium Apt</span>
                </div>
                <div className="w-px h-8 bg-white/10 self-center" />
                <div className="flex flex-col">
                    <span className="text-sm font-bold uppercase tracking-widest opacity-60">Area</span>
                    <span className="text-xl font-black text-white tracking-tight mt-1">Bangrim-dong</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
