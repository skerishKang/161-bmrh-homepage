import React from 'react';
import { Vote, CalendarCheck, Car, Key, ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero.png';

const Hero = ({ t, actionsT }) => {
    const quickActions = [
        { id: 'vote', name: actionsT.voting, icon: <Vote size={24} />, description: actionsT.votingDesc },
        { id: 'book', name: actionsT.booking, icon: <CalendarCheck size={24} />, description: actionsT.bookingDesc },
        { id: 'car', name: actionsT.parking, icon: <Car size={24} />, description: actionsT.parkingDesc },
        { id: 'complain', name: actionsT.complaint, icon: <Key size={24} />, description: actionsT.complaintDesc },
    ];

    const handleActionClick = (id) => {
        alert(`${actionsT.voting} ${id === 'vote' ? '페이지로 이동합니다.' : '기능 준비 중입니다.'}`);
    };

    return (
        <div className="relative min-h-[95vh] flex flex-col pt-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 scale-105">
                <img
                    src={heroImage}
                    alt="Bangrim Myeongji Roadhill"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="container relative z-10 flex-grow flex flex-col justify-center py-20">
                <div className="max-w-3xl animate-fade-in px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30 mb-8">
                        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        <span className="text-secondary text-sm font-black tracking-widest uppercase">{t.subtitle}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black leading-[1.05] mb-8 drop-shadow-2xl tracking-tighter">
                        {t.subtitle === 'Bangrim Myeongji Roadhill' ? (
                            <>
                                Modern Living <br />
                                At Its <br />
                                <span className="text-secondary">Finest</span>
                            </>
                        ) : (
                            <>
                                방림명지의 <br />
                                자부심으로 <br />
                                <span className="text-secondary">완성되다</span>
                            </>
                        )}
                    </h1>

                    <p className="text-white/90 text-lg md:text-2xl mb-12 max-w-xl leading-relaxed drop-shadow-md font-medium">
                        {t.description}
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button
                            onClick={() => document.getElementById('complex-info')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-secondary text-primary px-10 py-5 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 active:scale-95"
                        >
                            {t.cta1}
                        </button>
                        <button className="glass text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white/10 border-white/20 transition-all duration-300">
                            {t.cta2}
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="container relative z-10 -mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {quickActions.map((action, idx) => (
                        <div
                            key={action.name}
                            onClick={() => handleActionClick(action.id)}
                            className="group bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] hover:-translate-y-5 transition-all duration-500 cursor-pointer flex flex-col gap-6 border border-white"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[8deg] group-hover:scale-110">
                                {action.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-2 text-primary tracking-tighter">{action.name}</h3>
                                <p className="text-text-muted text-base leading-snug font-medium">{action.description}</p>
                            </div>
                            <div className="mt-auto flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                <span>Open Service</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
