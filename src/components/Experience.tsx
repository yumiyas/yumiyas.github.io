import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            role: "Penetration Tester",
            company: "Universitas Terbuka",
            period: "2025 - 2026",
            description: "Executed comprehensive black-box and white-box penetration tests on enterprise web applications and internal networks. Discovered and patched critical vulnerabilities.",
            skills: ["Web App Pentesting", "Network Exploitation", "Vulnerability Research", "Report Writing"]
        },
        {
            role: "Security Operations Center (SOC) Analyst L1",
            company: "Universitas Terbuka",
            period: "2024 - 2026",
            description: "Monitored SIEM alerts, triaged security events, and performed initial malware analysis. Maintained operational security across a on premise infrastructure.",
            skills: ["SIEM Monitoring", "Log Analysis", "Malware Triage", "Cloud Security"]
        },
        {
            role: "IT Helpdesk",
            company: "PT. Indah Kiat Pulp & Paper Tbk",
            period: "2018",
            description: "Performed regular data backups, provided hardware and software troubleshooting, and conducted routine server maintenance to ensure operational stability.",
            skills: ["Data Backup & Recovery", "Hardware Troubleshooting", "Software Support", "Server Maintenance"]
        }
    ];

    return (
        <section id="experience" className="py-20 relative w-full overflow-hidden scroll-mt-24">
            <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(89,242,13,0.15)]">
                        <span className="material-symbols-outlined text-primary text-3xl">work_history</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Professional Experience</h2>
                        <p className="text-slate-400 mt-1 max-w-lg">A history of protecting critical infrastructure and advancing security postures.</p>
                    </div>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-6 md:ml-8 gap-10 flex flex-col">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline node */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background-dark border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(89,242,13,0.8)] transition-all duration-300"></div>

                            <div className="bg-background-dark/80 backdrop-blur-sm border border-secondary rounded-xl p-6 hover:border-primary/40 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(89,242,13,0.1)]">
                                <span className="inline-block px-3 py-1 mb-3 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                                    {exp.period}
                                </span>
                                <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">{exp.role}</h3>
                                <h4 className="text-sm text-slate-400 font-medium mb-4">{exp.company}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-secondary/50">
                                    {exp.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="text-[10px] font-mono text-slate-300 bg-secondary/50 px-2 py-1 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
