import { motion } from 'framer-motion';
import HackingTerminal from './HackingTerminal';

export default function Tools() {
    const leftMarquee = [
        { icon: 'view_in_ar', name: 'Docker' },
        { icon: 'terminal', name: 'Kali Linux' },
        { icon: 'bug_report', name: 'Metasploit' },
        { icon: 'security', name: 'Burp Suite' },
        { icon: 'travel_explore', name: 'OSINT' },
    ];

    const rightMarquee = [
        { icon: 'database', name: 'MySQL' },
        { icon: 'network_check', name: 'Wireshark' },
        { icon: 'policy', name: 'Wazuh' },
        { icon: 'shield', name: 'IDS/IPS' },
        { icon: 'code', name: 'Python' },
        { icon: 'router', name: 'MikroTik' },
    ];

    return (
        <section id="tools" className="py-16 bg-background-card/20 border-y border-secondary relative w-full scroll-mt-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-2xl">memory</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100">Tools</h2>
                </div>
                <p className="text-slate-400 mt-2 max-w-2xl text-base">
                    Mastery over industry-standard tools for penetration testing, packet analysis, and secure containerization.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 overflow-hidden relative w-full max-w-full h-full justify-center"
                >
                    {/* Left Marquee (Scrolls Left) */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
                        {[...leftMarquee, ...leftMarquee].map((skill, idx) => (
                            <div
                                key={`left-${idx}`}
                                className="flex min-w-[140px] flex-col items-center gap-2 p-3 bg-background-dark/80 backdrop-blur-sm border border-secondary rounded-xl hover:border-primary/50 transition-colors group shadow-md hover:shadow-[0_0_15px_rgba(89,242,13,0.15)] cursor-pointer"
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-background-card rounded-lg border border-secondary group-hover:border-primary/30 transition-colors shadow-inner">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">{skill.icon}</span>
                                </div>
                                <span className="text-slate-300 font-mono font-bold text-xs tracking-wide group-hover:text-white transition-colors">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Marquee (Scrolls Right) */}
                    <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] gap-4">
                        {[...rightMarquee, ...rightMarquee].map((skill, idx) => (
                            <div
                                key={`right-${idx}`}
                                className="flex min-w-[140px] flex-col items-center gap-2 p-3 bg-background-dark/80 backdrop-blur-sm border border-secondary rounded-xl hover:border-primary/50 transition-colors group shadow-md hover:shadow-[0_0_15px_rgba(89,242,13,0.15)] cursor-pointer"
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-background-card rounded-lg border border-secondary group-hover:border-primary/30 transition-colors shadow-inner">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">{skill.icon}</span>
                                </div>
                                <span className="text-slate-300 font-mono font-bold text-xs tracking-wide group-hover:text-white transition-colors">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Replaced Marquee with user-provided image requirement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden border border-secondary bg-background-dark shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center group"
                >
                    <div className="absolute inset-0 z-0 opacity-10 blur-[1px]">
                        <HackingTerminal />
                    </div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-10"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90 z-10 pointer-events-none"></div>
                    <div className="relative z-20 flex flex-col items-center text-center p-4 mt-auto self-end w-full">
                        <span className="material-symbols-outlined text-primary text-3xl mb-1 drop-shadow-lg">terminal</span>
                        <h4 className="text-white text-lg font-bold uppercase tracking-widest">Hacking Terminal</h4>
                        <p className="text-primary/80 font-mono text-xs mt-1">Status: Operational</p>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
