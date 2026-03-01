import { motion } from 'framer-motion';

export default function Skills() {
    const coreSkills = [
        {
            category: "Penetration Testing",
            desc: "Identifying and exploiting vulnerabilities across networks, web apps, and endpoints using industry-standard methodologies.",
            icon: "security"
        },
        {
            category: "Incident Response",
            desc: "Rapid containment, eradication, and recovery from active cyber threats minimizing operational downtime.",
            icon: "medical_services"
        },
        /*
        {
            category: "Threat Hunting",
            desc: "Proactively searching through networks to detect and isolate advanced threats that evade existing security solutions.",
            icon: "policy"
        },
        */
        {
            category: "Risk Assessment",
            desc: "Evaluating IT infrastructure to identify potential risks and ensuring compliance with regulatory frameworks.",
            icon: "gavel"
        },
        /*
        {
            category: "Network Defense",
            desc: "Designing and implementing robust security architectures, firewalls, and IDS/IPS to protect critical assets.",
            icon: "vpn_lock"
        },
        {
            category: "Malware Analysis",
            desc: "Reverse-engineering malicious payloads to understand their behavior, origins, and indicators of compromise.",
            icon: "science"
        }
        */
    ];

    return (
        <section id="skills" className="py-20 relative w-full overflow-hidden scroll-mt-24">
            <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-100">Core Expertise</h2>
                        </div>
                        <p className="text-slate-400 max-w-2xl text-base mt-2">Leveraging deep technical knowledge to protect infrastructure, hunt adversaries, and ensure continuous operational resilience.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreSkills.map((skill, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="group relative p-6 rounded-2xl bg-background-card border border-secondary hover:border-primary/50 transition-all hover:translate-y-[-4px] shadow-lg hover:shadow-[0_10px_30px_rgba(89,242,13,0.1)] overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="w-14 h-14 bg-background-dark/80 rounded-xl border border-secondary group-hover:border-primary/40 flex items-center justify-center mb-6 shadow-inner relative z-10 transition-colors">
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-2xl">{skill.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white relative z-10">{skill.category}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed relative z-10 flex-grow">{skill.desc}</p>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-primary transform rotate-12">{skill.icon}</span>
                            </div>
                            <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
