import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Certifications() {
    const [activeTab, setActiveTab] = useState<'bootcamp' | 'webinar' | 'expertise' | 'course'>('bootcamp');

    const tabs = [
        { id: 'bootcamp', label: 'Bootcamp', icon: 'school' },
        { id: 'webinar', label: 'Webinar', icon: 'cast_for_education' },
        { id: 'expertise', label: 'Expertise', icon: 'verified' },
        { id: 'course', label: 'Course', icon: 'menu_book' },
    ] as const;

    const renderContent = () => {
        switch (activeTab) {
            case 'bootcamp':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2026</span>
                                <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Completed</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Cyber Defense IDN</h4>
                            <p className="text-slate-400 text-base flex-grow">Introduction to cyber security, digital forensics, reading network traffic and anomalies, log analysis, IPS and IDS.</p>
                        </div>

                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2025</span>
                                <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Completed</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Mikrotik IDN</h4>
                            <p className="text-slate-400 text-base flex-grow">Awarded a scholarship for the MikroTik Certified Network Associate (MTCNA) training program, focusing on core routing, switching, and network management.</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2024</span>
                                <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Completed</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Surosowan Cyber</h4>
                            <p className="text-slate-400 text-base flex-grow">A comprehensive introduction covering Ethical Hacking, Bug Bounty programs, Vulnerability Assessment (VA), and Open Source Intelligence (OSINT).</p>
                        </div>
                    </motion.div>
                );
            case 'webinar':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"

                    >
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2026</span>
                                <span className="bg-slate-700/50 text-slate-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Attended</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Weaponizing Sliver C2</h4>
                            <p className="text-slate-400 text-base flex-grow">Cyberwarfare Labs</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2026</span>
                                <span className="bg-slate-700/50 text-slate-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Attended</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Anomaly Detection In Splunk Using ML Models</h4>
                            <p className="text-slate-400 text-base flex-grow">Cyberwarfare Labs</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2025</span>
                                <span className="bg-slate-700/50 text-slate-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Attended</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Cyber Security Penetration Testing Knowledge Sharing Program</h4>
                            <p className="text-slate-400 text-base flex-grow">GIS Teknologi Prasasta</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2024</span>
                                <span className="bg-slate-700/50 text-slate-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Attended</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Pemindaian Router OS Mikrotik dengan Nmap</h4>
                            <p className="text-slate-400 text-base flex-grow">Institute Teknologi Tangerang Selatan</p>
                        </div>
                    </motion.div>
                );
            case 'expertise':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">Microsoft</span>
                                <span className="bg-green-900/30 text-green-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold border border-green-500/30">Active</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Microsoft Certified: Security, Compliance, and Identity Fundamentals</h4>
                            <p className="text-slate-400 text-base flex-grow">Certified Professional</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">The SecOps Group</span>
                                <span className="bg-green-900/30 text-green-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold border border-green-500/30">Active</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Certified Network Security Practitioner (CNSP)</h4>
                            <p className="text-slate-400 text-base flex-grow">Practical Exam Passed</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">Mikrotik</span>
                                <span className="bg-green-900/30 text-green-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold border border-green-500/30">Active</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Mikrotik Certified Network Associate (MTCNA)</h4>
                            <p className="text-slate-400 text-base flex-grow">Certified Professional</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">Red Team Leaders</span>
                                <span className="bg-green-900/30 text-green-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold border border-green-500/30">Active</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Certified Red Team Operation Management (CRTOM) </h4>
                            <p className="text-slate-400 text-base flex-grow">Practical Exam Passed</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">Hack & Fix Academy</span>
                                <span className="bg-green-900/30 text-green-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold border border-green-500/30">Active</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Certified Phishing Prevention Specialist (CPPS)</h4>
                            <p className="text-slate-400 text-base flex-grow">Practical Exam Passed</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">Universitas Terbuka</span>
                                <span className="bg-green-900/30 text-green-400 text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold border border-green-500/30">Active</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Pelatihan Cyber Security bagi Staff ICT Universitas Terbuka  </h4>
                            <p className="text-slate-400 text-base flex-grow">Hands on Exam </p>
                        </div>
                    </motion.div>
                );
            case 'course':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2025</span>
                                <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Completed</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Cyber Security Course Level Basic</h4>
                            <p className="text-slate-400 text-base flex-grow">ITBOX (Cyber Security Path )</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2025</span>
                                <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Completed</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Fundamental Penetration Testing</h4>
                            <p className="text-slate-400 text-base flex-grow">Coding Studio</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2025</span>
                                <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Completed</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">HCIA-Security V4.0 Course</h4>
                            <p className="text-slate-400 text-base flex-grow">Huawei</p>
                        </div>
                        <div className="group p-6 bg-background-dark border border-secondary hover:border-primary/40 rounded-xl transition-all hover:translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)] relative overflow-hidden h-full flex flex-col">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary font-bold text-sm">2025</span>
                                <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded uppercase tracking-wider font-bold">Completed</span>
                            </div>
                            <h4 className="text-slate-100 font-medium mb-2 group-hover:text-primary transition-colors text-xl">Cyber Theat Intellegence 101</h4>
                            <p className="text-slate-400 text-base flex-grow">arcX</p>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div id="about" className="py-20 bg-background-card/20 border-t border-secondary relative w-full scroll-mt-24">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(89,242,13,0.15)]">
                            <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Certifications & Training</h2>
                            <p className="text-slate-400 mt-1 max-w-lg">A track record of continuous learning and verified expertise in the cybersecurity domain.</p>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 bg-background-dark/50 p-2 rounded-xl border border-secondary/50 backdrop-blur-sm">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 outline-none relative z-10 ${isActive
                                    ? 'text-background-dark shadow-md'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 bg-primary rounded-lg -z-10 shadow-[0_0_15px_rgba(89,242,13,0.4)]"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={`material-symbols-outlined text-lg ${isActive ? 'text-background-dark' : 'text-slate-500'}`}>
                                    {tab.icon}
                                </span>
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="min-h-[300px] relative overflow-hidden w-full max-w-full">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab}>
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
